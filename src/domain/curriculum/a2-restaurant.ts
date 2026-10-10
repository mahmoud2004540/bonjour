/**
 * A2 Scenario: Au restaurant — order a meal, ask for the bill.
 * Published curriculum (action-oriented, CEFR A2).
 */

import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_RESTAURANT: Scenario = {
  id: "a2-restaurant",
  title: {
    en: "At the restaurant",
    fr: "Au restaurant",
    ar: "في المطعم",
  },
  description: {
    en: "Order a simple meal and ask for the bill.",
    fr: "Commander un repas simple et demander l'addition.",
    ar: "اطلب وجبة بسيطة واطلب الفاتورة.",
  },
  level: "A2",
  goals: ["goal-order-meal", "goal-ask-bill"],
  status: "published",
};

export const RESTAURANT_GOALS: LearningGoal[] = [
  {
    id: "goal-order-meal",
    scenarioId: "a2-restaurant",
    title: {
      en: "Order a meal",
      fr: "Commander un repas",
      ar: "طلب وجبة",
    },
    description: {
      en: "Order a main dish politely in a restaurant.",
      fr: "Commander un plat poliment au restaurant.",
      ar: "اطلب طبقًا رئيسيًا بأدب في مطعم.",
    },
    canDoStatement: {
      en: "I can order a simple meal in French.",
      fr: "Je peux commander un repas simple en français.",
      ar: "أستطيع طلب وجبة بسيطة بالفرنسية.",
    },
    level: "A2",
    prerequisites: ["goal-order-drink"],
  },
  {
    id: "goal-ask-bill",
    scenarioId: "a2-restaurant",
    title: {
      en: "Ask for the bill",
      fr: "Demander l'addition",
      ar: "طلب الفاتورة",
    },
    description: {
      en: "Ask for the bill at the end of the meal.",
      fr: "Demander l'addition à la fin du repas.",
      ar: "اطلب الفاتورة في نهاية الوجبة.",
    },
    canDoStatement: {
      en: "I can ask for the bill in French.",
      fr: "Je peux demander l'addition en français.",
      ar: "أستطيع طلب الفاتورة بالفرنسية.",
    },
    level: "A2",
    prerequisites: ["goal-order-meal"],
  },
];

export const RESTAURANT_TASKS: Task[] = [
  {
    id: "task-rest-context",
    goalId: "goal-order-meal",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You are at a restaurant. The waiter is ready to take your order.",
      fr: "Vous êtes au restaurant. Le serveur est prêt à prendre la commande.",
      ar: "أنت في مطعم. النادل جاهز لأخذ الطلب.",
    },
    content: {
      en: "Useful phrases:\n\n• Je voudrais le poulet, s'il vous plaît.\n• Pour moi, une salade.\n• Comme entrée, la soupe.\n• Comme plat, le poisson.",
      fr: "Phrases utiles :\n\n• Je voudrais le poulet, s'il vous plaît.\n• Pour moi, une salade.\n• Comme entrée, la soupe.\n• Comme plat, le poisson.",
      ar: "عبارات مفيدة:\n\n• Je voudrais le poulet, s'il vous plaît.\n• Pour moi, une salade.\n• Comme entrée, la soupe.\n• Comme plat, le poisson.",
    },
  },
  {
    id: "task-rest-production",
    goalId: "goal-order-meal",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you would order a main dish.",
      fr: "Écrivez comment vous commanderiez un plat.",
      ar: "اكتب كيف تطلب طبقًا رئيسيًا.",
    },
    expectedEvidence: "Learner produces Je voudrais… or Pour moi…",
  },
  {
    id: "task-rest-evidence",
    goalId: "goal-order-meal",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you order a simple meal in French now?",
      fr: "Pouvez-vous commander un repas simple maintenant ?",
      ar: "هل تستطيع طلب وجبة بسيطة الآن؟",
    },
  },
  {
    id: "task-bill-input",
    goalId: "goal-ask-bill",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "The meal is finished. You want to pay.",
      fr: "Le repas est fini. Vous voulez payer.",
      ar: "انتهت الوجبة. تريد الدفع.",
    },
    content: {
      en: "Useful phrases:\n\n• L'addition, s'il vous plaît.\n• Je peux avoir l'addition ?\n• On peut payer, s'il vous plaît ?",
      fr: "Phrases utiles :\n\n• L'addition, s'il vous plaît.\n• Je peux avoir l'addition ?\n• On peut payer, s'il vous plaît ?",
      ar: "عبارات مفيدة:\n\n• L'addition, s'il vous plaît.\n• Je peux avoir l'addition ?\n• On peut payer, s'il vous plaît ?",
    },
  },
  {
    id: "task-bill-production",
    goalId: "goal-ask-bill",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you ask for the bill.",
      fr: "Écrivez comment vous demandez l'addition.",
      ar: "اكتب كيف تطلب الفاتورة.",
    },
    expectedEvidence: "Learner produces L'addition, s'il vous plaît or similar.",
  },
  {
    id: "task-bill-evidence",
    goalId: "goal-ask-bill",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you ask for the bill in French now?",
      fr: "Pouvez-vous demander l'addition maintenant ?",
      ar: "هل تستطيع طلب الفاتورة الآن؟",
    },
  },
];
