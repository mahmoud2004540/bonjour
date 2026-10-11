/** Local vocabulary + simple spaced repetition */

import type { Locale, VocabItem, VocabStatus } from "@/domain/types";
import { SEED_FR_VOCAB } from "@/domain/vocabulary/seed-fr";

const KEY = "bonjour_vocab_v1";

function id(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function load(): VocabItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as VocabItem[]) : [];
  } catch {
    return [];
  }
}

function save(items: VocabItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function ensureSeedVocab(): VocabItem[] {
  let items = load();
  if (items.length > 0) return items;
  const now = new Date().toISOString();
  items = SEED_FR_VOCAB.map((s) => ({
    id: s.id,
    targetLanguage: s.targetLanguage,
    term: s.term,
    translation: s.translation,
    example: s.example,
    level: s.level,
    status: "new" as VocabStatus,
    ease: 2.5,
    intervalDays: 0,
    nextReviewAt: now,
    correctCount: 0,
    wrongCount: 0,
    createdAt: now,
  }));
  save(items);
  return items;
}

export function getDueVocab(limit = 10): VocabItem[] {
  const items = ensureSeedVocab();
  const now = Date.now();
  return items
    .filter((v) => new Date(v.nextReviewAt).getTime() <= now)
    .slice(0, limit);
}

export function getAllVocab(): VocabItem[] {
  return ensureSeedVocab();
}

/** SM-2-inspired local update — transparent, not a certification score */
export function reviewVocab(vocabId: string, remembered: boolean): void {
  const items = ensureSeedVocab();
  const v = items.find((x) => x.id === vocabId);
  if (!v) return;

  if (remembered) {
    v.correctCount += 1;
    v.ease = Math.min(3.0, v.ease + 0.1);
    v.intervalDays = v.intervalDays === 0 ? 1 : Math.round(v.intervalDays * v.ease);
    v.status =
      v.intervalDays >= 21 ? "mastered" : v.intervalDays >= 3 ? "learning" : "learning";
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
