/**
 * Core domain types — Bonjour / AI Language Academy
 * Pure TypeScript — no framework dependencies.
 */

export type Locale = "en" | "fr" | "ar";

/** Language the user is learning (independent of UI locale). */
export type TargetLanguage = "fr" | "en" | "de" | "it" | "es";

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "unknown";

export type SkillDimension =
  | "listening"
  | "reading"
  | "vocabulary"
  | "grammar"
  | "speaking"
  | "writing";

export type EvidenceStatus = "demonstrated" | "partial" | "not_yet" | "unknown";

export type LearningGoalStatus =
  | "not_started"
  | "in_progress"
  | "demonstrated"
  | "needs_review";

export type VocabStatus = "new" | "learning" | "needs_revision" | "mastered";

export interface LearnerPreferences {
  objectives: string[];
  situations: string[];
  availability: string;
  preferredStyle: string;
  /** Minutes per day the learner plans to study */
  dailyMinutes?: number;
  /** Target language code */
  targetLanguage?: TargetLanguage;
  /** Preferred skill focus */
  focusSkills?: SkillDimension[];
}

export interface SkillEvidence {
  dimension: SkillDimension;
  status: EvidenceStatus;
  notes?: string;
  observedAt?: string;
}

export interface LearnerProfile {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
  locale: Locale;
  preferences: LearnerPreferences;
  placementCompleted: boolean;
  estimatedStartingLevel: CefrLevel;
  skillEvidence: SkillEvidence[];
  completedGoals: string[];
  currentPriorities: string[];
  /** Legacy points from older versions — kept for backup compatibility, not shown */
  xp?: number;
  streakDays?: number;
  lastStudyDate?: string;
}

export interface PlacementObservation {
  dimension: SkillDimension;
  questionId: string;
  response: string;
  isCorrect: boolean | null;
  /** Provenance: scored from the question bank, awaiting human review, or unanswered */
  source?: "auto_scored" | "pending_review" | "no_response";
  observedAt: string;
}

export interface PlacementAttempt {
  id: string;
  learnerId: string;
  version: string;
  startedAt: string;
  completedAt?: string;
  observations: PlacementObservation[];
  finalized: boolean;
  /** Frozen at finalization — never recomputed or edited afterwards */
  result?: {
    skillEvidence: SkillEvidence[];
    estimatedStartingLevel: CefrLevel;
  };
}

export interface LearningGoal {
  id: string;
  scenarioId: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  canDoStatement: Record<Locale, string>;
  level: CefrLevel;
  prerequisites: string[];
  /** Optional: which target language this goal belongs to (default fr) */
  targetLanguage?: TargetLanguage;
}

export interface Scenario {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  level: CefrLevel;
  goals: string[];
  status: "draft" | "published";
  targetLanguage?: TargetLanguage;
}

export interface Task {
  id: string;
  goalId: string;
  type:
    | "input"
    | "understanding"
    | "controlled"
    | "supported"
    | "independent"
    | "evidence";
  title: Record<Locale, string>;
  prompt: Record<Locale, string>;
  content?: Record<Locale, string>;
  expectedEvidence?: string;
}

export interface PracticeAttempt {
  id: string;
  learnerId: string;
  taskId: string;
  goalId: string;
  response: string;
  selfAssessed?: boolean;
  evidenceStatus: EvidenceStatus;
  createdAt: string;
}

export interface Recommendation {
  goalId: string;
  reason: Record<Locale, string>;
  priority: number;
}

export interface VocabItem {
  id: string;
  targetLanguage: TargetLanguage;
  term: string;
  translation: Record<Locale, string>;
  example?: string;
  level: CefrLevel;
  status: VocabStatus;
  ease: number;
  intervalDays: number;
  nextReviewAt: string;
  correctCount: number;
  wrongCount: number;
  createdAt: string;
}

export interface GrammarTopic {
  id: string;
  targetLanguage: TargetLanguage;
  level: CefrLevel;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  examples: { fr?: string; en?: string; de?: string; it?: string; es?: string; gloss: Record<Locale, string> }[];
  commonMistakes: Record<Locale, string>;
}
