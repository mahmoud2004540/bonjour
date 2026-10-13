/** Level word banks = curated packs + high-frequency core coverage */

import {
  FREQ_A1,
  FREQ_A2,
  FREQ_B1,
  FREQ_B2,
  freqToBank,
} from "./freq-core";

export type BankWord = {
  term: string;
  meaning: { en: string; fr: string; ar: string };
  example?: string;
};

function dedupe(words: BankWord[]): BankWord[] {
  const map = new Map<string, BankWord>();
  for (const w of words) {
    const k = w.term.toLowerCase().trim();
    if (!map.has(k)) map.set(k, w);
  }
  return Array.from(map.values());
}

const EXTRA_A1: BankWord[] = [
  {
    term: "bonjour",
    meaning: { en: "hello", fr: "salutation", ar: "مرحبًا" },
    example: "Bonjour !",
  },
  {
    term: "s'il vous plaît",
    meaning: { en: "please", fr: "politesse", ar: "من فضلك" },
  },
  {
    term: "je voudrais",
    meaning: { en: "I would like", fr: "demande", ar: "أود" },
  },
  {
    term: "l'addition",
    meaning: { en: "the bill", fr: "restaurant", ar: "الحساب" },
  },
  {
    term: "tout droit",
    meaning: { en: "straight ahead", fr: "direction", ar: "على طول" },
  },
  {
    term: "quelle heure est-il ?",
    meaning: { en: "what time is it?", fr: "heure", ar: "كم الساعة؟" },
  },
];

export const A1_WORD_BANK: BankWord[] = dedupe([
  ...EXTRA_A1,
  ...freqToBank(FREQ_A1),
]);

export const A2_WORD_BANK: BankWord[] = dedupe(freqToBank(FREQ_A2));
export const B1_WORD_BANK: BankWord[] = dedupe(freqToBank(FREQ_B1));
export const B2_WORD_BANK: BankWord[] = dedupe(freqToBank(FREQ_B2));

/** Approximate coverage counts for UI honesty */
export const BANK_STATS = {
  A1: A1_WORD_BANK.length,
  A2: A2_WORD_BANK.length,
  B1: B1_WORD_BANK.length,
  B2: B2_WORD_BANK.length,
  total:
    A1_WORD_BANK.length +
    A2_WORD_BANK.length +
    B1_WORD_BANK.length +
    B2_WORD_BANK.length,
} as const;

export function bankForLevel(level: string): BankWord[] {
  if (level === "A1") return A1_WORD_BANK;
  if (level === "A2") return A2_WORD_BANK;
  if (level === "B1") return B1_WORD_BANK;
  if (level === "B2" || level === "C1" || level === "C2") return B2_WORD_BANK;
  return A1_WORD_BANK;
}
