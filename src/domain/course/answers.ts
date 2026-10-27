/**
 * Answer checking for typed French answers.
 * Forgiving about case, spacing, apostrophe style and final punctuation;
 * honest about accents: a reply that is right except for accents counts,
 * but the learner is told to check them.
 */

export type AnswerVerdict = "correct" | "accents" | "wrong";

function base(s: string): string {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[«»"“”]/g, "")
    .replace(/\s*([?!.,;:])\s*/g, "$1 ")
    .replace(/[?!.;:]+\s*$/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*'\s*/g, "'")
    .trim();
}

function stripAccents(s: string): string {
  return s.normalize("NFD").replace(/\p{M}/gu, "").normalize("NFC");
}

export function checkAnswer(input: string, accepted: string[]): AnswerVerdict {
  const given = base(input);
  if (!given) return "wrong";
  const targets = accepted.map(base);
  if (targets.includes(given)) return "correct";
  const plain = stripAccents(given);
  if (targets.some((t) => stripAccents(t) === plain)) return "accents";
  return "wrong";
}

/** Word-order items: same check, the answer is a single sentence. */
export function checkOrder(input: string, answer: string): AnswerVerdict {
  return checkAnswer(input, [answer]);
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Tokens for a word-order exercise, shuffled deterministically by id. */
export function orderTokens(answer: string, seed: string): string[] {
  // French puts a space before ! and ?; drop the final punctuation and that space.
  const words = answer.replace(/\s*[.!?]+$/, "").trim().split(/\s+/);
  const out = seededShuffle(words, seed);
  if (out.join(" ") === words.join(" ") && out.length > 1) out.push(out.shift()!);
  return out;
}

/**
 * Display order for multiple-choice options, stable per item id so the server
 * and client render the same thing and the right answer isn't always in one spot.
 */
export function optionOrder(count: number, seed: string): number[] {
  return seededShuffle(Array.from({ length: count }, (_, i) => i), seed);
}
