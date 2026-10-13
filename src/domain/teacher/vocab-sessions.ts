import type { TeacherSession } from "./sessions";
import {
  A1_WORD_BANK,
  A2_WORD_BANK,
  B1_WORD_BANK,
  B2_WORD_BANK,
} from "../vocabulary/level-banks";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function makeVocabSessions(
  level: "A1" | "A2" | "B1" | "B2",
  bank: typeof A1_WORD_BANK,
  orderStart: number
): TeacherSession[] {
  const parts = chunk(bank, 20);
  return parts.map((words, i) => ({
    id: `teach-${level.toLowerCase()}-vocab-pack-${i + 1}`,
    track: "vocab" as const,
    level,
    order: orderStart + i,
    title: {
      en: `${level} vocabulary pack ${i + 1} (${words.length} words)`,
      fr: `${level} — lexique ${i + 1} (${words.length} mots)`,
      ar: `${level} — حفظ كلمات ${i + 1} (${words.length} كلمة)`,
    },
    coach: {
      en: `Memorize these ${words.length} words, then review them later in Vocabulary.`,
      fr: `Mémorisez ces ${words.length} mots, puis révisez dans Vocabulaire.`,
      ar: `احفظ الـ ${words.length} كلمة دول، وبعدين راجعهم من قسم المفردات.`,
    },
    words: words.map((w) => ({ term: w.term, meaning: w.meaning })),
  }));
}

export const EXTRA_VOCAB_SESSIONS: TeacherSession[] = [
  ...makeVocabSessions("A1", A1_WORD_BANK, 50),
  ...makeVocabSessions("A2", A2_WORD_BANK, 60),
  ...makeVocabSessions("B1", B1_WORD_BANK, 70),
  ...makeVocabSessions("B2", B2_WORD_BANK, 80),
];
