/**
 * Speech subsystem domain types.
 *
 * Blueprint rule: distinguish text pronunciation targets
 * from learner speech evaluation. Never claim evaluation
 * happened when it did not.
 */

export type AudioAssetStatus = "draft" | "approved" | "published" | "retired";

/** How a word/sentence should sound — not learner evaluation */
export interface PronunciationTarget {
  id: string;
  text: string;
  language: "fr" | "en";
  /** Reference to versioned audio asset — null if not yet recorded */
  audioAssetId: string | null;
  phoneticHint?: string;
}

export interface AudioAsset {
  id: string;
  version: number;
  status: AudioAssetStatus;
  /** Storage path — never invent fake URLs */
  storagePath: string | null;
  durationMs: number | null;
  createdAt: string;
}

/** What the learner actually produced — separate from the target */
export interface SpeechAttempt {
  id: string;
  learnerId: string;
  targetId: string;
  /** null until real recording infrastructure exists */
  recordingPath: string | null;
  /** null until real evaluation exists — never invent scores */
  evaluationStatus: "not_evaluated" | "self_reviewed" | "system_evaluated" | "human_reviewed";
  selfReviewNotes?: string;
  createdAt: string;
}

/**
 * Speech features currently available in the product.
 * Anything not listed here must not be presented as working.
 */
export const SPEECH_CAPABILITIES = {
  textTargets: true,
  audioPlayback: false, // no real assets yet
  recording: false,
  automaticEvaluation: false,
  humanReview: false,
} as const;
