/** Spanish A1 — introductions starter */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_ES_INTRO: Scenario = {
  id: "es-a1-intro",
  title: {
    en: "Introducing yourself (Spanish)",
    fr: "Se présenter (espagnol)",
    ar: "تقديم النفس (إسباني)",
  },
  description: {
    en: "Basic self-introduction in Spanish.",
    fr: "Présentation de base en espagnol.",
    ar: "تقديم أساسي بالإسبانية.",
  },
  level: "A1",
  goals: ["goal-es-name"],
  status: "published",
  targetLanguage: "es",
};

export const ES_INTRO_GOALS: LearningGoal[] = [
  {
    id: "goal-es-name",
    scenarioId: "es-a1-intro",
    targetLanguage: "es",
    title: { en: "Say your name", fr: "Dire son nom", ar: "قول اسمك" },
    description: {
      en: "Me llamo… / Soy…",
      fr: "Me llamo… / Soy…",
      ar: "Me llamo… / Soy…",
    },
    canDoStatement: {
      en: "I can say my name in Spanish.",
      fr: "Je peux dire mon nom en espagnol.",
      ar: "أستطيع قول اسمي بالإسبانية.",
    },
    level: "A1",
    prerequisites: [],
  },
];

export const ES_INTRO_TASKS: Task[] = [
  {
    id: "task-es-ctx",
    goalId: "goal-es-name",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Introduce yourself in Spanish.",
      fr: "Présentez-vous en espagnol.",
      ar: "قدّم نفسك بالإسبانية.",
    },
    content: {
      en: "Useful:\n• Hola, me llamo…\n• Soy…\n• Encantado / Encantada.",
      fr: "Utile :\n• Hola, me llamo…\n• Soy…\n• Encantado / Encantada.",
      ar: "مفيد:\n• Hola, me llamo…\n• Soy…\n• Encantado / Encantada.",
    },
  },
  {
    id: "task-es-prod",
    goalId: "goal-es-name",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write: Hola, me llamo…",
      fr: "Écrivez : Hola, me llamo…",
      ar: "اكتب: Hola, me llamo…",
    },
  },
  {
    id: "task-es-ev",
    goalId: "goal-es-name",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you say your name in Spanish now?",
      fr: "Pouvez-vous dire votre nom en espagnol ?",
      ar: "هل تستطيع قول اسمك بالإسبانية الآن؟",
    },
  },
];
