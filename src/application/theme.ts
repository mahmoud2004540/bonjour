/**
 * Theme preference (per device). "system" follows prefers-color-scheme.
 * The saved value is applied before first paint by an inline script in the
 * root layout, so there is no flash of the wrong theme.
 */

export type ThemePreference = "system" | "light" | "dark";

export const THEME_KEY = "bonjour_theme";

export function getThemePreference(): ThemePreference {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
}

export function setThemePreference(pref: ThemePreference): void {
  try {
    if (pref === "system") localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, pref);
  } catch {
    /* storage unavailable — still apply for this page view */
  }
  if (pref === "system") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = pref;
}

/** Inline, pre-paint version of the same logic (kept dependency-free). */
export const THEME_BOOT_SCRIPT = `try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
