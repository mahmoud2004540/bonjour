/**
 * Learner state — localStorage (Supabase-ready later).
 * Includes export/import so progress survives browser clears / device change.
 */

import type {
  LearnerProfile,
  PlacementAttempt,
  PracticeAttempt,
  LearnerPreferences,
  Locale,
  TargetLanguage,
} from "@/domain/types";
import { getPrimaryNextAction } from "@/domain/learning/recommendation";
import { scorePlacement, type PlacementResponses } from "@/domain/placement/scoring";
import { PLACEMENT_VERSION } from "@/domain/placement/questions";
import { migrateLegacyProgress } from "@/domain/course/registry";

const STORAGE_KEY = "bonjour_learner_v1";
const VOCAB_KEY = "bonjour_vocab_v2";
const EVENTS_KEY = "bonjour_events_v1";
const MOTIVATION_KEY = "bonjour_motivation_v1";
const PLACEMENT_KEY = "bonjour_placement_attempts_v1";

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
    const profile = JSON.parse(raw) as LearnerProfile;
    // Lessons replaced by the syllabus: carry completed progress over once.
    const carried = migrateLegacyProgress(profile.completedGoals ?? []);
    if (carried.length) {
      profile.completedGoals = [...profile.completedGoals, ...carried];
      saveProfile(profile);
    }
    return profile;
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
    { dimension: "writing", status: "unknown" },
    { dimension: "speaking", status: "unknown" },
  ];
  profile.currentPriorities = [FIRST_GOAL[lang] ?? "goal-introduce-self"];
  saveProfile(profile);
  return profile;
}

export function getPlacementAttempts(): PlacementAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(PLACEMENT_KEY);
    return raw ? (JSON.parse(raw) as PlacementAttempt[]) : [];
  } catch {
    return [];
  }
}

function savePlacementAttempts(attempts: PlacementAttempt[]): void {
  localStorage.setItem(PLACEMENT_KEY, JSON.stringify(attempts));
}

/**
 * Finalize placement for the current question-bank version.
 * Idempotent: a finalized attempt is immutable, and finalizing again
 * (double click, second tab) returns it unchanged instead of re-scoring.
 */
export function finalizePlacement(
  responses: PlacementResponses
): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;

  const attempts = getPlacementAttempts();
  let attempt = attempts.find(
    (a) => a.learnerId === profile.id && a.version === PLACEMENT_VERSION && a.finalized
  );

  if (!attempt) {
    const now = new Date().toISOString();
    const result = scorePlacement(responses, now);
    attempt = {
      id: generateId(),
      learnerId: profile.id,
      version: result.version,
      startedAt: now,
      completedAt: now,
      observations: result.observations,
      finalized: true,
      result: {
        skillEvidence: result.skillEvidence,
        estimatedStartingLevel: result.estimatedStartingLevel,
      },
    };
    savePlacementAttempts([...attempts, attempt]);
  }

  const lang = profile.preferences.targetLanguage ?? "fr";
  profile.placementCompleted = true;
  profile.estimatedStartingLevel = attempt.result!.estimatedStartingLevel;
  profile.skillEvidence = attempt.result!.skillEvidence;
  profile.currentPriorities = [FIRST_GOAL[lang] ?? "goal-introduce-self"];

  saveProfile(profile);
  return profile;
}

export function markGoalCompleted(goalId: string): LearnerProfile | null {
  const profile = getStoredProfile();
  if (!profile) return null;
  if (!profile.completedGoals.includes(goalId)) {
    profile.completedGoals.push(goalId);
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
  localStorage.removeItem(PLACEMENT_KEY);
}

/** Full local backup (profile + vocab progress + light meta) */
export type BonjourBackup = {
  version: 1;
  exportedAt: string;
  learner: string | null;
  vocab: string | null;
  events: string | null;
  motivation: string | null;
  /** Added later; older backups omit it */
  placement?: string | null;
};

export function exportBackup(): BonjourBackup {
  if (typeof window === "undefined") {
    return {
      version: 1,
      exportedAt: new Date().toISOString(),
      learner: null,
      vocab: null,
      events: null,
      motivation: null,
    };
  }
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    learner: localStorage.getItem(STORAGE_KEY),
    vocab: localStorage.getItem(VOCAB_KEY),
    events: localStorage.getItem(EVENTS_KEY),
    motivation: localStorage.getItem(MOTIVATION_KEY),
    placement: localStorage.getItem(PLACEMENT_KEY),
  };
}

export function downloadBackupFile(): void {
  const data = exportBackup();
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `bonjour-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importBackup(raw: string): { ok: boolean; error?: string } {
  if (typeof window === "undefined") return { ok: false, error: "ssr" };
  try {
    const data = JSON.parse(raw) as BonjourBackup;
    if (!data || data.version !== 1) {
      return { ok: false, error: "bad_version" };
    }
    if (data.learner) localStorage.setItem(STORAGE_KEY, data.learner);
    if (data.vocab) localStorage.setItem(VOCAB_KEY, data.vocab);
    if (data.events) localStorage.setItem(EVENTS_KEY, data.events);
    if (data.motivation) localStorage.setItem(MOTIVATION_KEY, data.motivation);
    if (data.placement) localStorage.setItem(PLACEMENT_KEY, data.placement);
    return { ok: true };
  } catch {
    return { ok: false, error: "parse" };
  }
}
