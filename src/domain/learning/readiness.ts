/**
 * Exam / institute readiness from on-site curriculum completion.
 * Not an official certificate — a study signal for the learner.
 */

import type { LearnerProfile } from "../types";
import {
  LEVEL_SEQUENCE,
  getExamTrackUnits,
  getUnitsByLevel,
  isUnitComplete,
} from "../lessons/registry";

export type LevelReadiness = {
  level: string;
  totalUnits: number;
  doneUnits: number;
  examUnits: number;
  examDone: number;
  /** 0–100 */
  percent: number;
  label: "start" | "building" | "ready_practice" | "ready_exam";
};

export function getLevelReadiness(
  profile: LearnerProfile,
  level: string
): LevelReadiness {
  const units = getUnitsByLevel(level);
  const exam = getExamTrackUnits(level);
  const doneUnits = units.filter((u) => isUnitComplete(u, profile)).length;
  const examDone = exam.filter((u) => isUnitComplete(u, profile)).length;
  const totalUnits = units.length || 1;

  // Weight: 70% all units, 30% exam-track (if any)
  let percent: number;
  if (exam.length === 0) {
    percent = Math.round((doneUnits / totalUnits) * 100);
  } else {
    const base = (doneUnits / totalUnits) * 70;
    const ex = (examDone / exam.length) * 30;
    percent = Math.round(base + ex);
  }

  let label: LevelReadiness["label"] = "start";
  if (percent >= 90) label = "ready_exam";
  else if (percent >= 70) label = "ready_practice";
  else if (percent >= 25) label = "building";

  return {
    level,
    totalUnits: units.length,
    doneUnits,
    examUnits: exam.length,
    examDone,
    percent,
    label,
  };
}

export function getAllLevelsReadiness(
  profile: LearnerProfile
): LevelReadiness[] {
  return LEVEL_SEQUENCE.map((l) => getLevelReadiness(profile, l));
}

export function getOverallReadiness(profile: LearnerProfile): number {
  const rows = getAllLevelsReadiness(profile);
  if (rows.length === 0) return 0;
  return Math.round(rows.reduce((s, r) => s + r.percent, 0) / rows.length);
}

/** Suggested practice minutes remaining for institute-like volume */
export function suggestedPracticeMinutes(
  profile: LearnerProfile,
  level: string
): number {
  const r = getLevelReadiness(profile, level);
  // Rough: each incomplete unit ~25 min equivalent practice
  const remaining = Math.max(0, r.totalUnits - r.doneUnits);
  return remaining * 25;
}
