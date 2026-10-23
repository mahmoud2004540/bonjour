/**
 * Placement scoring — the only place placement results are derived.
 * Correctness is recomputed from the versioned question bank; values the UI
 * might have computed are never trusted. Open answers are recorded as
 * evidence awaiting review, never auto-scored.
 */

import type {
  CefrLevel,
  PlacementObservation,
  SkillDimension,
  SkillEvidence,
} from "../types";
import {
  PLACEMENT_QUESTIONS,
  PLACEMENT_VERSION,
  type PlacementQuestion,
} from "./questions";

/** Raw learner input: option index for multiple choice, text for open items. */
export type PlacementResponses = Record<string, number | string | undefined>;

export interface PlacementResult {
  version: string;
  observations: PlacementObservation[];
  skillEvidence: SkillEvidence[];
  estimatedStartingLevel: CefrLevel;
}

export const PLACEMENT_DIMENSIONS: SkillDimension[] = [
  "vocabulary",
  "grammar",
  "reading",
  "listening",
  "writing",
  "speaking",
];

/** Auto-scored dimensions that must all be demonstrated to suggest starting above A1. */
const A2_START_DIMENSIONS: SkillDimension[] = ["vocabulary", "grammar", "reading", "listening"];

function observe(
  q: PlacementQuestion,
  raw: number | string | undefined,
  observedAt: string
): PlacementObservation {
  if (q.type === "open") {
    const text = typeof raw === "string" ? raw.trim() : "";
    return {
      dimension: q.dimension,
      questionId: q.id,
      response: text,
      isCorrect: null,
      source: text ? "pending_review" : "no_response",
      observedAt,
    };
  }
  const answered = typeof raw === "number" && Number.isInteger(raw) && raw >= 0;
  return {
    dimension: q.dimension,
    questionId: q.id,
    response: answered ? String(raw) : "",
    isCorrect: answered ? raw === q.correctIndex : null,
    source: answered ? "auto_scored" : "no_response",
    observedAt,
  };
}

function evidenceFor(
  dimension: SkillDimension,
  observations: PlacementObservation[],
  observedAt: string
): SkillEvidence {
  const own = observations.filter((o) => o.dimension === dimension);
  const scored = own.filter((o) => o.isCorrect !== null);
  if (scored.length === 0) {
    const pending = own.some((o) => o.source === "pending_review");
    return pending
      ? { dimension, status: "unknown", notes: "pending_review", observedAt }
      : { dimension, status: "unknown" };
  }
  const correct = scored.filter((o) => o.isCorrect).length;
  const status: SkillEvidence["status"] =
    correct === scored.length ? "demonstrated" : correct > 0 ? "partial" : "not_yet";
  return { dimension, status, observedAt };
}

export function scorePlacement(
  responses: PlacementResponses,
  observedAt: string,
  questions: PlacementQuestion[] = PLACEMENT_QUESTIONS,
  version: string = PLACEMENT_VERSION
): PlacementResult {
  const observations = questions.map((q) => observe(q, responses[q.id], observedAt));
  const skillEvidence = PLACEMENT_DIMENSIONS.map((d) =>
    evidenceFor(d, observations, observedAt)
  );
  const allBasicsDemonstrated = A2_START_DIMENSIONS.every(
    (d) => skillEvidence.find((e) => e.dimension === d)?.status === "demonstrated"
  );
  return {
    version,
    observations,
    skillEvidence,
    estimatedStartingLevel: allBasicsDemonstrated ? "A2" : "A1",
  };
}
