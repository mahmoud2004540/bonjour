/**
 * Human review subsystem — for activities needing expert validation.
 * UI/workflow not fully productised yet; domain model is ready.
 */

export type ReviewDecision = "approved" | "rejected" | "needs_more_evidence";

export interface ReviewItem {
  id: string;
  learnerId: string;
  attemptId: string;
  goalId: string;
  evidenceSummary: string;
  status: "queued" | "in_review" | "finalized";
  createdAt: string;
}

export interface ReviewDecisionRecord {
  id: string;
  reviewItemId: string;
  reviewerId: string;
  decision: ReviewDecision;
  comment: string;
  decidedAt: string;
  version: number;
}

export const REVIEW_CAPABILITIES = {
  queue: false,
  humanDecisions: false,
  auditHistory: false,
} as const;
