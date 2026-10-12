import type { LearnerProfile } from "../types";
import type { LessonUnit } from "./types";
import { A1_UNITS } from "./units-a1";
import { A1_DEEP_UNITS } from "./units-a1-deep";
import { A2_C2_UNITS } from "./units-a2-c2";
import { EXTRA_UNITS } from "./units-extra";
import { DAILY_LIFE_UNITS } from "./units-daily-life";
import { enrichUnit } from "./enrich";

/** Deep A1 overrides base A1 when same id */
function mergeById(units: LessonUnit[]): LessonUnit[] {
  const map = new Map<string, LessonUnit>();
  for (const u of units) {
    map.set(u.id, u);
  }
  return Array.from(map.values()).sort((a, b) => a.order - b.order);
}

const RAW_UNITS: LessonUnit[] = mergeById([
  ...A1_UNITS,
  ...A1_DEEP_UNITS,
  ...A2_C2_UNITS,
  ...EXTRA_UNITS,
  ...DAILY_LIFE_UNITS,
]);

export const ALL_UNITS: LessonUnit[] = RAW_UNITS.map(enrichUnit);

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

export function getUnitsByLevel(level: string): LessonUnit[] {
  return ALL_UNITS.filter((u) => u.level === level);
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
