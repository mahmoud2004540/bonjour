/**
 * Supported target languages (what the user learns).
 * UI locale remains independent (en/fr/ar).
 */

import type { Locale, TargetLanguage } from "./types";

export interface LanguageMeta {
  code: TargetLanguage;
  name: Record<Locale, string>;
  /** Full CEFR scenario path available on-platform */
  curriculumReady: boolean;
  flagHint: string;
}

export const TARGET_LANGUAGES: LanguageMeta[] = [
  {
    code: "fr",
    name: { en: "French", fr: "Français", ar: "الفرنسية" },
    curriculumReady: true,
    flagHint: "FR",
  },
  {
    code: "en",
    name: { en: "English", fr: "Anglais", ar: "الإنجليزية" },
    curriculumReady: false,
    flagHint: "EN",
  },
  {
    code: "de",
    name: { en: "German", fr: "Allemand", ar: "الألمانية" },
    curriculumReady: false,
    flagHint: "DE",
  },
  {
    code: "it",
    name: { en: "Italian", fr: "Italien", ar: "الإيطالية" },
    curriculumReady: false,
    flagHint: "IT",
  },
  {
    code: "es",
    name: { en: "Spanish", fr: "Espagnol", ar: "الإسبانية" },
    curriculumReady: false,
    flagHint: "ES",
  },
];

export function getLanguageMeta(code: TargetLanguage): LanguageMeta | undefined {
  return TARGET_LANGUAGES.find((l) => l.code === code);
}
