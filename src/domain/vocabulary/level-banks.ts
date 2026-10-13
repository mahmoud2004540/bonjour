/** Level word banks = curated packs + high-frequency cores (batch 1+2) */

import {
  FREQ_A1,
  FREQ_A2,
  FREQ_B1,
  FREQ_B2,
  freqToBank,
} from "./freq-core";
import {
  FREQ2_A1,
  FREQ2_A2,
  FREQ2_B1,
  FREQ2_B2,
} from "./freq-batch2";

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

export const A1_WORD_BANK: BankWord[] = dedupe([
  ...freqToBank(FREQ_A1),
  ...freqToBank(FREQ2_A1),
]);

export const A2_WORD_BANK: BankWord[] = dedupe([
  ...freqToBank(FREQ_A2),
  ...freqToBank(FREQ2_A2),
]);

export const B1_WORD_BANK: BankWord[] = dedupe([
  ...freqToBank(FREQ_B1),
  ...freqToBank(FREQ2_B1),
]);

export const B2_WORD_BANK: BankWord[] = dedupe([
  ...freqToBank(FREQ_B2),
  ...freqToBank(FREQ2_B2),
]);

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
