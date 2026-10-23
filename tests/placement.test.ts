import { beforeEach, describe, expect, it } from "vitest";
import { PLACEMENT_QUESTIONS, PLACEMENT_VERSION } from "@/domain/placement/questions";
import { scorePlacement, type PlacementResponses } from "@/domain/placement/scoring";

const NOW = "2026-01-01T00:00:00.000Z";
const mcq = PLACEMENT_QUESTIONS.filter((q) => q.type === "multiple_choice");

function allCorrect(): PlacementResponses {
  return Object.fromEntries(mcq.map((q) => [q.id, q.correctIndex!]));
}

describe("scorePlacement", () => {
  it("scores only from the question bank", () => {
    const result = scorePlacement(allCorrect(), NOW);
    expect(result.version).toBe(PLACEMENT_VERSION);
    for (const o of result.observations.filter((o) => o.source === "auto_scored")) {
      expect(o.isCorrect).toBe(true);
    }
    expect(result.estimatedStartingLevel).toBe("A2");
  });

  it("never auto-scores open answers and never claims speaking", () => {
    const open = PLACEMENT_QUESTIONS.filter((q) => q.type === "open");
    const responses = { ...allCorrect(), ...Object.fromEntries(open.map((q) => [q.id, "Je m'appelle Sara."])) };
    const result = scorePlacement(responses, NOW);
    for (const o of result.observations.filter((o) => open.some((q) => q.id === o.questionId))) {
      expect(o.isCorrect).toBeNull();
      expect(o.source).toBe("pending_review");
    }
    const writing = result.skillEvidence.find((e) => e.dimension === "writing")!;
    expect(writing).toMatchObject({ status: "unknown", notes: "pending_review" });
    expect(result.skillEvidence.find((e) => e.dimension === "speaking")!.status).toBe("unknown");
  });

  it("treats unanswered and invalid input as missing evidence, not wrong", () => {
    const result = scorePlacement({ [mcq[0].id]: -1, [mcq[1].id]: "1" }, NOW);
    expect(result.observations.every((o) => o.isCorrect === null)).toBe(true);
    expect(result.skillEvidence.every((e) => e.status === "unknown")).toBe(true);
    expect(result.estimatedStartingLevel).toBe("A1");
  });

  it("marks partial evidence when some answers in a dimension are wrong", () => {
    const vocab = mcq.filter((q) => q.dimension === "vocabulary");
    const responses = allCorrect();
    responses[vocab[0].id] = (vocab[0].correctIndex! + 1) % 4;
    const result = scorePlacement(responses, NOW);
    expect(result.skillEvidence.find((e) => e.dimension === "vocabulary")!.status).toBe("partial");
    expect(result.estimatedStartingLevel).toBe("A1");
  });
});

describe("finalizePlacement", () => {
  beforeEach(() => {
    const data = new Map<string, string>();
    globalThis.window = globalThis as unknown as Window & typeof globalThis;
    globalThis.localStorage = {
      getItem: (k: string) => data.get(k) ?? null,
      setItem: (k: string, v: string) => void data.set(k, v),
      removeItem: (k: string) => void data.delete(k),
      clear: () => data.clear(),
      key: () => null,
      length: 0,
    };
  });

  it("is idempotent: a finalized attempt is never re-scored", async () => {
    const store = await import("@/application/learner-store");
    store.createLearner("Test", "", "en");

    const first = store.finalizePlacement(allCorrect())!;
    const second = store.finalizePlacement({})!;

    expect(store.getPlacementAttempts()).toHaveLength(1);
    expect(second.estimatedStartingLevel).toBe(first.estimatedStartingLevel);
    expect(second.skillEvidence).toEqual(first.skillEvidence);
  });
});
