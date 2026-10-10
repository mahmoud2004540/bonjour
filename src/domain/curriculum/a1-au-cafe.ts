/**
 * A1 Scenario: Au café — ordering and basic interaction.
 * Full task chain: input → understanding → controlled → supported → evidence
 */

import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_AU_CAFE: Scenario = {
  id: "a1-au-cafe",
  title: {
    en: "At the café",
    fr: "Au café",
    ar: "في المقهى",
  },
  description: {
    en: "Order a drink and interact politely at a café.",
    fr: "Commander une boisson et interagir poliment dans un café.",
    ar: "اطلب مشروبًا وتفاعل بأدب في مقهى.",
  },
  level: "A1",
  goals: ["goal-order-drink", "goal-ask-price", "goal-say-please-thanks"],
  status: "published",
};

export const CAFE_GOALS: LearningGoal[] = [
  {
    id: "goal-order-drink",
    scenarioId: "a1-au-cafe",
    title: {
      en: "Order a drink",
      fr: "Commander une boisson",
      ar: "طلب مشروب",
    },
    description: {
      en: "Ask for a coffee, tea, or water in French.",
      fr: "Demander un café, un thé ou de l'eau en français.",
      ar: "اطلب قهوة أو شاي أو ماء بالفرنسية.",
    },
    canDoStatement: {
      en: "I can order a drink in French.",
      fr: "Je peux commander une boisson en français.",
      ar: "أستطيع طلب مشروب بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-introduce-self"],
  },
  {
    id: "goal-ask-price",
    scenarioId: "a1-au-cafe",
    title: {
      en: "Ask the price",
      fr: "Demander le prix",
      ar: "السؤال عن السعر",
    },
    description: {
      en: "Ask how much something costs.",
      fr: "Demander combien quelque chose coûte.",
      ar: "اسأل عن سعر شيء.",
    },
    canDoStatement: {
      en: "I can ask the price in French.",
      fr: "Je peux demander le prix en français.",
      ar: "أستطيع السؤال عن السعر بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-order-drink"],
  },
  {
    id: "goal-say-please-thanks",
    scenarioId: "a1-au-cafe",
    title: {
      en: "Please and thank you",
      fr: "S'il vous plaît et merci",
      ar: "من فضلك وشكرًا",
    },
    description: {
      en: "Use polite expressions when ordering.",
      fr: "Utiliser des expressions de politesse en commandant.",
      ar: "استخدم عبارات مهذبة عند الطلب.",
    },
    canDoStatement: {
      en: "I can use please and thank you when ordering.",
      fr: "Je peux utiliser s'il vous plaît et merci en commandant.",
      ar: "أستطيع استخدام من فضلك وشكرًا عند الطلب.",
    },
    level: "A1",
    prerequisites: ["goal-order-drink"],
  },
];

export const CAFE_TASKS: Task[] = [
  // —— Order drink ——
  {
    id: "task-cafe-context",
    goalId: "goal-order-drink",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You are at a café. You want to order something to drink.",
      fr: "Vous êtes dans un café. Vous voulez commander une boisson.",
      ar: "أنت في مقهى. تريد طلب مشروب.",
    },
    content: {
      en: "Useful phrases:\n\n• Un café, s'il vous plaît.\n• Un thé, s'il vous plaît.\n• Une eau, s'il vous plaît.\n• Je voudrais un café.",
      fr: "Phrases utiles :\n\n• Un café, s'il vous plaît.\n• Un thé, s'il vous plaît.\n• Une eau, s'il vous plaît.\n• Je voudrais un café.",
      ar: "عبارات مفيدة:\n\n• Un café, s'il vous plaît.\n• Un thé, s'il vous plaît.\n• Une eau, s'il vous plaît.\n• Je voudrais un café.",
    },
  },
  {
    id: "task-cafe-understanding",
    goalId: "goal-order-drink",
    type: "understanding",
    title: { en: "Understanding", fr: "Compréhension", ar: "الفهم" },
    prompt: {
      en: "What does « Je voudrais un thé » mean?",
      fr: "Que signifie « Je voudrais un thé » ?",
      ar: "ماذا تعني « Je voudrais un thé »؟",
    },
    content: {
      en: "I would like a tea.",
      fr: "Je voudrais un thé.",
      ar: "أريد شايًا (بصيغة مهذبة).",
    },
  },
  {
    id: "task-cafe-controlled",
    goalId: "goal-order-drink",
    type: "controlled",
    title: { en: "Practice", fr: "Entraînement", ar: "تدريب" },
    prompt: {
      en: "Complete: Un ______, s'il vous plaît. (coffee)",
      fr: "Complétez : Un ______, s'il vous plaît. (café)",
      ar: "أكمل: Un ______, s'il vous plaît. (قهوة)",
    },
  },
  {
    id: "task-cafe-production",
    goalId: "goal-order-drink",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you would order a coffee.",
      fr: "Écrivez comment vous commanderiez un café.",
      ar: "اكتب كيف تطلب قهوة.",
    },
    expectedEvidence: "Learner produces Un café, s'il vous plaît or Je voudrais un café.",
  },
  {
    id: "task-cafe-evidence",
    goalId: "goal-order-drink",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you order a drink in French right now?",
      fr: "Pouvez-vous commander une boisson en français maintenant ?",
      ar: "هل تستطيع طلب مشروب بالفرنسية الآن؟",
    },
  },
  // —— Ask price ——
  {
    id: "task-price-input",
    goalId: "goal-ask-price",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You want to know how much it costs.",
      fr: "Vous voulez savoir combien cela coûte.",
      ar: "تريد معرفة السعر.",
    },
    content: {
      en: "Useful phrases:\n\n• C'est combien ?\n• Ça fait combien ?\n• Quel est le prix ?",
      fr: "Phrases utiles :\n\n• C'est combien ?\n• Ça fait combien ?\n• Quel est le prix ?",
      ar: "عبارات مفيدة:\n\n• C'est combien ؟\n• Ça fait combien ؟\n• Quel est le prix ؟",
    },
  },
  {
    id: "task-price-understanding",
    goalId: "goal-ask-price",
    type: "understanding",
    title: { en: "Understanding", fr: "Compréhension", ar: "الفهم" },
    prompt: {
      en: "« C'est combien ? » asks about…",
      fr: "« C'est combien ? » demande…",
      ar: "« C'est combien ? » تسأل عن…",
    },
    content: {
      en: "The price / how much something costs.",
      fr: "Le prix / combien cela coûte.",
      ar: "السعر / كم يكلف الشيء.",
    },
  },
  {
    id: "task-price-controlled",
    goalId: "goal-ask-price",
    type: "controlled",
    title: { en: "Practice", fr: "Entraînement", ar: "تدريب" },
    prompt: {
      en: "Complete: C'est ______ ? (how much)",
      fr: "Complétez : C'est ______ ?",
      ar: "أكمل: C'est ______ ؟",
    },
  },
  {
    id: "task-price-production",
    goalId: "goal-ask-price",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write a question to ask the price.",
      fr: "Écrivez une question pour demander le prix.",
      ar: "اكتب سؤالاً عن السعر.",
    },
    expectedEvidence: "Learner produces C'est combien or similar.",
  },
  {
    id: "task-price-evidence",
    goalId: "goal-ask-price",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you ask the price in French right now?",
      fr: "Pouvez-vous demander le prix en français maintenant ?",
      ar: "هل تستطيع السؤال عن السعر بالفرنسية الآن؟",
    },
  },
  // —— Politeness ——
  {
    id: "task-polite-input",
    goalId: "goal-say-please-thanks",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Politeness matters in French service situations.",
      fr: "La politesse compte dans les situations de service en français.",
      ar: "الأدب مهم في مواقف الخدمة بالفرنسية.",
    },
    content: {
      en: "Essential expressions:\n\n• S'il vous plaît (please — formal)\n• Merci (thank you)\n• Merci beaucoup (thank you very much)\n• De rien (you're welcome)",
      fr: "Expressions essentielles :\n\n• S'il vous plaît\n• Merci\n• Merci beaucoup\n• De rien",
      ar: "عبارات أساسية:\n\n• S'il vous plaît (من فضلك)\n• Merci (شكرًا)\n• Merci beaucoup\n• De rien",
    },
  },
  {
    id: "task-polite-understanding",
    goalId: "goal-say-please-thanks",
    type: "understanding",
    title: { en: "Understanding", fr: "Compréhension", ar: "الفهم" },
    prompt: {
      en: "When do you say « Merci »?",
      fr: "Quand dit-on « Merci » ?",
      ar: "متى تقول « Merci »؟",
    },
    content: {
      en: "To thank someone (after receiving something or help).",
      fr: "Pour remercier quelqu'un.",
      ar: "لشكر شخص (بعد خدمة أو مساعدة).",
    },
  },
  {
    id: "task-polite-production",
    goalId: "goal-say-please-thanks",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write a full polite order including please and thank you.",
      fr: "Écrivez une commande polie complète avec s'il vous plaît et merci.",
      ar: "اكتب طلبًا مهذبًا كاملاً يتضمن من فضلك وشكرًا.",
    },
    expectedEvidence: "Learner uses s'il vous plaît and merci in context.",
  },
  {
    id: "task-polite-evidence",
    goalId: "goal-say-please-thanks",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you use please and thank you when ordering in French now?",
      fr: "Pouvez-vous utiliser s'il vous plaît et merci maintenant ?",
      ar: "هل تستطيع استخدام من فضلك وشكرًا عند الطلب الآن؟",
    },
  },
];
