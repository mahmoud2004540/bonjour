import { describe, expect, it } from "vitest";
import { checkAnswer, optionOrder, orderTokens } from "@/domain/course/answers";
import { LEGACY_UNIT_GOALS, LEGACY_UNIT_IDS } from "@/domain/course/legacy";
import {
  COURSE_UNITS,
  SYLLABUS_LEVELS,
  getCourseUnitsByLevel,
  getReplacementUnitId,
  migrateLegacyProgress,
} from "@/domain/course/registry";
import { unitGoalId, type ChoiceItem, type CourseUnit, type L10n } from "@/domain/course/types";
import { getAllUnits, getExamTrackUnits } from "@/domain/lessons/registry";

const LOCALES = ["en", "fr", "ar"] as const;

function l10nFields(value: unknown, path = ""): [string, L10n][] {
  if (!value || typeof value !== "object") return [];
  const obj = value as Record<string, unknown>;
  if (LOCALES.every((l) => typeof obj[l] === "string") && Object.keys(obj).length === 3) {
    return [[path, obj as L10n]];
  }
  return Object.entries(obj).flatMap(([k, v]) => l10nFields(v, `${path}.${k}`));
}

function options(item: ChoiceItem): Record<string, string[]> {
  return item.optionsL10n ?? { en: item.options!, fr: item.options!, ar: item.options! };
}

/** French the learner is taught as correct (excludes deliberate wrong options and explanations). */
function modelFrench(u: CourseUnit): string[] {
  const out: string[] = [
    ...u.dialogue.lines.map((l) => l.fr),
    ...u.vocabulary.flatMap((g) => g.items.flatMap((v) => [v.fr, v.example ?? ""])),
    ...u.grammar.flatMap((g) => [...g.examples.map((e) => e.fr), ...(g.table?.rows.flat() ?? [])]),
    ...u.pronunciation.examples,
    u.production.model,
  ];
  for (const p of u.practice) {
    if (p.kind === "fill") out.push(...p.answers);
    if (p.kind === "order") out.push(p.answer);
  }
  for (const q of [...u.comprehension, ...u.test, ...u.practice.filter((p): p is ChoiceItem => p.kind === "choice")]) {
    if (!q.optionsL10n) out.push(q.options![q.correctIndex]);
  }
  return out.filter(Boolean);
}

/** Frequent learner-facing errors that must never appear in model French. */
const FORBIDDEN: [RegExp, string][] = [
  [/appell(ez|ons)\b/i, "appelez / appelons take one l"],
  [/\bje appelle\b/i, "je m'appelle"],
  [/(?<!\p{L})à le(?!\p{L})/iu, "à le → au"],
  [/(?<!\p{L})à les(?!\p{L})/iu, "à les → aux"],
  [/(?<!\p{L})de le(?!\p{L})/iu, "de le → du"],
  [/\bj'ai allé/i, "aller takes être"],
  [/\bun kilo des\b/i, "quantity + de"],
  [/quatre-vingts-/i, "quatre-vingt- before a number"],
  [/\bvous faisez\b/i, "vous faites"],
  [/\bje suis (\d+|vingt|trente) ans\b/i, "avoir for age"],
];

describe("syllabus content", () => {
  for (const level of SYLLABUS_LEVELS) {
    it(`${level} has 13 units in order, ending with the DELF ${level} review`, () => {
      const units = getCourseUnitsByLevel(level);
      expect(units.map((u) => u.order)).toEqual(Array.from({ length: 13 }, (_, i) => i + 1));
      expect(units.at(-1)!.id).toBe(`fr-${level.toLowerCase()}-exam-bilan`);
      expect(units.every((u) => u.id.startsWith(`fr-${level.toLowerCase()}-`))).toBe(true);
    });
  }

  it("uses unique ids across all units and items", () => {
    const ids = COURSE_UNITS.flatMap((u) => [
      u.id,
      ...u.comprehension.map((x) => x.id),
      ...u.practice.map((x) => x.id),
      ...u.test.map((x) => x.id),
      ...u.grammar.map((x) => x.id),
    ]);
    expect(ids.length).toBe(new Set(ids).size);
  });

  for (const u of COURSE_UNITS) {
    describe(u.id, () => {
      it("has every explanation in en, fr and ar", () => {
        for (const [path, value] of l10nFields(u)) {
          for (const l of LOCALES) expect(value[l].trim(), `${path}.${l}`).not.toBe("");
        }
      });

      it("is complete enough to teach the unit", () => {
        expect(u.canDo.length).toBeGreaterThanOrEqual(3);
        expect(u.dialogue.lines.length).toBeGreaterThanOrEqual(7);
        expect(u.comprehension.length).toBeGreaterThanOrEqual(4);
        expect(u.vocabulary.flatMap((g) => g.items).length).toBeGreaterThanOrEqual(12);
        expect(u.grammar.length).toBeGreaterThanOrEqual(2);
        expect(u.practice.length).toBeGreaterThanOrEqual(10);
        expect(u.test.length).toBeGreaterThanOrEqual(10);
        expect(u.production.checklist.length).toBeGreaterThanOrEqual(3);
        expect(u.task.checklist.length).toBeGreaterThanOrEqual(3);
        expect(u.passRatio).toBe(0.7);
      });

      it("has valid choice items (same option count in every language)", () => {
        const choices = [...u.comprehension, ...u.test, ...u.practice.filter((p): p is ChoiceItem => p.kind === "choice")];
        for (const q of choices) {
          const opts = options(q);
          const n = opts.fr.length;
          expect(n, q.id).toBeGreaterThanOrEqual(2);
          for (const l of LOCALES) expect(opts[l].length, `${q.id}.${l}`).toBe(n);
          expect(q.correctIndex, q.id).toBeLessThan(n);
          expect(new Set(opts.fr).size, `${q.id} duplicate options`).toBe(n);
        }
      });

      it("has typed exercises that accept their own model answer", () => {
        for (const p of u.practice) {
          if (p.kind === "fill") {
            expect(p.answers.length, p.id).toBeGreaterThan(0);
            if (p.sentence) expect(p.sentence, p.id).toContain("___");
            for (const a of p.answers) expect(checkAnswer(a, p.answers), p.id).toBe("correct");
          }
          if (p.kind === "order") {
            expect(p.answer.split(" ").length, p.id).toBeGreaterThanOrEqual(3);
            const tokens = orderTokens(p.answer, p.id);
            expect(tokens.every((w) => w.trim() !== ""), `${p.id} empty token`).toBe(true);
            expect(checkAnswer(tokens.join(" "), [p.answer]), `${p.id} not shuffled`).toBe("wrong");
          }
        }
      });

      it("contains no common French errors in the model language", () => {
        for (const text of modelFrench(u)) {
          for (const [re, why] of FORBIDDEN) {
            expect(re.test(text), `${u.id}: « ${text} » (${why})`).toBe(false);
          }
        }
      });
    });
  }
});

describe("choice display order", () => {
  it("is a stable permutation that spreads the right answer across positions", () => {
    const items = COURSE_UNITS.flatMap((u) => [...u.comprehension, ...u.test, ...u.practice.filter((p) => p.kind === "choice")]);
    let first = 0;
    for (const q of items) {
      if (q.kind !== "choice") continue;
      const n = (q.optionsL10n?.fr ?? q.options ?? []).length;
      const order = optionOrder(n, q.id);
      expect([...order].sort()).toEqual(Array.from({ length: n }, (_, i) => i));
      expect(optionOrder(n, q.id)).toEqual(order);
      if (order[0] === q.correctIndex) first++;
    }
    // Uniform over 2–4 options would be roughly a third; anything near 1 means no real shuffle.
    expect(first / items.length).toBeLessThan(0.5);
  });
});

describe("answer checking", () => {
  it("accepts case, spacing, apostrophe style and final punctuation", () => {
    expect(checkAnswer("  JE M’APPELLE  Sara ", ["Je m'appelle Sara."])).toBe("correct");
    expect(checkAnswer("comment vous appelez-vous?", ["Comment vous appelez-vous ?"])).toBe("correct");
  });

  it("flags missing accents instead of hiding them", () => {
    expect(checkAnswer("tres bien", ["très bien"])).toBe("accents");
  });

  it("rejects wrong answers", () => {
    expect(checkAnswer("vous vous appellez", ["vous vous appelez"])).toBe("wrong");
    expect(checkAnswer("", ["bonjour"])).toBe("wrong");
  });
});

describe("replacing the old A1 lessons", () => {
  it("the path shows only syllabus units for syllabus levels", () => {
    for (const level of SYLLABUS_LEVELS) {
      const ids = getAllUnits().filter((u) => u.level === level).map((u) => u.id);
      expect(ids, level).toEqual(getCourseUnitsByLevel(level).map((u) => u.id));
    }
  });

  it("every replaced lesson redirects to a syllabus unit of the same level", () => {
    for (const id of LEGACY_UNIT_IDS) {
      const target = getReplacementUnitId(id);
      expect(target, id).toBeDefined();
    }
    // Every replaced id is listed exactly once.
    const replaced = COURSE_UNITS.flatMap((u) => u.replaces ?? []);
    expect(new Set(replaced).size).toBe(replaced.length);
    expect([...replaced].sort()).toEqual([...LEGACY_UNIT_IDS].sort());
  });

  it("each syllabus level has exactly one exam-track unit for readiness", () => {
    for (const level of SYLLABUS_LEVELS) {
      expect(getExamTrackUnits(level).map((u) => u.id)).toEqual([`fr-${level.toLowerCase()}-exam-bilan`]);
    }
  });

  it("carries progress over only when every replaced lesson was completed", () => {
    const cafe = COURSE_UNITS.find((u) => u.replaces?.includes("fr-a1-cafe-unit"))!;
    const shopping = COURSE_UNITS.find((u) => u.replaces?.includes("fr-a1-courses-unit"))!;
    const done = [...LEGACY_UNIT_GOALS["fr-a1-cafe-unit"], ...LEGACY_UNIT_GOALS["fr-a1-courses-unit"]];
    const carried = migrateLegacyProgress(done);
    expect(carried).toContain(unitGoalId(cafe));
    // Shopping also replaces fr-a1-more-shopping, which was not completed.
    expect(carried).not.toContain(unitGoalId(shopping));
    expect(migrateLegacyProgress([...done, ...carried])).not.toContain(unitGoalId(cafe));
  });
});

describe("links into the course", () => {
  it("every Academy module links to an existing unit", async () => {
    const { getAllModules } = await import("@/domain/university/modules");
    const { getUnitById } = await import("@/domain/lessons/registry");
    for (const m of getAllModules()) {
      expect(m.relatedUnitIds.filter((id) => !getUnitById(id)), m.id).toEqual([]);
      expect(new Set(m.relatedUnitIds).size, `${m.id} duplicate links`).toBe(m.relatedUnitIds.length);
    }
  });
});
