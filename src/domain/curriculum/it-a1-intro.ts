/** Italian A1 — introductions starter */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_IT_INTRO: Scenario = {
  id: "it-a1-intro",
  title: {
    en: "Introducing yourself (Italian)",
    fr: "Se présenter (italien)",
    ar: "تقديم النفس (إيطالي)",
  },
  description: {
    en: "Basic self-introduction in Italian.",
    fr: "Présentation de base en italien.",
    ar: "تقديم أساسي بالإيطالية.",
  },
  level: "A1",
  goals: ["goal-it-name"],
  status: "published",
  targetLanguage: "it",
};

export const IT_INTRO_GOALS: LearningGoal[] = [
  {
    id: "goal-it-name",
    scenarioId: "it-a1-intro",
    targetLanguage: "it",
    title: { en: "Say your name", fr: "Dire son nom", ar: "قول اسمك" },
    description: {
      en: "Mi chiamo… / Sono…",
      fr: "Mi chiamo… / Sono…",
      ar: "Mi chiamo… / Sono…",
    },
    canDoStatement: {
      en: "I can say my name in Italian.",
      fr: "Je peux dire mon nom en italien.",
      ar: "أستطيع قول اسمي بالإيطالية.",
    },
    level: "A1",
    prerequisites: [],
  },
];

export const IT_INTRO_TASKS: Task[] = [
  {
    id: "task-it-ctx",
    goalId: "goal-it-name",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Introduce yourself in Italian.",
      fr: "Présentez-vous en italien.",
      ar: "قدّم نفسك بالإيطالية.",
    },
    content: {
      en: "Useful:\n• Ciao, mi chiamo…\n• Sono…\n• Piacere.",
      fr: "Utile :\n• Ciao, mi chiamo…\n• Sono…\n• Piacere.",
      ar: "مفيد:\n• Ciao, mi chiamo…\n• Sono…\n• Piacere.",
    },
  },
  {
    id: "task-it-prod",
    goalId: "goal-it-name",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write: Ciao, mi chiamo…",
      fr: "Écrivez : Ciao, mi chiamo…",
      ar: "اكتب: Ciao, mi chiamo…",
    },
  },
  {
    id: "task-it-ev",
    goalId: "goal-it-name",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you say your name in Italian now?",
      fr: "Pouvez-vous dire votre nom en italien ?",
      ar: "هل تستطيع قول اسمك بالإيطالية الآن؟",
    },
  },
];
