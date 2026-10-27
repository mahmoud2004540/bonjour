/**
 * Syllabus registry. Course units are exposed to the rest of the app as
 * LessonUnit entries (path, dashboard, readiness), and the dedicated unit
 * player renders their full structure.
 */

import type { LessonUnit } from "../lessons/types";
import type { CourseUnit } from "./types";
import { unitGoalId } from "./types";
import { LEGACY_UNIT_GOALS } from "./legacy";
import { A1_COURSE } from "./a1";
import { A2_COURSE } from "./a2";

export const COURSE_UNITS: CourseUnit[] = [...A1_COURSE, ...A2_COURSE];

/** Levels whose old lessons are fully replaced by the syllabus. */
export const SYLLABUS_LEVELS = Array.from(new Set(COURSE_UNITS.map((u) => u.level)));

export function getCourseUnit(id: string): CourseUnit | undefined {
  return COURSE_UNITS.find((u) => u.id === id);
}

export function getCourseUnitsByLevel(level: string): CourseUnit[] {
  return COURSE_UNITS.filter((u) => u.level === level).sort((a, b) => a.order - b.order);
}

/** Old lesson id → course unit id, for redirects. */
export function getReplacementUnitId(oldId: string): string | undefined {
  return COURSE_UNITS.find((u) => u.replaces?.includes(oldId))?.id;
}

/** View of a course unit in the shape the path, dashboard and practice tools use. */
export function toLessonUnit(u: CourseUnit): LessonUnit {
  const fills = u.practice.filter((p) => p.kind === "fill");
  return {
    id: u.id,
    level: u.level,
    order: u.order,
    title: u.title,
    completesGoals: [unitGoalId(u)],
    lesson: {
      intro: u.context,
      dialogue: u.dialogue.lines.map((l) => `— ${l.fr}`),
      tip: u.grammar[0]?.watchOut ?? u.grammar[0]?.title ?? u.theme,
    },
    vocab: u.vocabulary.flatMap((g) =>
      g.items.map((v) => ({ term: v.fr, meaning: v.meaning, example: v.example ?? v.fr }))
    ),
    exercises: fills.map((p) => ({
      id: p.id,
      prompt: p.sentence
        ? { en: `${p.prompt.en} ${p.sentence}`, fr: `${p.prompt.fr} ${p.sentence}`, ar: `${p.prompt.ar} ${p.sentence}` }
        : p.prompt,
      answers: p.answers,
    })),
    review: {
      summary: u.theme,
      checklist: {
        en: u.canDo.map((c) => c.en),
        fr: u.canDo.map((c) => c.fr),
        ar: u.canDo.map((c) => c.ar),
      },
    },
    quiz: u.test.map((q) => ({
      id: q.id,
      prompt: q.prompt,
      options: q.optionsL10n ?? { en: q.options!, fr: q.options!, ar: q.options! },
      correctIndex: q.correctIndex,
    })),
    passRatio: u.passRatio,
  };
}

/**
 * Carry progress from replaced lessons: a course unit counts as done when
 * every old lesson it replaces had been completed. Pure; returns new goals.
 */
export function migrateLegacyProgress(completedGoals: string[]): string[] {
  const done = new Set(completedGoals);
  const added: string[] = [];
  for (const u of COURSE_UNITS) {
    const goal = unitGoalId(u);
    if (done.has(goal) || !u.replaces?.length) continue;
    const allOldDone = u.replaces.every((oldId) =>
      (LEGACY_UNIT_GOALS[oldId] ?? [oldId]).every((g) => done.has(g))
    );
    if (allOldDone) added.push(goal);
  }
  return added;
}
