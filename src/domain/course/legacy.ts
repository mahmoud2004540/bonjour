/**
 * The A1 lessons that existed before the A1 syllabus, with the goals that
 * marked them complete. Used only to carry learners' progress over and to
 * redirect old links.
 */
export const LEGACY_A1_UNIT_GOALS: Record<string, string[]> = {
  "fr-a1-intro-unit": ["goal-introduce-self", "goal-ask-name"],
  "fr-a1-cafe-unit": ["goal-order-drink", "goal-pay-cafe"],
  "fr-a1-courses-unit": ["goal-ask-price", "goal-buy-item"],
  "fr-a1-transport-unit": ["goal-ask-direction", "goal-buy-ticket"],
  "fr-a1-sante-unit": ["goal-say-symptom", "goal-pharmacy"],
  "fr-a1-deep-family": ["goal-a1-deep-family"],
  "fr-a1-deep-time": ["goal-a1-deep-time"],
  "fr-a1-deep-city": ["goal-a1-deep-city"],
  "fr-a1-more-shopping": ["goal-a1-more-shop"],
  "fr-a1-more-transport": ["goal-a1-more-transport"],
  "fr-a1-more-home": ["goal-a1-more-home"],
  "fr-a1-more-weather": ["goal-a1-more-weather"],
  "fr-a1-exam-listen": ["goal-exam-a1-listen"],
  "fr-a1-exam-read": ["goal-exam-a1-read"],
  "fr-a1-exam-write": ["goal-exam-a1-write"],
  "fr-a1-exam-speak": ["goal-exam-a1-speak"],
};

/** Old A1 lesson ids that may still appear in other modules or saved links. */
export const LEGACY_A1_UNIT_IDS = Object.keys(LEGACY_A1_UNIT_GOALS);
