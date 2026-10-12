import type { LearnerProfile } from "../types";
import type { LessonUnit } from "./types";
import { A1_UNITS } from "./units-a1";
import { A2_C2_UNITS } from "./units-a2-c2";

export const ALL_UNITS: LessonUnit[] = [...A1_UNITS, ...A2_C2_UNITS].sort(
  (a, b) => a.order - b.order
);

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

/** Next unit in order that is not yet complete */
export function getNextUnit(profile: LearnerProfile): LessonUnit | null {
  for (const unit of ALL_UNITS) {
    if (!isUnitComplete(unit, profile)) return unit;
  }
  return null;
}

export function getUnitsByLevel(level: string): LessonUnit[] {
  return ALL_UNITS.filter((u) => u.level === level);
}
