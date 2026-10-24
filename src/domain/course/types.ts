/**
 * Course model — a CEFR-aligned syllabus unit.
 *
 * Each unit follows the blueprint's learning chain:
 * context → can-do goals → input (dialogue) → understanding → language
 * (vocabulary, grammar, pronunciation, culture) → controlled practice →
 * supported production → real-life task → unit test → next action.
 *
 * French is the target language; explanations exist in en / fr / ar.
 */

import type { Locale } from "../types";

export type L10n = Record<Locale, string>;

export interface DialogueLine {
  speaker: string;
  fr: string;
}

export interface Dialogue {
  title: L10n;
  setting: L10n;
  lines: DialogueLine[];
}

/** Multiple-choice item (comprehension, practice, unit test). */
export interface ChoiceItem {
  kind: "choice";
  id: string;
  prompt: L10n;
  /** French options are shown to every learner; set `optionsL10n` for meaning questions. */
  options?: string[];
  optionsL10n?: Record<Locale, string[]>;
  correctIndex: number;
  explanation?: L10n;
}

/** Type the missing word(s) or a short sentence. */
export interface FillItem {
  kind: "fill";
  id: string;
  prompt: L10n;
  /** French sentence with ___ for the gap, shown under the prompt */
  sentence?: string;
  answers: string[];
  explanation?: L10n;
}

/** Put the words in order. `answer` is the correct sentence. */
export interface OrderItem {
  kind: "order";
  id: string;
  prompt: L10n;
  answer: string;
  explanation?: L10n;
}

export type PracticeItem = ChoiceItem | FillItem | OrderItem;

export interface VocabItem {
  fr: string;
  /** m / f / pl for nouns, omitted otherwise */
  gender?: "m" | "f" | "m/f" | "pl";
  meaning: L10n;
  example?: string;
}

export interface VocabGroup {
  title: L10n;
  items: VocabItem[];
}

export interface GrammarPoint {
  id: string;
  title: L10n;
  explanation: L10n;
  table?: { head: string[]; rows: string[][] };
  examples: { fr: string; gloss: L10n }[];
  watchOut?: L10n;
}

export interface Pronunciation {
  title: L10n;
  explanation: L10n;
  examples: string[];
}

export interface CultureNote {
  title: L10n;
  body: L10n;
}

/** Guided writing: the learner writes, then compares with a model and checks criteria. */
export interface GuidedProduction {
  prompt: L10n;
  model: string;
  checklist: L10n[];
}

/** Real-life task: done outside the app or aloud; always self-assessed, never auto-scored. */
export interface RealTask {
  title: L10n;
  brief: L10n;
  checklist: L10n[];
}

export interface CourseUnit {
  id: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  order: number;
  title: L10n;
  theme: L10n;
  /** "Je peux…" outcomes, CEFR-style */
  canDo: L10n[];
  context: L10n;
  dialogue: Dialogue;
  comprehension: ChoiceItem[];
  vocabulary: VocabGroup[];
  grammar: GrammarPoint[];
  pronunciation: Pronunciation;
  culture: CultureNote;
  practice: PracticeItem[];
  production: GuidedProduction;
  task: RealTask;
  test: ChoiceItem[];
  /** Share of test items needed to pass (0–1) */
  passRatio: number;
  /** Scenario goals this unit also demonstrates (recommendation engine) */
  alsoDemonstrates?: string[];
  /** Old lesson ids this unit replaces (redirects + progress mapping) */
  replaces?: string[];
}

/** Goal id recorded when a unit's test is passed. */
export function unitGoalId(unit: Pick<CourseUnit, "id">): string {
  return `goal-${unit.id}`;
}

export function l10n(en: string, fr: string, ar: string): L10n {
  return { en, fr, ar };
}
