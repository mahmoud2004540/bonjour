/**
 * Application service for learner state.
 * Currently uses localStorage — designed to be swapped for Supabase later.
 * No fake data is invented.
 */

import type {
  LearnerProfile,
  PlacementAttempt,
  PlacementObservation,
  PracticeAttempt,
  LearnerPreferences,
  Locale,
  CefrLevel,
  SkillEvidence,
} from "@/domain/types";
import { PLACEMENT_VERSION } from "@/domain/placement/questions";
import { getPrimaryNextAction } from "@/domain/learning/recommendation";

const STORAGE_KEY = "bonjour_learner_v1";

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
    },
    placementCompleted: false,
    estimatedStartingLevel: "unknown",
    skillEvidence: [],
    completedGoals: [],
    currentPriorities: [],
  };
  saveProfile(profile);
  return profile;
}

export function updatePreferences(
  preferences: LearnerPreferences
): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;
  profile.preferences = preferences;
  saveProfile(profile);
  return profile;
}

export function finalizePlacement(
  observations: PlacementObservation[]
): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;

  // Build evidence from observations — no invented mastery
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
    if (totalScored === 0) {
      status = "unknown"; // open responses only
    } else if (correctCount === totalScored) {
      status = "demonstrated";
    } else if (correctCount > 0) {
      status = "partial";
    } else {
      status = "not_yet";
    }

    skillEvidence.push({
      dimension: dim,
      status,
      observedAt: new Date().toISOString(),
    });
  }

  // Estimate starting level only from available evidence — never invent C1/C2
  const demonstrated = skillEvidence.filter((e) => e.status === "demonstrated").length;
  let estimated: CefrLevel = "A1";
  if (demonstrated >= 4) estimated = "A2";
  // We never claim higher than A2 from this short placement

  profile.placementCompleted = true;
  profile.estimatedStartingLevel = estimated;
  profile.skillEvidence = skillEvidence;
  profile.currentPriorities = ["goal-introduce-self"];

  saveProfile(profile);
  return profile;
}

export function markGoalCompleted(goalId: string): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;
  if (!profile.completedGoals.includes(goalId)) {
    profile.completedGoals.push(goalId);
  }
  // Update priorities based on recommendation engine
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
  // For now we only use it to update goal completion when evidence is demonstrated
  if (evidenceStatus === "demonstrated") {
    markGoalCompleted(goalId);
  }
}

export function clearLearner(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
