"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { locales, localeShortNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const LEARN_LINKS: {
  href: string;
  key: "path" | "practice" | "words" | "exam";
}[] = [
  { href: "/path", key: "path" },
  { href: "/practice-lab", key: "practice" },
  { href: "/vocabulary", key: "words" },
  { href: "/exam", key: "exam" },
];

const LABELS: Record<
  "path" | "practice" | "words" | "exam",
  Record<Locale, string>
> = {
  path: { ar: "المسار", en: "Path", fr: "Parcours" },
  practice: { ar: "تدريب", en: "Practice", fr: "Pratique" },
  words: { ar: "كلمات", en: "Words", fr: "Mots" },
  exam: { ar: "امتحان", en: "Exam", fr: "Examen" },
};

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const inApp =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/path") ||
    pathname.startsWith("/lesson") ||
    pathname.startsWith("/practice") ||
    pathname.startsWith("/vocabulary") ||
    pathname.startsWith("/teacher") ||
    pathname.startsWith("/exam") ||
    pathname.startsWith("/speech") ||
    pathname.startsWith("/listening") ||
    pathname.startsWith("/progress");

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink-200/90 bg-surface/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(36,34,29,0.06)]">
      <div className="max-w-wide mx-auto px-4 sm:px-6 h-[4.25rem] flex items-center justify-between gap-3">
        <Link
          href={inApp ? "/dashboard" : "/"}
          className="group flex items-center gap-2.5 text-ink-950 hover:text-ink-800 transition-colors shrink-0"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink-950 text-surface font-serif text-base tracking-tight shadow-[0_4px_0_#1a1814] group-hover:bg-accent-600 group-hover:shadow-[0_4px_0_#9a3d2c] transition-all duration-200">
            B
          </span>
          <span className="font-serif text-[1.35rem] tracking-tight hidden xs:inline sm:inline">
            Bonjour
          </span>
        </Link>

        {inApp ? (
          <nav
            className="hidden md:flex items-center gap-1 rounded-2xl bg-ink-50 p-1 border border-ink-100"
            aria-label="Learn"
          >
            {LEARN_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-semibold rounded-xl transition-all",
                    active
                      ? "bg-ink-950 text-white shadow-md"
                      : "text-ink-600 hover:text-ink-950 hover:bg-white"
                  )}
                >
                  {LABELS[link.key][locale]}
                </Link>
              );
            })}
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-5" aria-label="Main">
            <Link
              href="/about"
              className="text-sm font-semibold text-ink-500 hover:text-ink-900"
            >
              {t("about")}
            </Link>
            <Link
              href="/scenarios"
              className="text-sm font-semibold text-ink-500 hover:text-ink-900"
            >
              {t("scenarios")}
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex items-center gap-0.5 rounded-xl bg-ink-50 p-1 border border-ink-100"
            role="group"
            aria-label="Language"
          >
            {locales.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => switchLocale(code)}
                className={cn(
                  "px-2.5 py-1.5 text-[0.7rem] font-bold rounded-lg transition-all",
                  locale === code
                    ? "bg-ink-950 text-white shadow-sm"
                    : "text-ink-500 hover:text-ink-900"
                )}
              >
                {localeShortNames[code]}
              </button>
            ))}
          </div>

          <Link
            href={inApp ? "/dashboard" : "/onboarding"}
            className="inline-flex items-center h-11 px-4 sm:px-5 rounded-xl bg-accent-600 text-white text-sm font-bold shadow-[0_4px_0_#9a3d2c] hover:bg-accent-700 hover:translate-y-[-1px] active:translate-y-[2px] active:shadow-[0_2px_0_#9a3d2c] transition-all"
          >
            {inApp
              ? locale === "ar"
                ? "لوحتي"
                : locale === "fr"
                  ? "Tableau"
                  : "Dashboard"
              : t("getStarted")}
          </Link>
        </div>
      </div>
    </header>
  );
}
