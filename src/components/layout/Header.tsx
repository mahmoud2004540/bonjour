"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { clsx } from "clsx";

const locales = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "عر" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-surface/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink-950 hover:text-ink-700 transition-colors"
        >
          Bonjour
        </Link>

        <nav className="flex items-center gap-6">
          {/* Language switcher */}
          <div className="flex items-center gap-1 rounded-lg bg-ink-50 p-1">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={clsx(
                  "px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-150",
                  locale === l.code
                    ? "bg-surface text-ink-950 shadow-soft"
                    : "text-ink-500 hover:text-ink-800"
                )}
                aria-label={`Switch to ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Link
            href="/sign-in"
            className="text-sm font-medium text-ink-600 hover:text-ink-950 transition-colors hidden sm:inline"
          >
            {t("signIn")}
          </Link>

          <Link
            href="/onboarding"
            className="inline-flex items-center h-9 px-4 rounded-lg bg-ink-950 text-surface text-sm font-medium transition-all duration-200 hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            {t("getStarted")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
