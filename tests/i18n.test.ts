import { describe, expect, it } from "vitest";
import en from "../messages/en.json";
import fr from "../messages/fr.json";
import ar from "../messages/ar.json";

function keys(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([k, v]) => {
    const path = prefix ? `${prefix}.${k}` : k;
    return v && typeof v === "object" ? keys(v as Record<string, unknown>, path) : [path];
  });
}

describe("locale messages", () => {
  const all = { en, fr, ar };
  const union = new Set(Object.values(all).flatMap((m) => keys(m)));

  for (const [locale, messages] of Object.entries(all)) {
    it(`${locale} has every key used by any locale`, () => {
      const own = new Set(keys(messages));
      expect([...union].filter((k) => !own.has(k))).toEqual([]);
    });
  }
});
