import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_COURSES: Scenario = {
  id: "a1-courses",
  title: {
    en: "Shopping",
    fr: "Faire les courses",
    ar: "التسوّق",
  },
  description: {
    en: "Ask for items and quantities in a shop.",
    fr: "Demander des articles et des quantités dans un magasin.",
    ar: "اطلب أصنافًا وكميات في متجر.",
  },
  level: "A1",
  goals: ["goal-ask-item", "goal-say-quantity"],
  status: "published",
};

export const COURSES_GOALS: LearningGoal[] = [
  {
    id: "goal-ask-item",
    scenarioId: "a1-courses",
    title: {
      en: "Ask for an item",
      fr: "Demander un article",
      ar: "طلب صنف",
    },
    description: {
      en: "Ask for bread, water, or fruit in a shop.",
      fr: "Demander du pain, de l'eau ou des fruits.",
      ar: "اطلب خبزًا أو ماءً أو فاكهة.",
    },
    canDoStatement: {
      en: "I can ask for an item in a shop in French.",
      fr: "Je peux demander un article dans un magasin en français.",
      ar: "أستطيع طلب صنف في متجر بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-say-please-thanks"],
  },
  {
    id: "goal-say-quantity",
    scenarioId: "a1-courses",
    title: {
      en: "Say a quantity",
      fr: "Indiquer une quantité",
      ar: "ذكر الكمية",
    },
    description: {
      en: "Use numbers and simple quantity phrases.",
      fr: "Utiliser les nombres et des quantités simples.",
      ar: "استخدم الأرقام وعبارات الكمية البسيطة.",
    },
    canDoStatement: {
      en: "I can say a simple quantity in French.",
      fr: "Je peux indiquer une quantité simple en français.",
      ar: "أستطيع ذكر كمية بسيطة بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-ask-item"],
  },
];

export const COURSES_TASKS: Task[] = [
  {
    id: "task-shop-input",
    goalId: "goal-ask-item",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You are in a small shop. You need bread.",
      fr: "Vous êtes dans une petite épicerie. Vous avez besoin de pain.",
      ar: "أنت في متجر صغير. تحتاج خبزًا.",
    },
    content: {
      en: "Useful phrases:\n\n• Je voudrais du pain, s'il vous plaît.\n• Vous avez des pommes ?\n• Une bouteille d'eau, s'il vous plaît.",
      fr: "Phrases utiles :\n\n• Je voudrais du pain, s'il vous plaît.\n• Vous avez des pommes ?\n• Une bouteille d'eau, s'il vous plaît.",
      ar: "عبارات مفيدة:\n\n• Je voudrais du pain, s'il vous plaît.\n• Vous avez des pommes ؟\n• Une bouteille d'eau, s'il vous plaît.",
    },
  },
  {
    id: "task-shop-production",
    goalId: "goal-ask-item",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you ask for bread politely.",
      fr: "Écrivez comment vous demandez du pain poliment.",
      ar: "اكتب كيف تطلب خبزًا بأدب.",
    },
  },
  {
    id: "task-shop-evidence",
    goalId: "goal-ask-item",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you ask for an item in a shop in French?",
      fr: "Pouvez-vous demander un article dans un magasin en français ?",
      ar: "هل تستطيع طلب صنف في متجر بالفرنسية؟",
    },
  },
  {
    id: "task-qty-input",
    goalId: "goal-say-quantity",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "The shopkeeper asks how many you want.",
      fr: "Le commerçant demande quelle quantité vous voulez.",
      ar: "البائع يسألك عن الكمية.",
    },
    content: {
      en: "Useful phrases:\n\n• Deux, s'il vous plaît.\n• Un kilo, s'il vous plaît.\n• Trois pommes, s'il vous plaît.",
      fr: "Phrases utiles :\n\n• Deux, s'il vous plaît.\n• Un kilo, s'il vous plaît.\n• Trois pommes, s'il vous plaît.",
      ar: "عبارات مفيدة:\n\n• Deux, s'il vous plaît.\n• Un kilo, s'il vous plaît.\n• Trois pommes, s'il vous plaît.",
    },
  },
  {
    id: "task-qty-production",
    goalId: "goal-say-quantity",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write that you want three apples.",
      fr: "Écrivez que vous voulez trois pommes.",
      ar: "اكتب أنك تريد ثلاث تفاحات.",
    },
  },
];
