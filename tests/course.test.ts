import { describe, expect, it } from "vitest";
import { A1_COURSE } from "@/domain/course/a1";
import { checkAnswer, orderTokens } from "@/domain/course/answers";
import { LEGACY_A1_UNIT_GOALS, LEGACY_A1_UNIT_IDS } from "@/domain/course/legacy";
import { getReplacementUnitId, migrateLegacyProgress } from "@/domain/course/registry";
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
  [/\bà le\b/i, "à le → au"],
  [/\bà les\b/i, "à les → aux"],
  [/\bde le\b/i, "de le → du"],
  [/\bj'ai allé/i, "aller takes être"],
  [/\bun kilo des\b/i, "quantity + de"],
  [/quatre-vingts-/i, "quatre-vingt- before a number"],
  [/\bvous faisez\b/i, "vous faites"],
  [/\bje suis (\d+|vingt|trente) ans\b/i, "avoir for age"],
];

describe("A1 syllabus content", () => {
  it("has 13 units in order, ending with the DELF A1 review", () => {
    expect(A1_COURSE.map((u) => u.order)).toEqual(Array.from({ length: 13 }, (_, i) => i + 1));
    expect(A1_COURSE.at(-1)!.id).toContain("-exam-");
  });

  it("uses unique ids across all units and items", () => {
    const ids = A1_COURSE.flatMap((u) => [
      u.id,
      ...u.comprehension.map((x) => x.id),
      ...u.practice.map((x) => x.id),
      ...u.test.map((x) => x.id),
      ...u.grammar.map((x) => x.id),
    ]);
    expect(ids.length).toBe(new Set(ids).size);
  });

  for (const u of A1_COURSE) {
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
  it("the path shows only syllabus units for A1", () => {
    const a1 = getAllUnits().filter((u) => u.level === "A1").map((u) => u.id);
    expect(a1).toEqual(A1_COURSE.map((u) => u.id));
  });

  it("every old A1 lesson redirects to a syllabus unit", () => {
    for (const id of LEGACY_A1_UNIT_IDS) expect(getReplacementUnitId(id), id).toBeDefined();
  });

  it("A1 still has an exam-track unit for readiness", () => {
    expect(getExamTrackUnits("A1").map((u) => u.id)).toEqual(["fr-a1-exam-bilan"]);
  });

  it("carries progress over only when every replaced lesson was completed", () => {
    const cafe = A1_COURSE.find((u) => u.replaces?.includes("fr-a1-cafe-unit"))!;
    const shopping = A1_COURSE.find((u) => u.replaces?.includes("fr-a1-courses-unit"))!;
    const done = [...LEGACY_A1_UNIT_GOALS["fr-a1-cafe-unit"], ...LEGACY_A1_UNIT_GOALS["fr-a1-courses-unit"]];
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
