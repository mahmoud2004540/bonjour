import type { Locale, TargetLanguage } from "./types";

export interface LanguageMeta {
  code: TargetLanguage;
  name: Record<Locale, string>;
  /** At least one published A1 path exists */
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
    curriculumReady: true,
    flagHint: "EN",
  },
  {
    code: "de",
    name: { en: "German", fr: "Allemand", ar: "الألمانية" },
    curriculumReady: true,
    flagHint: "DE",
  },
  {
    code: "it",
    name: { en: "Italian", fr: "Italien", ar: "الإيطالية" },
    curriculumReady: true,
    flagHint: "IT",
  },
  {
    code: "es",
    name: { en: "Spanish", fr: "Espagnol", ar: "الإسبانية" },
    curriculumReady: true,
    flagHint: "ES",
  },
];

export function getLanguageMeta(code: TargetLanguage): LanguageMeta | undefined {
  return TARGET_LANGUAGES.find((l) => l.code === code);
}
