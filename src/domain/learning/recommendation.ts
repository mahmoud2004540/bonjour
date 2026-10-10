/**
 * Deterministic recommendation engine.
 * Explains why an activity is recommended based on evidence.
 */

import type { LearnerProfile, Recommendation, Locale } from "../types";
import { GOALS, getGoalById } from "../curriculum/a1-faire-connaissance";

export function getNextRecommendations(
  profile: LearnerProfile
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  for (const goal of GOALS) {
    if (profile.completedGoals.includes(goal.id)) continue;

    const prereqsMet = goal.prerequisites.every((p) =>
      profile.completedGoals.includes(p)
    );

    if (!prereqsMet) continue;

    const reason: Record<Locale, string> = {
      en: `Recommended because you have not yet demonstrated: « ${goal.canDoStatement.en} »`,
      fr: `Recommandé car vous n'avez pas encore démontré : « ${goal.canDoStatement.fr} »`,
      ar: `موصى به لأنك لم تُثبت بعد: « ${goal.canDoStatement.ar} »`,
    };

    // Higher priority for goals with no prerequisites (starting points)
    const priority = goal.prerequisites.length === 0 ? 10 : 5;

    recommendations.push({
      goalId: goal.id,
      reason,
      priority,
    });
  }

  return recommendations.sort((a, b) => b.priority - a.priority);
}

export function getPrimaryNextAction(
  profile: LearnerProfile
): Recommendation | null {
  const recs = getNextRecommendations(profile);
  return recs[0] ?? null;
}

export function explainRecommendation(
  recommendation: Recommendation,
  locale: Locale
): string {
  const goal = getGoalById(recommendation.goalId);
  if (!goal) return recommendation.reason[locale];

  return recommendation.reason[locale];
}
