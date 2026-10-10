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
    <header className="sticky top-0 z-50 border-b border-ink-100/70 bg-surface/85 backdrop-blur-md">
      <div className="max-w-wide mx-auto px-6 h-16 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="font-serif text-[1.35rem] tracking-tight text-ink-950 hover:text-ink-700 transition-colors duration-200"
        >
          Bonjour
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5" aria-label="Main">
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
                onClick={() => switchLocale(code)}
                className={cn(
                  "px-2.5 py-1 text-[0.7rem] font-semibold rounded-md transition-all duration-150",
                  locale === code
                    ? "bg-surface-elevated text-ink-950 shadow-soft"
                    : "text-ink-400 hover:text-ink-700"
                )}
                aria-label={localeShortNames[code]}
                aria-current={locale === code ? "true" : undefined}
              >
                {localeShortNames[code]}
              </button>
            ))}
          </div>

          <Link
            href="/sign-in"
            className="text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors duration-200 hidden sm:inline"
          >
            {t("signIn")}
          </Link>

          <Link
            href="/onboarding"
            className="inline-flex items-center h-9 px-4 rounded-lg bg-ink-950 text-surface text-sm font-medium transition-all duration-200 hover:bg-ink-800 focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            {t("getStarted")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
