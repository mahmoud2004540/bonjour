/**
 * Classic learning unit flow for French A1 introductions:
 * Lesson → Vocabulary → Exercises → Review → Quiz
 */

import type { Locale } from "../types";

export type LessonPhase =
  | "lesson"
  | "vocab"
  | "exercise"
  | "review"
  | "quiz";

export interface VocabCard {
  term: string;
  meaning: Record<Locale, string>;
  example: string;
}

export interface ExerciseItem {
  id: string;
  prompt: Record<Locale, string>;
  /** Acceptable answers (lowercase match) */
  answers: string[];
  hint?: Record<Locale, string>;
}

export interface QuizItem {
  id: string;
  prompt: Record<Locale, string>;
  options: Record<Locale, string[]>;
  correctIndex: number;
}

export interface LessonUnit {
  id: string;
  level: string;
  title: Record<Locale, string>;
  /** Completing this unit marks these goals done */
  completesGoals: string[];
  lesson: {
    intro: Record<Locale, string>;
    dialogue: string[];
    tip: Record<Locale, string>;
  };
  vocab: VocabCard[];
  exercises: ExerciseItem[];
  review: {
    summary: Record<Locale, string>;
    checklist: Record<Locale, string[]>;
  };
  quiz: QuizItem[];
  /** Pass threshold for quiz (e.g. 0.6 = 60%) */
  passRatio: number;
}

export const UNIT_FR_A1_INTRO: LessonUnit = {
  id: "fr-a1-intro-unit",
  level: "A1",
  title: {
    en: "Introducing yourself",
    fr: "Se présenter",
    ar: "تقديم النفس",
  },
  completesGoals: ["goal-introduce-self", "goal-ask-name"],
  lesson: {
    intro: {
      en: "In this lesson you learn how to greet and say your name in French.",
      fr: "Dans cette leçon, vous apprenez à saluer et à dire votre nom.",
      ar: "في هذا الدرس تتعلم التحية وقول اسمك بالفرنسية.",
    },
    dialogue: [
      "— Bonjour !",
      "— Bonjour ! Je m'appelle Sara.",
      "— Enchanté. Moi, je m'appelle Karim.",
      "— Comment vous appellez-vous ?",
      "— Je m'appelle Nour.",
    ],
    tip: {
      en: "Remember: « Je m'appelle… » (not « Je appelle »).",
      fr: "Retenez : « Je m'appelle… » (pas « Je appelle »).",
      ar: "تذكّر: « Je m'appelle… » (مش « Je appelle »).",
    },
  },
  vocab: [
    {
      term: "bonjour",
      meaning: { en: "hello / good day", fr: "salutations", ar: "مرحبًا / صباح الخير" },
      example: "Bonjour !",
    },
    {
      term: "je m'appelle",
      meaning: { en: "my name is", fr: "mon nom est", ar: "اسمي…" },
      example: "Je m'appelle Sara.",
    },
    {
      term: "comment vous appellez-vous ?",
      meaning: {
        en: "what is your name? (formal)",
        fr: "quel est votre nom ?",
        ar: "ما اسمك؟ (رسمي)",
      },
      example: "Comment vous appellez-vous ?",
    },
    {
      term: "enchanté / enchantée",
      meaning: { en: "nice to meet you", fr: "heureux de faire connaissance", ar: "تشرفنا" },
      example: "Enchanté !",
    },
  ],
  exercises: [
    {
      id: "ex1",
      prompt: {
        en: "Complete: Je …… Sara.",
        fr: "Complétez : Je …… Sara.",
        ar: "أكمل: Je …… Sara.",
      },
      answers: ["m'appelle", "mappelle", "je m'appelle sara"],
      hint: {
        en: "Use m'appelle",
        fr: "Utilisez m'appelle",
        ar: "استخدم m'appelle",
      },
    },
    {
      id: "ex2",
      prompt: {
        en: "Write a greeting in French (one word is enough).",
        fr: "Écrivez une salutation (un mot suffit).",
        ar: "اكتب تحية بالفرنسية (كلمة تكفي).",
      },
      answers: ["bonjour", "salut", "bonsoir"],
    },
    {
      id: "ex3",
      prompt: {
        en: "How do you ask someone's name (formal)? Write the question.",
        fr: "Comment demandez-vous le nom (formel) ?",
        ar: "كيف تسأل عن الاسم (رسمي)؟",
      },
      answers: [
        "comment vous appellez-vous",
        "comment vous appellez-vous ?",
        "comment vous appelez-vous",
        "comment vous appelez-vous ?",
      ],
      hint: {
        en: "Comment vous appellez-vous ?",
        fr: "Comment vous appellez-vous ?",
        ar: "Comment vous appellez-vous ?",
      },
    },
  ],
  review: {
    summary: {
      en: "Quick review before the quiz.",
      fr: "Révision rapide avant le quiz.",
      ar: "مراجعة سريعة قبل الاختبار.",
    },
    checklist: {
      en: [
        "Bonjour — hello",
        "Je m'appelle… — my name is…",
        "Comment vous appellez-vous ? — what's your name?",
        "Enchanté — nice to meet you",
      ],
      fr: [
        "Bonjour — salutation",
        "Je m'appelle… — mon nom",
        "Comment vous appellez-vous ? — demander le nom",
        "Enchanté — faire connaissance",
      ],
      ar: [
        "Bonjour — مرحبًا",
        "Je m'appelle… — اسمي",
        "Comment vous appellez-vous ? — ما اسمك؟",
        "Enchanté — تشرفنا",
      ],
    },
  },
  quiz: [
    {
      id: "q1",
      prompt: {
        en: "What does « Bonjour » mean?",
        fr: "Que signifie « Bonjour » ?",
        ar: "ماذا تعني « Bonjour »؟",
      },
      options: {
        en: ["Goodbye", "Hello", "Thank you", "Please"],
        fr: ["Au revoir", "Salut / Bonjour", "Merci", "S'il vous plaît"],
        ar: ["وداعًا", "مرحبًا", "شكرًا", "من فضلك"],
      },
      correctIndex: 1,
    },
    {
      id: "q2",
      prompt: {
        en: "Choose the correct form:",
        fr: "Choisissez la bonne forme :",
        ar: "اختر الصيغة الصحيحة:",
      },
      options: {
        en: ["Je appelle Marie", "Je m'appelle Marie", "Je suis appelle Marie", "Moi appelle Marie"],
        fr: ["Je appelle Marie", "Je m'appelle Marie", "Je suis appelle Marie", "Moi appelle Marie"],
        ar: ["Je appelle Marie", "Je m'appelle Marie", "Je suis appelle Marie", "Moi appelle Marie"],
      },
      correctIndex: 1,
    },
    {
      id: "q3",
      prompt: {
        en: "Which question asks for someone's name (formal)?",
        fr: "Quelle question demande le nom (formel) ?",
        ar: "أي سؤال يسأل عن الاسم (رسمي)؟",
      },
      options: {
        en: [
          "Comment allez-vous ?",
          "Comment vous appellez-vous ?",
          "Où habitez-vous ?",
          "Quel âge avez-vous ?",
        ],
        fr: [
          "Comment allez-vous ?",
          "Comment vous appellez-vous ?",
          "Où habitez-vous ?",
          "Quel âge avez-vous ?",
        ],
        ar: [
          "Comment allez-vous ?",
          "Comment vous appellez-vous ?",
          "Où habitez-vous ?",
          "Quel âge avez-vous ?",
        ],
      },
      correctIndex: 1,
    },
  ],
  passRatio: 0.66,
};

export const LESSON_UNITS: LessonUnit[] = [UNIT_FR_A1_INTRO];

export function getUnitById(id: string): LessonUnit | undefined {
  return LESSON_UNITS.find((u) => u.id === id);
}

export function getFirstUnit(): LessonUnit {
  return UNIT_FR_A1_INTRO;
}
