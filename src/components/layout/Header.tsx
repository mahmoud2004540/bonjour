"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { locales, localeShortNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const LEARN_LINKS: {
  href: string;
  key: string;
  label: Record<Locale, string>;
}[] = [
  {
    href: "/dashboard",
    key: "home",
    label: { ar: "لوحتي", en: "Dashboard", fr: "Tableau" },
  },
  {
    href: "/path",
    key: "path",
    label: { ar: "مسار الدروس", en: "Learning path", fr: "Parcours" },
  },
  {
    href: "/practice-lab",
    key: "practice",
    label: { ar: "تدريب مكثف", en: "Practice lab", fr: "Pratique" },
  },
  {
    href: "/vocabulary",
    key: "words",
    label: { ar: "حفظ الكلمات", en: "Vocabulary", fr: "Vocabulaire" },
  },
  {
    href: "/speech",
    key: "speech",
    label: { ar: "النطق", en: "Pronunciation", fr: "Prononciation" },
  },
  {
    href: "/listening",
    key: "listen",
    label: { ar: "الاستماع", en: "Listening", fr: "Écoute" },
  },
  {
    href: "/teacher",
    key: "teacher",
    label: { ar: "مع المدرس", en: "With teacher", fr: "Avec prof" },
  },
  {
    href: "/exam",
    key: "exam",
    label: { ar: "محاكاة امتحان", en: "Mock exam", fr: "Examen blanc" },
  },
];

const MARKETING_LINKS: {
  href: string;
  labelKey: "about" | "scenarios";
}[] = [
  { href: "/about", labelKey: "about" },
  { href: "/scenarios", labelKey: "scenarios" },
];

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

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

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
    setOpen(false);
  }

  const menuLabel = t("menu");
  const closeLabel = t("close");

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink-200/90 bg-surface/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(36,34,29,0.06)]">
      <div className="max-w-wide mx-auto px-4 sm:px-6 h-[4.25rem] flex items-center justify-between gap-3">
        {/* Burger — mobile */}
        <button
          type="button"
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink-200 bg-white text-ink-950 shadow-[0_3px_0_#e8e4dc] active:translate-y-[1px] active:shadow-[0_1px_0_#e8e4dc]"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? closeLabel : menuLabel}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? closeLabel : menuLabel}</span>
          <span className="flex flex-col gap-1.5 w-5" aria-hidden>
            <span
              className={cn(
                "block h-0.5 w-full bg-ink-950 rounded transition-transform origin-center",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-ink-950 rounded transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-ink-950 rounded transition-transform origin-center",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </span>
        </button>

        <Link
          href={inApp ? "/dashboard" : "/"}
          className="group flex items-center gap-2.5 text-ink-950 hover:text-ink-800 transition-colors shrink-0"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink-950 text-surface font-serif text-base tracking-tight shadow-[0_4px_0_#1a1814] group-hover:bg-accent-600 group-hover:shadow-[0_4px_0_#9a3d2c] transition-all duration-200">
            B
          </span>
          <span className="font-serif text-[1.35rem] tracking-tight">
            Bonjour
          </span>
        </Link>

        {/* Desktop nav */}
        {inApp ? (
          <nav
            className="hidden md:flex items-center gap-1 rounded-2xl bg-ink-50 p-1 border border-ink-100"
            aria-label="Learn"
          >
            {LEARN_LINKS.filter((l) =>
              ["/path", "/practice-lab", "/vocabulary", "/exam"].includes(
                l.href
              )
            ).map((link) => {
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
                  {link.label[locale]}
                </Link>
              );
            })}
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-5" aria-label="Main">
            {MARKETING_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink-500 hover:text-ink-900"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="hidden sm:flex items-center gap-0.5 rounded-xl bg-ink-50 p-1 border border-ink-100"
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
            className="hidden sm:inline-flex items-center h-11 px-4 sm:px-5 rounded-xl bg-accent-600 text-white text-sm font-bold shadow-[0_4px_0_#9a3d2c] hover:bg-accent-700 transition-all"
          >
            {inApp ? t("myDashboard") : t("getStarted")}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-ink-950/40 md:hidden"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
          />
          <div
            id="site-menu"
            className="absolute inset-x-0 top-full z-50 border-b-2 border-ink-200 bg-white shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={menuLabel}
          >
            <div className="max-w-wide mx-auto px-4 py-4 space-y-1">
              <p className="text-caption font-bold text-ink-400 px-3 mb-2">
                {inApp ? t("learnSections") : t("menu")}
              </p>

              {(inApp ? LEARN_LINKS : MARKETING_LINKS.map((m) => ({
                  href: m.href,
                  key: m.labelKey,
                  label: {
                    ar: t(m.labelKey),
                    en: t(m.labelKey),
                    fr: t(m.labelKey),
                  } as Record<Locale, string>,
                }))).map((link) => {
                const active =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3.5 text-body font-bold transition-colors",
                      active
                        ? "bg-ink-950 text-white"
                        : "text-ink-800 hover:bg-ink-50"
                    )}
                  >
                    {link.label[locale]}
                  </Link>
                );
              })}

              {!inApp && (
                <Link
                  href="/onboarding"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 text-body font-bold bg-accent-600 text-white text-center mt-2"
                >
                  {t("getStarted")}
                </Link>
              )}

              <div className="pt-3 mt-2 border-t border-ink-100">
                <p className="text-caption font-bold text-ink-400 px-3 mb-2">
                  {t("interfaceLanguage")}
                </p>
                <div className="flex gap-2 px-2">
                  {locales.map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => switchLocale(code)}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-sm font-bold border-2",
                        locale === code
                          ? "bg-ink-950 text-white border-ink-950"
                          : "bg-white text-ink-700 border-ink-200"
                      )}
                    >
                      {localeShortNames[code]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
