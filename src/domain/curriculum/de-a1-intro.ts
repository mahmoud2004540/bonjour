/** German A1 — introductions starter */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_DE_INTRO: Scenario = {
  id: "de-a1-intro",
  title: {
    en: "Introducing yourself (German)",
    fr: "Se présenter (allemand)",
    ar: "تقديم النفس (ألماني)",
  },
  description: {
    en: "Basic self-introduction in German.",
    fr: "Présentation de base en allemand.",
    ar: "تقديم أساسي بالألمانية.",
  },
  level: "A1",
  goals: ["goal-de-name"],
  status: "published",
  targetLanguage: "de",
};

export const DE_INTRO_GOALS: LearningGoal[] = [
  {
    id: "goal-de-name",
    scenarioId: "de-a1-intro",
    targetLanguage: "de",
    title: { en: "Say your name", fr: "Dire son nom", ar: "قول اسمك" },
    description: {
      en: "Ich heiße… / Mein Name ist…",
      fr: "Ich heiße… / Mein Name ist…",
      ar: "Ich heiße… / Mein Name ist…",
    },
    canDoStatement: {
      en: "I can say my name in German.",
      fr: "Je peux dire mon nom en allemand.",
      ar: "أستطيع قول اسمي بالألمانية.",
    },
    level: "A1",
    prerequisites: [],
  },
];

export const DE_INTRO_TASKS: Task[] = [
  {
    id: "task-de-ctx",
    goalId: "goal-de-name",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Introduce yourself in German.",
      fr: "Présentez-vous en allemand.",
      ar: "قدّم نفسك بالألمانية.",
    },
    content: {
      en: "Useful:\n• Hallo, ich heiße…\n• Mein Name ist…\n• Freut mich.",
      fr: "Utile :\n• Hallo, ich heiße…\n• Mein Name ist…\n• Freut mich.",
      ar: "مفيد:\n• Hallo, ich heiße…\n• Mein Name ist…\n• Freut mich.",
    },
  },
  {
    id: "task-de-prod",
    goalId: "goal-de-name",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write: Hallo, ich heiße…",
      fr: "Écrivez : Hallo, ich heiße…",
      ar: "اكتب: Hallo, ich heiße…",
    },
  },
  {
    id: "task-de-ev",
    goalId: "goal-de-name",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you say your name in German now?",
      fr: "Pouvez-vous dire votre nom en allemand ?",
      ar: "هل تستطيع قول اسمك بالألمانية الآن؟",
    },
  },
];
