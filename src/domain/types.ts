/**
 * Core domain types for Bonjour 2.0
 * Pure TypeScript — no framework dependencies.
 */

export type Locale = "en" | "fr" | "ar";

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "unknown";

export type SkillDimension =
  | "listening"
  | "reading"
  | "vocabulary"
  | "grammar"
  | "speaking";

export type EvidenceStatus = "demonstrated" | "partial" | "not_yet" | "unknown";

export type LearningGoalStatus =
  | "not_started"
  | "in_progress"
  | "demonstrated"
  | "needs_review";

export interface LearnerPreferences {
  objectives: string[];
  situations: string[];
  availability: string;
  preferredStyle: string;
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
}

export interface PlacementObservation {
  dimension: SkillDimension;
  questionId: string;
  response: string;
  isCorrect: boolean | null; // null = open / speaking, needs review
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
}

export interface LearningGoal {
  id: string;
  scenarioId: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  canDoStatement: Record<Locale, string>;
  level: CefrLevel;
  prerequisites: string[];
}

export interface Scenario {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  level: CefrLevel;
  goals: string[]; // goal ids
  status: "draft" | "published";
}

export interface Task {
  id: string;
  goalId: string;
  type: "input" | "understanding" | "controlled" | "supported" | "independent" | "evidence";
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
