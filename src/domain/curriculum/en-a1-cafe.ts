/** English A1 — café / ordering */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_EN_CAFE: Scenario = {
  id: "en-a1-cafe",
  title: {
    en: "At a café (English)",
    fr: "Au café (anglais)",
    ar: "في المقهى (إنجليزي)",
  },
  description: {
    en: "Order a drink politely in English.",
    fr: "Commander une boisson poliment en anglais.",
    ar: "اطلب مشروبًا بأدب بالإنجليزية.",
  },
  level: "A1",
  goals: ["goal-en-order", "goal-en-thanks"],
  status: "published",
  targetLanguage: "en",
};

export const EN_CAFE_GOALS: LearningGoal[] = [
  {
    id: "goal-en-order",
    scenarioId: "en-a1-cafe",
    targetLanguage: "en",
    title: { en: "Order a drink", fr: "Commander", ar: "طلب مشروب" },
    description: {
      en: "Can I have a coffee, please?",
      fr: "Can I have a coffee, please?",
      ar: "Can I have a coffee, please?",
    },
    canDoStatement: {
      en: "I can order a drink in English.",
      fr: "Je peux commander une boisson en anglais.",
      ar: "أستطيع طلب مشروب بالإنجليزية.",
    },
    level: "A1",
    prerequisites: ["goal-en-ask-name"],
  },
  {
    id: "goal-en-thanks",
    scenarioId: "en-a1-cafe",
    targetLanguage: "en",
    title: { en: "Say thank you", fr: "Remercier", ar: "الشكر" },
    description: {
      en: "Thank you / Thanks a lot",
      fr: "Thank you / Thanks a lot",
      ar: "Thank you / Thanks a lot",
    },
    canDoStatement: {
      en: "I can thank someone in English when ordering.",
      fr: "Je peux remercier en anglais.",
      ar: "أستطيع الشكر بالإنجليزية عند الطلب.",
    },
    level: "A1",
    prerequisites: ["goal-en-order"],
  },
];

export const EN_CAFE_TASKS: Task[] = [
  {
    id: "task-en-order-ctx",
    goalId: "goal-en-order",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You are at a café. Order a drink.",
      fr: "Vous êtes au café.",
      ar: "أنت في مقهى.",
    },
    content: {
      en: "Useful:\n• Can I have a coffee, please?\n• I'd like a tea, please.\n• A water, please.",
      fr: "Utile :\n• Can I have a coffee, please?\n• I'd like a tea, please.",
      ar: "مفيد:\n• Can I have a coffee, please?\n• I'd like a tea, please.",
    },
  },
  {
    id: "task-en-order-und",
    goalId: "goal-en-order",
    type: "understanding",
    title: { en: "Understanding", fr: "Compréhension", ar: "الفهم" },
    prompt: {
      en: "What does « I'd like a tea » mean?",
      fr: "Que signifie « I'd like a tea » ?",
      ar: "ماذا تعني « I'd like a tea »؟",
    },
    content: {
      en: "I would like a tea (polite).",
      fr: "Je voudrais un thé.",
      ar: "أريد شايًا (مهذب).",
    },
  },
  {
    id: "task-en-order-prod",
    goalId: "goal-en-order",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you order a coffee in English.",
      fr: "Écrivez une commande de café en anglais.",
      ar: "اكتب طلب قهوة بالإنجليزية.",
    },
  },
  {
    id: "task-en-order-ev",
    goalId: "goal-en-order",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you order a drink in English now?",
      fr: "Pouvez-vous commander en anglais ?",
      ar: "هل تستطيع الطلب بالإنجليزية الآن؟",
    },
  },
  {
    id: "task-en-thx-ctx",
    goalId: "goal-en-thanks",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You receive your drink.",
      fr: "On vous apporte la boisson.",
      ar: "يصل مشروبك.",
    },
    content: {
      en: "Useful:\n• Thank you.\n• Thanks a lot.\n• Have a nice day.",
      fr: "Utile :\n• Thank you.\n• Thanks a lot.",
      ar: "مفيد:\n• Thank you.\n• Thanks a lot.",
    },
  },
  {
    id: "task-en-thx-prod",
    goalId: "goal-en-thanks",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write a polite thank-you after ordering.",
      fr: "Écrivez un remerciement poli.",
      ar: "اكتب شكرًا مهذبًا.",
    },
  },
  {
    id: "task-en-thx-ev",
    goalId: "goal-en-thanks",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you thank someone in English now?",
      fr: "Pouvez-vous remercier en anglais ?",
      ar: "هل تستطيع الشكر بالإنجليزية الآن؟",
    },
  },
];
