/**
 * Learner state — localStorage (Supabase-ready later).
 */

import type {
  LearnerProfile,
  PlacementObservation,
  PracticeAttempt,
  LearnerPreferences,
  Locale,
  CefrLevel,
  SkillEvidence,
  TargetLanguage,
} from "@/domain/types";
import { getPrimaryNextAction } from "@/domain/learning/recommendation";

const STORAGE_KEY = "bonjour_learner_v1";

const FIRST_GOAL: Record<TargetLanguage, string> = {
  fr: "goal-introduce-self",
  en: "goal-en-name",
  de: "goal-de-name",
  it: "goal-it-name",
  es: "goal-es-name",
};

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function getStoredProfile(): LearnerProfile | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as LearnerProfile;
  } catch {
    return null;
  }
}

export function saveProfile(profile: LearnerProfile): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function createLearner(
  displayName: string,
  email: string,
  locale: Locale
): LearnerProfile {
  const profile: LearnerProfile = {
    id: generateId(),
    displayName,
    email,
    createdAt: new Date().toISOString(),
    locale,
    preferences: {
      objectives: [],
      situations: [],
      availability: "",
      preferredStyle: "",
      targetLanguage: "fr",
      dailyMinutes: 15,
    },
    placementCompleted: false,
    estimatedStartingLevel: "unknown",
    skillEvidence: [],
    completedGoals: [],
    currentPriorities: [],
    xp: 0,
    streakDays: 0,
  };
  saveProfile(profile);
  return profile;
}

export function updatePreferences(
  preferences: LearnerPreferences
): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;
  profile.preferences = { ...profile.preferences, ...preferences };
  saveProfile(profile);
  return profile;
}

/** Skip placement for true beginners — honest empty evidence */
export function startAsBeginner(): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;
  const lang = profile.preferences.targetLanguage ?? "fr";
  profile.placementCompleted = true;
  profile.estimatedStartingLevel = "A1";
  profile.skillEvidence = [
    { dimension: "vocabulary", status: "unknown" },
    { dimension: "grammar", status: "unknown" },
    { dimension: "reading", status: "unknown" },
    { dimension: "listening", status: "unknown" },
    { dimension: "speaking", status: "unknown" },
  ];
  profile.currentPriorities = [FIRST_GOAL[lang] ?? "goal-introduce-self"];
  saveProfile(profile);
  return profile;
}

export function finalizePlacement(
  observations: PlacementObservation[]
): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;

  const skillEvidence: SkillEvidence[] = [];
  const dimensions = [
    "vocabulary",
    "grammar",
    "reading",
    "listening",
    "speaking",
  ] as const;

  for (const dim of dimensions) {
    const dimObs = observations.filter((o) => o.dimension === dim);
    if (dimObs.length === 0) {
      skillEvidence.push({ dimension: dim, status: "unknown" });
      continue;
    }

    const correctCount = dimObs.filter((o) => o.isCorrect === true).length;
    const totalScored = dimObs.filter((o) => o.isCorrect !== null).length;

    let status: SkillEvidence["status"] = "unknown";
    if (totalScored === 0) status = "unknown";
    else if (correctCount === totalScored) status = "demonstrated";
    else if (correctCount > 0) status = "partial";
    else status = "not_yet";

    skillEvidence.push({
      dimension: dim,
      status,
      observedAt: new Date().toISOString(),
    });
  }

  const demonstrated = skillEvidence.filter((e) => e.status === "demonstrated").length;
  let estimated: CefrLevel = "A1";
  if (demonstrated >= 4) estimated = "A2";

  const lang = profile.preferences.targetLanguage ?? "fr";

  profile.placementCompleted = true;
  profile.estimatedStartingLevel = estimated;
  profile.skillEvidence = skillEvidence;
  profile.currentPriorities = [FIRST_GOAL[lang] ?? "goal-introduce-self"];

  saveProfile(profile);
  return profile;
}

export function markGoalCompleted(goalId: string): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;
  if (!profile.completedGoals.includes(goalId)) {
    profile.completedGoals.push(goalId);
    profile.xp = (profile.xp ?? 0) + 25;
  }
  const next = getPrimaryNextAction(profile);
  profile.currentPriorities = next ? [next.goalId] : [];
  saveProfile(profile);
  return profile;
}

export function recordPracticeAttempt(
  taskId: string,
  goalId: string,
  response: string,
  evidenceStatus: PracticeAttempt["evidenceStatus"]
): void {
  if (evidenceStatus === "demonstrated") {
    markGoalCompleted(goalId);
  }
}

export function clearLearner(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
