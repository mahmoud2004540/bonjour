/**
 * Local-only product events (blueprint analytics placeholder).
 * Stored on device — no third-party tracker until a real privacy policy exists.
 */

export interface LocalEvent {
  name: string;
  at: string;
  meta?: Record<string, string>;
}

const KEY = "bonjour_events_v1";
const MAX = 200;

export function trackEvent(name: string, meta?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    const list: LocalEvent[] = raw ? JSON.parse(raw) : [];
    list.unshift({ name, at: new Date().toISOString(), meta });
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX)));
  } catch {
    // ignore quota / private mode
  }
}

export function getLocalEvents(): LocalEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as LocalEvent[]) : [];
  } catch {
    return [];
  }
}
