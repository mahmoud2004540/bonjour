/** English A1 — shopping */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_EN_SHOP: Scenario = {
  id: "en-a1-shopping",
  title: {
    en: "Shopping (English)",
    fr: "Courses (anglais)",
    ar: "التسوق (إنجليزي)",
  },
  description: {
    en: "Ask for a price and buy something simple.",
    fr: "Demander un prix et acheter simplement.",
    ar: "اسأل عن السعر واشترِ شيئًا بسيطًا.",
  },
  level: "A1",
  goals: ["goal-en-price", "goal-en-buy"],
  status: "published",
  targetLanguage: "en",
};

export const EN_SHOP_GOALS: LearningGoal[] = [
  {
    id: "goal-en-price",
    scenarioId: "en-a1-shopping",
    targetLanguage: "en",
    title: { en: "Ask the price", fr: "Demander le prix", ar: "السؤال عن السعر" },
    description: {
      en: "How much is this?",
      fr: "How much is this?",
      ar: "How much is this?",
    },
    canDoStatement: {
      en: "I can ask the price in English.",
      fr: "Je peux demander le prix en anglais.",
      ar: "أستطيع السؤال عن السعر بالإنجليزية.",
    },
    level: "A1",
    prerequisites: ["goal-en-thanks"],
  },
  {
    id: "goal-en-buy",
    scenarioId: "en-a1-shopping",
    targetLanguage: "en",
    title: { en: "Buy something", fr: "Acheter", ar: "شراء شيء" },
    description: {
      en: "I'll take this, please.",
      fr: "I'll take this, please.",
      ar: "I'll take this, please.",
    },
    canDoStatement: {
      en: "I can buy something simple in English.",
      fr: "Je peux acheter simplement en anglais.",
      ar: "أستطيع شراء شيء بسيط بالإنجليزية.",
    },
    level: "A1",
    prerequisites: ["goal-en-price"],
  },
];

export const EN_SHOP_TASKS: Task[] = [
  {
    id: "task-en-price-ctx",
    goalId: "goal-en-price",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You are in a shop. Ask the price.",
      fr: "Vous êtes dans un magasin.",
      ar: "أنت في متجر.",
    },
    content: {
      en: "Useful:\n• How much is this?\n• How much does it cost?\n• What's the price?",
      fr: "Utile :\n• How much is this?\n• How much does it cost?",
      ar: "مفيد:\n• How much is this?\n• How much does it cost?",
    },
  },
  {
    id: "task-en-price-prod",
    goalId: "goal-en-price",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you ask the price.",
      fr: "Écrivez la question du prix.",
      ar: "اكتب سؤال السعر.",
    },
  },
  {
    id: "task-en-price-ev",
    goalId: "goal-en-price",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you ask the price in English now?",
      fr: "Pouvez-vous demander le prix en anglais ?",
      ar: "هل تستطيع السؤال عن السعر بالإنجليزية الآن؟",
    },
  },
  {
    id: "task-en-buy-ctx",
    goalId: "goal-en-buy",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You decided to buy it.",
      fr: "Vous décidez d'acheter.",
      ar: "قررت الشراء.",
    },
    content: {
      en: "Useful:\n• I'll take this, please.\n• Can I pay by card?\n• Thank you.",
      fr: "Utile :\n• I'll take this, please.\n• Can I pay by card?",
      ar: "مفيد:\n• I'll take this, please.\n• Can I pay by card?",
    },
  },
  {
    id: "task-en-buy-prod",
    goalId: "goal-en-buy",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you buy the item.",
      fr: "Écrivez comment vous achetez.",
      ar: "اكتب كيف تشتري.",
    },
  },
  {
    id: "task-en-buy-ev",
    goalId: "goal-en-buy",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you buy something simple in English now?",
      fr: "Pouvez-vous acheter simplement en anglais ?",
      ar: "هل تستطيع الشراء بالإنجليزية الآن؟",
    },
  },
];
