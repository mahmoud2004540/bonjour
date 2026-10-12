import type { LearnerProfile } from "../types";
import type { LessonUnit } from "./types";
import { A1_UNITS } from "./units-a1";
import { A1_DEEP_UNITS } from "./units-a1-deep";
import { A2_C2_UNITS } from "./units-a2-c2";
import { EXTRA_UNITS } from "./units-extra";
import { DAILY_LIFE_UNITS } from "./units-daily-life";
import { EXAM_TRACK_UNITS } from "./units-exam-track";
import { LEVEL_DEPTH_UNITS } from "./units-level-depth";
import { A1_B1_MORE_UNITS } from "./units-a1-b1-more";
import { enrichUnit } from "./enrich";

const LEVEL_RANK: Record<string, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
};

function mergeById(units: LessonUnit[]): LessonUnit[] {
  const map = new Map<string, LessonUnit>();
  for (const u of units) {
    map.set(u.id, u);
  }
  return Array.from(map.values()).sort((a, b) => {
    const lr = (LEVEL_RANK[a.level] ?? 99) - (LEVEL_RANK[b.level] ?? 99);
    if (lr !== 0) return lr;
    return a.order - b.order;
  });
}

const RAW_UNITS: LessonUnit[] = mergeById([
  ...A1_UNITS,
  ...A1_DEEP_UNITS,
  ...LEVEL_DEPTH_UNITS,
  ...A1_B1_MORE_UNITS,
  ...A2_C2_UNITS,
  ...EXTRA_UNITS,
  ...DAILY_LIFE_UNITS,
  ...EXAM_TRACK_UNITS,
]);

export const ALL_UNITS: LessonUnit[] = RAW_UNITS.map(enrichUnit);

export const LEVEL_SEQUENCE = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export function getUnitById(id: string): LessonUnit | undefined {
  return ALL_UNITS.find((u) => u.id === id);
}

export function getFirstUnit(): LessonUnit {
  return ALL_UNITS[0];
}

export function getAllUnits(): LessonUnit[] {
  return ALL_UNITS;
}

export function isUnitComplete(
  unit: LessonUnit,
  profile: LearnerProfile
): boolean {
  return unit.completesGoals.every((g) => profile.completedGoals.includes(g));
}

export function getNextUnit(profile: LearnerProfile): LessonUnit | null {
  for (const unit of ALL_UNITS) {
    if (!isUnitComplete(unit, profile)) return unit;
  }
  return null;
}

export function getUnitAfter(unitId: string): LessonUnit | null {
  const i = ALL_UNITS.findIndex((u) => u.id === unitId);
  if (i < 0 || i >= ALL_UNITS.length - 1) return null;
  return ALL_UNITS[i + 1];
}

export function getUnitsByLevel(level: string): LessonUnit[] {
  return ALL_UNITS.filter((u) => u.level === level);
}

export function isLevelUnlocked(
  level: string,
  profile: LearnerProfile
): boolean {
  const idx = LEVEL_SEQUENCE.indexOf(level as (typeof LEVEL_SEQUENCE)[number]);
  if (idx <= 0) return true;
  const prev = LEVEL_SEQUENCE[idx - 1];
  return getUnitsByLevel(prev).every((u) => isUnitComplete(u, profile));
}

export function isUnitAccessible(
  unit: LessonUnit,
  profile: LearnerProfile
): boolean {
  if (!isLevelUnlocked(unit.level, profile)) return false;
  const next = getNextUnit(profile);
  if (!next) return true;
  const nextIdx = ALL_UNITS.findIndex((u) => u.id === next.id);
  const thisIdx = ALL_UNITS.findIndex((u) => u.id === unit.id);
  return thisIdx <= nextIdx;
}

export function getExamTrackUnits(level: string): LessonUnit[] {
  return ALL_UNITS.filter(
    (u) => u.level === level && u.id.includes("-exam-")
  );
}

export function getCurriculumStats() {
  const byLevel: Record<string, number> = {};
  for (const u of ALL_UNITS) {
    byLevel[u.level] = (byLevel[u.level] ?? 0) + 1;
  }
  return {
    total: ALL_UNITS.length,
    byLevel,
    minExercises: Math.min(...ALL_UNITS.map((u) => u.exercises.length)),
    minQuiz: Math.min(...ALL_UNITS.map((u) => u.quiz.length)),
  };
}
