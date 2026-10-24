/** Where the static site is served (GitHub Pages project path). */
export const BASE_PATH = "/bonjour";

/** Absolute URL of a page on this site, for links sent by email. */
export function siteUrl(locale: string, path: string): string {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  return `${origin}${BASE_PATH}/${locale}${path}`;
}
