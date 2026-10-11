/** English A1 — introductions (starter path) */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_EN_INTRO: Scenario = {
  id: "en-a1-intro",
  title: {
    en: "Introducing yourself (English)",
    fr: "Se présenter (anglais)",
    ar: "تقديم النفس (إنجليزي)",
  },
  description: {
    en: "Say your name and ask someone theirs in English.",
    fr: "Dire son nom et demander celui de quelqu'un en anglais.",
    ar: "قل اسمك واسأل عن اسم الآخر بالإنجليزية.",
  },
  level: "A1",
  goals: ["goal-en-name", "goal-en-ask-name"],
  status: "published",
  targetLanguage: "en",
};

export const EN_INTRO_GOALS: LearningGoal[] = [
  {
    id: "goal-en-name",
    scenarioId: "en-a1-intro",
    targetLanguage: "en",
    title: { en: "Say your name", fr: "Dire son nom", ar: "قول اسمك" },
    description: {
      en: "Use: My name is… / I'm…",
      fr: "Utiliser : My name is… / I'm…",
      ar: "استخدم: My name is… / I'm…",
    },
    canDoStatement: {
      en: "I can say my name in English.",
      fr: "Je peux dire mon nom en anglais.",
      ar: "أستطيع قول اسمي بالإنجليزية.",
    },
    level: "A1",
    prerequisites: [],
  },
  {
    id: "goal-en-ask-name",
    scenarioId: "en-a1-intro",
    targetLanguage: "en",
    title: { en: "Ask someone's name", fr: "Demander le nom", ar: "السؤال عن الاسم" },
    description: {
      en: "What's your name?",
      fr: "What's your name?",
      ar: "What's your name?",
    },
    canDoStatement: {
      en: "I can ask someone's name in English.",
      fr: "Je peux demander le nom de quelqu'un en anglais.",
      ar: "أستطيع السؤال عن الاسم بالإنجليزية.",
    },
    level: "A1",
    prerequisites: ["goal-en-name"],
  },
];

export const EN_INTRO_TASKS: Task[] = [
  {
    id: "task-en-ctx",
    goalId: "goal-en-name",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You meet someone for the first time.",
      fr: "Vous rencontrez quelqu'un.",
      ar: "تلتقي بشخص لأول مرة.",
    },
    content: {
      en: "Useful:\n• Hi, my name is…\n• I'm…\n• Nice to meet you.",
      fr: "Utile :\n• Hi, my name is…\n• I'm…\n• Nice to meet you.",
      ar: "مفيد:\n• Hi, my name is…\n• I'm…\n• Nice to meet you.",
    },
  },
  {
    id: "task-en-prod",
    goalId: "goal-en-name",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you introduce yourself in English.",
      fr: "Écrivez votre présentation en anglais.",
      ar: "اكتب تقديم نفسك بالإنجليزية.",
    },
  },
  {
    id: "task-en-ev",
    goalId: "goal-en-name",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you say your name in English now?",
      fr: "Pouvez-vous dire votre nom en anglais ?",
      ar: "هل تستطيع قول اسمك بالإنجليزية الآن؟",
    },
  },
  {
    id: "task-en-ask-ctx",
    goalId: "goal-en-ask-name",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Ask the other person's name.",
      fr: "Demandez le nom de l'autre personne.",
      ar: "اسأل عن اسم الشخص الآخر.",
    },
    content: {
      en: "Useful:\n• What's your name?\n• And you?",
      fr: "Utile :\n• What's your name?\n• And you?",
      ar: "مفيد:\n• What's your name?\n• And you?",
    },
  },
  {
    id: "task-en-ask-prod",
    goalId: "goal-en-ask-name",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write a question to ask someone's name.",
      fr: "Écrivez une question pour demander le nom.",
      ar: "اكتب سؤالاً عن الاسم.",
    },
  },
  {
    id: "task-en-ask-ev",
    goalId: "goal-en-ask-name",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you ask someone's name in English now?",
      fr: "Pouvez-vous demander le nom en anglais ?",
      ar: "هل تستطيع السؤال عن الاسم بالإنجليزية الآن؟",
    },
  },
];
