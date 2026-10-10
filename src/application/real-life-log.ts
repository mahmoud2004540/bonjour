/**
 * Real-life use log (blueprint: evidence of using French outside the app).
 * Learner self-reports only — no invented entries.
 */

export interface RealLifeEntry {
  id: string;
  note: string;
  situation: string;
  createdAt: string;
}

const KEY = "bonjour_real_life_v1";

export function getRealLifeEntries(): RealLifeEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw) as RealLifeEntry[];
  } catch {
    return [];
  }
}

export function addRealLifeEntry(note: string, situation: string): RealLifeEntry {
  const entry: RealLifeEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    note: note.trim(),
    situation: situation.trim(),
    createdAt: new Date().toISOString(),
  };
  const all = getRealLifeEntries();
  all.unshift(entry);
  localStorage.setItem(KEY, JSON.stringify(all));
  return entry;
}
