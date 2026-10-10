/**
 * Central locale configuration.
 * To add a new language in the future:
 * 1. Add the locale code here
 * 2. Add a messages/{locale}.json file
 * 3. Add the direction if RTL
 * 4. Add the display label
 * That's all — routing and middleware pick it up automatically.
 */

export const locales = ["en", "fr", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "عر",
};

/** Locales that require right-to-left layout */
export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
