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
  order: number;
  title: Record<Locale, string>;
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
  passRatio: number;
}
