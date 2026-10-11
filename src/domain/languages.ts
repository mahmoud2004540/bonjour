import type { Locale, TargetLanguage } from "./types";

export type PathDepth = "full" | "starter";

export interface LanguageMeta {
  code: TargetLanguage;
  name: Record<Locale, string>;
  curriculumReady: boolean;
  pathDepth: PathDepth;
  flagHint: string;
}

export const TARGET_LANGUAGES: LanguageMeta[] = [
  {
    code: "fr",
    name: { en: "French", fr: "Français", ar: "الفرنسية" },
    curriculumReady: true,
    pathDepth: "full",
    flagHint: "FR",
  },
  {
    code: "en",
    name: { en: "English", fr: "Anglais", ar: "الإنجليزية" },
    curriculumReady: true,
    pathDepth: "starter",
    flagHint: "EN",
  },
  {
    code: "de",
    name: { en: "German", fr: "Allemand", ar: "الألمانية" },
    curriculumReady: true,
    pathDepth: "starter",
    flagHint: "DE",
  },
  {
    code: "it",
    name: { en: "Italian", fr: "Italien", ar: "الإيطالية" },
    curriculumReady: true,
    pathDepth: "starter",
    flagHint: "IT",
  },
  {
    code: "es",
    name: { en: "Spanish", fr: "Espagnol", ar: "الإسبانية" },
    curriculumReady: true,
    pathDepth: "starter",
    flagHint: "ES",
  },
];

export function getLanguageMeta(code: TargetLanguage): LanguageMeta | undefined {
  return TARGET_LANGUAGES.find((l) => l.code === code);
}
