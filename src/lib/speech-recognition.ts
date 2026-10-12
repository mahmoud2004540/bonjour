/**
 * Phase B: browser speech recognition + honest text comparison.
 * Not a certified pronunciation exam — approximate match only.
 */

export type RecognitionSupport = {
  supported: boolean;
  reason?: string;
};

export type MatchLevel = "exact" | "close" | "partial" | "weak";

export type PronunciationMatch = {
  target: string;
  heard: string;
  level: MatchLevel;
  /** 0–100 rough word overlap — not a formal accent score */
  wordScore: number;
  matchedWords: string[];
  missingWords: string[];
};

type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  continuous: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((ev: SpeechRecognitionEventLike) => void) | null;
  onerror: ((ev: { error: string }) => void) | null;
  onend: (() => void) | null;
};

type SpeechRecognitionEventLike = {
  results: {
    length: number;
    [index: number]: {
      length: number;
      isFinal: boolean;
      [index: number]: { transcript: string; confidence: number };
    };
  };
};

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  }
}

export function getRecognitionSupport(): RecognitionSupport {
  if (typeof window === "undefined") {
    return { supported: false, reason: "ssr" };
  }
  const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Ctor) {
    return {
      supported: false,
      reason: "unsupported",
    };
  }
  return { supported: true };
}

/** Normalize for FR comparison — strip accents & punctuation */
export function normalizeFr(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[’']/g, "'")
    .replace(/[?.!,;:«»"()\[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenizeFr(text: string): string[] {
  const n = normalizeFr(text);
  if (!n) return [];
  return n.split(" ").filter(Boolean);
}

export function matchPronunciation(
  target: string,
  heard: string
): PronunciationMatch {
  const tNorm = normalizeFr(target);
  const hNorm = normalizeFr(heard);
  const tWords = tokenizeFr(target);
  const hWords = tokenizeFr(heard);
  const hSet = new Set(hWords);

  const matchedWords = tWords.filter((w) => hSet.has(w));
  const missingWords = tWords.filter((w) => !hSet.has(w));
  const wordScore =
    tWords.length === 0
      ? 0
      : Math.round((matchedWords.length / tWords.length) * 100);

  let level: MatchLevel = "weak";
  if (tNorm === hNorm || wordScore >= 95) level = "exact";
  else if (wordScore >= 75) level = "close";
  else if (wordScore >= 45) level = "partial";

  return {
    target,
    heard,
    level,
    wordScore,
    matchedWords,
    missingWords,
  };
}

export type ListenResult =
  | { ok: true; transcript: string }
  | { ok: false; error: string };

/**
 * Single-shot recognition. Caller must handle UI state.
 * Uses fr-FR. Stops after first final result or timeout.
 */
export function listenOnceFrench(timeoutMs = 8000): Promise<ListenResult> {
  return new Promise((resolve) => {
    const support = getRecognitionSupport();
    if (!support.supported) {
      resolve({ ok: false, error: support.reason || "unsupported" });
      return;
    }

    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) {
      resolve({ ok: false, error: "unsupported" });
      return;
    }

    const rec = new Ctor();
    rec.lang = "fr-FR";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.continuous = false;

    let settled = false;
    const finish = (result: ListenResult) => {
      if (settled) return;
      settled = true;
      try {
        rec.abort();
      } catch {
        /* ignore */
      }
      resolve(result);
    };

    const timer = window.setTimeout(() => {
      finish({ ok: false, error: "timeout" });
    }, timeoutMs);

    rec.onresult = (ev) => {
      window.clearTimeout(timer);
      try {
        const transcript = ev.results[0]?.[0]?.transcript?.trim() || "";
        if (!transcript) {
          finish({ ok: false, error: "empty" });
          return;
        }
        finish({ ok: true, transcript });
      } catch {
        finish({ ok: false, error: "parse" });
      }
    };

    rec.onerror = (ev) => {
      window.clearTimeout(timer);
      finish({ ok: false, error: ev.error || "error" });
    };

    rec.onend = () => {
      window.clearTimeout(timer);
      if (!settled) finish({ ok: false, error: "ended" });
    };

    try {
      rec.start();
    } catch {
      window.clearTimeout(timer);
      finish({ ok: false, error: "start_failed" });
    }
  });
}
