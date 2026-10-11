"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { locales, localeShortNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-surface/90 backdrop-blur-lg">
      <div className="max-w-wide mx-auto px-6 h-16 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-ink-950 hover:text-ink-800 transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-ink-950 text-surface font-serif text-sm tracking-tight group-hover:bg-accent-600 transition-colors duration-200">
            B
          </span>
          <span className="font-serif text-[1.3rem] tracking-tight">Bonjour</span>
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5" aria-label="Main">
          <Link
            href="/scenarios"
            className="text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors hidden lg:inline"
          >
            {t("scenarios")}
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors hidden md:inline"
          >
            {t("resources")}
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors hidden md:inline"
          >
            {t("about")}
          </Link>

          <div
            className="flex items-center gap-0.5 rounded-lg bg-ink-50 p-0.5"
            role="group"
            aria-label="Language"
          >
            {locales.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => switchLocale(code)}
                className={cn(
                  "px-2.5 py-1 text-[0.7rem] font-semibold rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
                  locale === code
                    ? "bg-surface-elevated text-ink-950 shadow-soft"
                    : "text-ink-400 hover:text-ink-700"
                )}
                aria-label={localeShortNames[code]}
                aria-pressed={locale === code}
                aria-current={locale === code ? "true" : undefined}
              >
                {localeShortNames[code]}
              </button>
            ))}
          </div>

          <Link
            href="/onboarding"
            className="inline-flex items-center h-9 px-4 rounded-lg bg-accent-600 text-white text-sm font-medium transition-all duration-200 hover:bg-accent-700 focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            {t("getStarted")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
