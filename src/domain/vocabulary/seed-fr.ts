/** Seed French vocabulary for SRS — original on-platform content */

import type { Locale, TargetLanguage } from "../types";

export interface SeedVocab {
  id: string;
  targetLanguage: TargetLanguage;
  term: string;
  translation: Record<Locale, string>;
  example: string;
  level: "A1" | "A2" | "B1";
}

export const SEED_FR_VOCAB: SeedVocab[] = [
  {
    id: "fr-bonjour",
    targetLanguage: "fr",
    term: "bonjour",
    translation: { en: "hello / good morning", fr: "salutations du jour", ar: "مرحبًا / صباح الخير" },
    example: "Bonjour, je m'appelle Marie.",
    level: "A1",
  },
  {
    id: "fr-merci",
    targetLanguage: "fr",
    term: "merci",
    translation: { en: "thank you", fr: "remerciement", ar: "شكرًا" },
    example: "Merci beaucoup !",
    level: "A1",
  },
  {
    id: "fr-silvp",
    targetLanguage: "fr",
    term: "s'il vous plaît",
    translation: { en: "please (formal)", fr: "formule de politesse", ar: "من فضلك (رسمي)" },
    example: "Un café, s'il vous plaît.",
    level: "A1",
  },
  {
    id: "fr-eau",
    targetLanguage: "fr",
    term: "eau",
    translation: { en: "water", fr: "eau", ar: "ماء" },
    example: "Une eau, s'il vous plaît.",
    level: "A1",
  },
  {
    id: "fr-combien",
    targetLanguage: "fr",
    term: "combien",
    translation: { en: "how much / how many", fr: "quantité ou prix", ar: "كم" },
    example: "C'est combien ?",
    level: "A1",
  },
  {
    id: "fr-gare",
    targetLanguage: "fr",
    term: "gare",
    translation: { en: "train station", fr: "station ferroviaire", ar: "محطة قطار" },
    example: "Où est la gare ?",
    level: "A1",
  },
  {
    id: "fr-rdv",
    targetLanguage: "fr",
    term: "rendez-vous",
    translation: { en: "appointment", fr: "meeting arrangé", ar: "موعد" },
    example: "Je voudrais prendre rendez-vous.",
    level: "A2",
  },
  {
    id: "fr-pourriez",
    targetLanguage: "fr",
    term: "pourriez-vous",
    translation: { en: "could you (formal)", fr: "demande polie", ar: "هل يمكنكم" },
    example: "Pourriez-vous m'aider ?",
    level: "A2",
  },
];
