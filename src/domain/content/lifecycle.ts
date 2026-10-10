/**
 * Content lifecycle — Draft → Review → Approved → Published → Retired
 * Only published content is learner-facing.
 */

export type ContentLifecycleStatus =
  | "draft"
  | "review"
  | "approved"
  | "published"
  | "retired";

export const LEARNER_VISIBLE_STATUSES: ContentLifecycleStatus[] = ["published"];

export function isVisibleToLearners(status: ContentLifecycleStatus): boolean {
  return LEARNER_VISIBLE_STATUSES.includes(status);
}

export function canTransition(
  from: ContentLifecycleStatus,
  to: ContentLifecycleStatus
): boolean {
  const allowed: Record<ContentLifecycleStatus, ContentLifecycleStatus[]> = {
    draft: ["review", "retired"],
    review: ["approved", "draft", "retired"],
    approved: ["published", "draft", "retired"],
    published: ["retired"],
    retired: [],
  };
  return allowed[from].includes(to);
}
