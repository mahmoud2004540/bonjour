import { describe, expect, it } from "vitest";
import { canTransition, isVisibleToLearners } from "@/domain/content/lifecycle";
import {
  getAllGoals,
  getPublishedScenarios,
  validateCurriculumIntegrity,
} from "@/domain/curriculum/registry";
import { getNextRecommendations } from "@/domain/learning/recommendation";
import type { LearnerProfile } from "@/domain/types";

function learner(overrides: Partial<LearnerProfile> = {}): LearnerProfile {
  return {
    id: "t",
    displayName: "Test",
    email: "",
    createdAt: "2026-01-01T00:00:00.000Z",
    locale: "en",
    preferences: { objectives: [], situations: [], availability: "", preferredStyle: "" },
    placementCompleted: true,
    estimatedStartingLevel: "A1",
    skillEvidence: [],
    completedGoals: [],
    currentPriorities: [],
    ...overrides,
  };
}

describe("content lifecycle", () => {
  it("only published content is learner-visible", () => {
    expect(isVisibleToLearners("published")).toBe(true);
    for (const s of ["draft", "review", "approved", "retired"] as const) {
      expect(isVisibleToLearners(s)).toBe(false);
    }
  });

  it("cannot skip review or revive retired content", () => {
    expect(canTransition("draft", "published")).toBe(false);
    expect(canTransition("approved", "published")).toBe(true);
    expect(canTransition("retired", "draft")).toBe(false);
  });
});

describe("curriculum", () => {
  it("has no dangling prerequisites or tasks", () => {
    expect(validateCurriculumIntegrity()).toEqual([]);
  });

  it("only exposes published scenarios", () => {
    expect(getPublishedScenarios().every((s) => s.status === "published")).toBe(true);
  });
});

describe("recommendations", () => {
  it("never recommends a goal whose prerequisites are unmet or already completed", () => {
    const done = getAllGoals()[0].id;
    const recs = getNextRecommendations(learner({ completedGoals: [done] }));
    const byId = new Map(getAllGoals().map((g) => [g.id, g]));
    for (const r of recs) {
      expect(r.goalId).not.toBe(done);
      expect(byId.get(r.goalId)!.prerequisites.every((p) => p === done)).toBe(true);
    }
  });

  it("explains every recommendation in all interface languages", () => {
    for (const r of getNextRecommendations(learner())) {
      expect(r.reason.en && r.reason.fr && r.reason.ar).toBeTruthy();
    }
  });
});

describe("materials in French", () => {
  it("every material has a French note and every term a French gloss", async () => {
    const { MATERIALS } = await import("@/domain/resources/materials");
    const { NOTE_FR, GLOSS_FR } = await import("@/domain/resources/materials-fr");
    expect(MATERIALS.filter((m) => !NOTE_FR[m.id]).map((m) => m.id)).toEqual([]);
    const terms = MATERIALS.flatMap((m) => (m.vocabulary ?? []).map((v) => v.fr));
    expect(terms.filter((t) => !GLOSS_FR[t])).toEqual([]);
  });
});
