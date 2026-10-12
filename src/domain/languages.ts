import type { Locale, TargetLanguage } from "./types";

export type PathDepth = "full" | "starter";

export interface LanguageMeta {
  code: TargetLanguage;
  name: Record<Locale, string>;
  curriculumReady: boolean;
  pathDepth: PathDepth;
  /** Shown in onboarding language picker */
  selectable: boolean;
  flagHint: string;
}

/**
 * Product decision (current): only French is offered as a learning language.
 * Other codes remain in the type system for a future multi-lang release.
 */
export const TARGET_LANGUAGES: LanguageMeta[] = [
  {
    code: "fr",
    name: { en: "French", fr: "Français", ar: "الفرنسية" },
    curriculumReady: true,
    pathDepth: "full",
    selectable: true,
    flagHint: "FR",
  },
  {
    code: "en",
    name: { en: "English", fr: "Anglais", ar: "الإنجليزية" },
    curriculumReady: false,
    pathDepth: "starter",
    selectable: false,
    flagHint: "EN",
  },
  {
    code: "de",
    name: { en: "German", fr: "Allemand", ar: "الألمانية" },
    curriculumReady: false,
    pathDepth: "starter",
    selectable: false,
    flagHint: "DE",
  },
  {
    code: "it",
    name: { en: "Italian", fr: "Italien", ar: "الإيطالية" },
    curriculumReady: false,
    pathDepth: "starter",
    selectable: false,
    flagHint: "IT",
  },
  {
    code: "es",
    name: { en: "Spanish", fr: "Espagnol", ar: "الإسبانية" },
    curriculumReady: false,
    pathDepth: "starter",
    selectable: false,
    flagHint: "ES",
  },
];

export function getSelectableLanguages(): LanguageMeta[] {
  return TARGET_LANGUAGES.filter((l) => l.selectable);
}

export function getLanguageMeta(code: TargetLanguage): LanguageMeta | undefined {
  return TARGET_LANGUAGES.find((l) => l.code === code);
}
