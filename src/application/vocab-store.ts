/** Local vocabulary + spaced repetition — seeded from banks + curriculum units */

import type { Locale, VocabItem, VocabStatus } from "@/domain/types";
import { SEED_FR_VOCAB } from "@/domain/vocabulary/seed-fr";
import {
  A1_WORD_BANK,
  A2_WORD_BANK,
  B1_WORD_BANK,
  B2_WORD_BANK,
  type BankWord,
} from "@/domain/vocabulary/level-banks";
import { getAllUnits } from "@/domain/lessons/registry";

const KEY = "bonjour_vocab_v2";
const LEGACY_KEY = "bonjour_vocab_v1";

function id(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function load(): VocabItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as VocabItem[];
    // migrate legacy once
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const items = JSON.parse(legacy) as VocabItem[];
      save(items);
      return items;
    }
    return [];
  } catch {
    return [];
  }
}

function save(items: VocabItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
}

function bankToSeed(
  bank: BankWord[],
  level: "A1" | "A2" | "B1" | "B2",
  prefix: string
): Omit<VocabItem, "status" | "ease" | "intervalDays" | "nextReviewAt" | "correctCount" | "wrongCount" | "createdAt">[] {
  return bank.map((w, i) => ({
    id: `${prefix}-${i}-${w.term.slice(0, 12)}`,
    targetLanguage: "fr" as const,
    term: w.term,
    translation: w.meaning,
    example: w.example,
    level,
  }));
}

function curriculumVocab() {
  const out: {
    id: string;
    term: string;
    translation: Record<Locale, string>;
    example?: string;
    level: string;
  }[] = [];
  const seen = new Set<string>();
  for (const u of getAllUnits()) {
    for (const v of u.vocab) {
      const key = v.term.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({
        id: `unit-${u.id}-${key.slice(0, 20)}`,
        term: v.term,
        translation: v.meaning,
        example: v.example,
        level: u.level,
      });
    }
  }
  return out;
}

function buildFullSeed(now: string): VocabItem[] {
  const base = [
    ...SEED_FR_VOCAB.map((s) => ({
      id: s.id,
      targetLanguage: s.targetLanguage,
      term: s.term,
      translation: s.translation,
      example: s.example,
      level: s.level,
    })),
    ...bankToSeed(A1_WORD_BANK, "A1", "bank-a1"),
    ...bankToSeed(A2_WORD_BANK, "A2", "bank-a2"),
    ...bankToSeed(B1_WORD_BANK, "B1", "bank-b1"),
    ...bankToSeed(B2_WORD_BANK, "B2", "bank-b2"),
    ...curriculumVocab().map((c) => ({
      id: c.id,
      targetLanguage: "fr" as const,
      term: c.term,
      translation: c.translation,
      example: c.example,
      level: c.level as "A1" | "A2" | "B1" | "B2",
    })),
  ];

  const map = new Map<string, (typeof base)[0]>();
  for (const row of base) {
    const k = row.term.toLowerCase().trim();
    if (!map.has(k)) map.set(k, row);
  }

  return Array.from(map.values()).map((s) => ({
    ...s,
    status: "new" as VocabStatus,
    ease: 2.5,
    intervalDays: 0,
    nextReviewAt: now,
    correctCount: 0,
    wrongCount: 0,
    createdAt: now,
  }));
}

/** Merge any missing bank/curriculum terms into existing store without resetting progress */
function mergeMissing(existing: VocabItem[]): VocabItem[] {
  const now = new Date().toISOString();
  const full = buildFullSeed(now);
  const have = new Set(existing.map((e) => e.term.toLowerCase().trim()));
  const added: VocabItem[] = [];
  for (const row of full) {
    const k = row.term.toLowerCase().trim();
    if (!have.has(k)) {
      added.push(row);
      have.add(k);
    }
  }
  if (added.length === 0) return existing;
  const merged = [...existing, ...added];
  save(merged);
  return merged;
}

export function ensureSeedVocab(): VocabItem[] {
  let items = load();
  if (items.length === 0) {
    items = buildFullSeed(new Date().toISOString());
    save(items);
    return items;
  }
  return mergeMissing(items);
}

export function getDueVocab(limit = 40): VocabItem[] {
  const items = ensureSeedVocab();
  const now = Date.now();
  return items
    .filter((v) => new Date(v.nextReviewAt).getTime() <= now)
    .slice(0, limit);
}

export function getVocabByLevel(level: string): VocabItem[] {
  return ensureSeedVocab().filter((v) => v.level === level);
}

export function getAllVocab(): VocabItem[] {
  return ensureSeedVocab();
}

export function reviewVocab(vocabId: string, remembered: boolean): void {
  const items = ensureSeedVocab();
  const v = items.find((x) => x.id === vocabId);
  if (!v) return;

  if (remembered) {
    v.correctCount += 1;
    v.ease = Math.min(3.0, v.ease + 0.1);
    v.intervalDays =
      v.intervalDays === 0 ? 1 : Math.round(v.intervalDays * v.ease);
    v.status =
      v.intervalDays >= 21
        ? "mastered"
        : v.intervalDays >= 3
          ? "learning"
          : "learning";
  } else {
    v.wrongCount += 1;
    v.ease = Math.max(1.3, v.ease - 0.2);
    v.intervalDays = 0;
    v.status = "needs_revision";
  }

  const next = new Date();
  next.setDate(next.getDate() + Math.max(v.intervalDays, remembered ? 1 : 0));
  v.nextReviewAt = next.toISOString();
  save(items);
}

export function addCustomVocab(
  term: string,
  translation: string,
  locale: Locale
): void {
  const items = ensureSeedVocab();
  if (items.some((x) => x.term.toLowerCase() === term.toLowerCase())) return;
  const now = new Date().toISOString();
  const t: Record<Locale, string> = {
    en: translation,
    fr: translation,
    ar: translation,
  };
  t[locale] = translation;
  items.push({
    id: id(),
    targetLanguage: "fr",
    term: term.trim(),
    translation: t,
    level: "A1",
    status: "new",
    ease: 2.5,
    intervalDays: 0,
    nextReviewAt: now,
    correctCount: 0,
    wrongCount: 0,
    createdAt: now,
  });
  save(items);
}
