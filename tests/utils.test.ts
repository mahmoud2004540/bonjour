import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("keeps the text color when a custom font size follows it", () => {
    expect(cn("bg-accent-600 text-white", "text-body-lg")).toBe("bg-accent-600 text-white text-body-lg");
  });

  it("still lets a later text color override an earlier one", () => {
    expect(cn("text-white", "text-ink-900")).toBe("text-ink-900");
  });
});
