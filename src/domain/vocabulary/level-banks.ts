/** Level banks = frequency batches 1–5 (quality EN/AR coverage growing toward 5k) */

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
import {
  FREQ3_A1,
  FREQ3_A2,
  FREQ3_B1,
  FREQ3_B2,
} from "./freq-batch3";
import {
  FREQ4_A1,
  FREQ4_A2,
  FREQ4_B1,
  FREQ4_B2,
} from "./freq-batch4";
import { FREQ5_A1 } from "./freq-batch5a";
import { FREQ5_A2 } from "./freq-batch5b";
import { FREQ5_B1 } from "./freq-batch5c";
import { FREQ5_B2 } from "./freq-batch5d";

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
  ...freqToBank(FREQ3_A1),
  ...freqToBank(FREQ4_A1),
  ...freqToBank(FREQ5_A1),
]);

export const A2_WORD_BANK: BankWord[] = dedupe([
  ...freqToBank(FREQ_A2),
  ...freqToBank(FREQ2_A2),
  ...freqToBank(FREQ3_A2),
  ...freqToBank(FREQ4_A2),
  ...freqToBank(FREQ5_A2),
]);

export const B1_WORD_BANK: BankWord[] = dedupe([
  ...freqToBank(FREQ_B1),
  ...freqToBank(FREQ2_B1),
  ...freqToBank(FREQ3_B1),
  ...freqToBank(FREQ4_B1),
  ...freqToBank(FREQ5_B1),
]);

export const B2_WORD_BANK: BankWord[] = dedupe([
  ...freqToBank(FREQ_B2),
  ...freqToBank(FREQ2_B2),
  ...freqToBank(FREQ3_B2),
  ...freqToBank(FREQ4_B2),
  ...freqToBank(FREQ5_B2),
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
