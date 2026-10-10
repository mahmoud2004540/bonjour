/**
 * Deterministic recommendation engine.
 * Uses evidence + learner preferences (situations / objectives).
 * Never invents mastery scores.
 */

import type { LearnerProfile, Recommendation, Locale } from "../types";
import { getAllGoals, getGoalById } from "../curriculum/registry";

/** Map onboarding preferences → scenario ids for gentle priority boost. */
const SITUATION_TO_SCENARIOS: Record<string, string[]> = {
  shopping: ["a1-courses", "a1-au-cafe", "a2-restaurant"],
  healthcare: ["a1-sante", "a2-rdv"],
  housing: ["a1-logement", "a2-hotel"],
  meeting: ["a1-faire-connaissance", "a2-telephone"],
  travel: ["a1-transport", "a2-hotel", "a2-restaurant"],
  work: ["b1-travail", "a2-telephone", "a2-rdv"],
  daily: ["a1-au-cafe", "a1-courses", "a1-transport"],
  admin: ["a2-rdv", "a1-logement", "b1-service"],
  social: ["a1-faire-connaissance", "a2-restaurant"],
  integration: ["a1-logement", "a1-sante", "a2-rdv", "b1-travail"],
};

function preferenceBoost(profile: LearnerProfile, scenarioId: string): number {
  let boost = 0;
  const keys = [
    ...profile.preferences.situations,
    ...profile.preferences.objectives,
  ];
  for (const key of keys) {
    const scenarios = SITUATION_TO_SCENARIOS[key];
    if (scenarios?.includes(scenarioId)) boost += 3;
  }
  return boost;
}

export function getNextRecommendations(
  profile: LearnerProfile
): Recommendation[] {
  const recommendations: Recommendation[] = [];
  const goals = getAllGoals();

  for (const goal of goals) {
    if (profile.completedGoals.includes(goal.id)) continue;

    const prereqsMet = goal.prerequisites.every((p) =>
      profile.completedGoals.includes(p)
    );
    if (!prereqsMet) continue;

    const base = goal.prerequisites.length === 0 ? 10 : 5;
    const boost = preferenceBoost(profile, goal.scenarioId);
    const priority = base + boost;

    const reason: Record<Locale, string> = {
      en:
        boost > 0
          ? `Matches your interests, and you have not yet demonstrated: « ${goal.canDoStatement.en} »`
          : `Recommended because you have not yet demonstrated: « ${goal.canDoStatement.en} »`,
      fr:
        boost > 0
          ? `Correspond à vos priorités, et vous n'avez pas encore démontré : « ${goal.canDoStatement.fr} »`
          : `Recommandé car vous n'avez pas encore démontré : « ${goal.canDoStatement.fr} »`,
      ar:
        boost > 0
          ? `يتوافق مع اهتماماتك، ولم تُثبت بعد: « ${goal.canDoStatement.ar} »`
          : `موصى به لأنك لم تُثبت بعد: « ${goal.canDoStatement.ar} »`,
    };

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
  return recommendation.reason[locale];
}
