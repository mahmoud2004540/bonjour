/** Local achievements — never invent unlocked badges without real events */

import { getStoredProfile } from "./learner-store";
import { getAllVocab } from "./vocab-store";
import { getAllUnits, isUnitComplete } from "@/domain/lessons/registry";

export interface Achievement {
  id: string;
  unlocked: boolean;
}

export function getAchievements(): Achievement[] {
  const p = getStoredProfile();
  const vocab = typeof window !== "undefined" ? getAllVocab() : [];
  const completed = p?.completedGoals.length ?? 0;
  const units = p ? getAllUnits().filter((u) => isUnitComplete(u, p)).length : 0;
  const streak = p?.streakDays ?? 0;
  const mastered = vocab.filter((v) => v.status === "mastered").length;

  return [
    { id: "first_goal", unlocked: completed >= 1 },
    { id: "five_goals", unlocked: completed >= 5 },
    { id: "ten_units", unlocked: units >= 10 },
    { id: "streak_3", unlocked: streak >= 3 },
    { id: "vocab_master_1", unlocked: mastered >= 1 },
  ];
}
