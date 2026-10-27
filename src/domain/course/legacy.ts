/**
 * Lessons that existed before the syllabus, with the goals that marked them
 * complete. Used only to carry learners' progress over and to redirect old links.
 */
export const LEGACY_UNIT_GOALS: Record<string, string[]> = {
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
  // A2
  "fr-a2-past-unit": ["unit-a2-past"],
  "fr-a2-deep-past": ["goal-a2-deep-past"],
  "fr-day-emotions": ["unit-day-emotions"],
  "fr-a2-hotel-unit": ["goal-check-in", "goal-hotel-request"],
  "fr-day-airport": ["unit-day-airport"],
  "fr-a2-phone-unit": ["unit-a2-phone"],
  "fr-a2-rdv-unit": ["goal-make-appointment", "goal-confirm-time"],
  "fr-day-invite": ["unit-day-invite"],
  "fr-a2-restaurant-unit": ["goal-order-meal", "goal-restaurant-problem"],
  "fr-day-hobbies": ["unit-day-hobbies"],
  "fr-day-bank": ["unit-day-bank"],
  "fr-day-emergency": ["unit-day-emergency"],
  "fr-a2-deep-health": ["goal-a2-deep-health"],
  "fr-day-future": ["unit-day-future"],
  "fr-a2-exam-core": ["goal-exam-a2-core"],
};

/** Old lesson ids that may still appear in other modules or saved links. */
export const LEGACY_UNIT_IDS = Object.keys(LEGACY_UNIT_GOALS);
