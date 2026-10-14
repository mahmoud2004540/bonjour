"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

const ITEMS: {
  href: string;
  label: Record<Locale, string>;
  icon: string;
  match: string[];
}[] = [
  {
    href: "/dashboard",
    label: { ar: "الرئيسية", en: "Home", fr: "Accueil" },
    icon: "⌂",
    match: ["/dashboard"],
  },
  {
    href: "/path",
    label: { ar: "المسار", en: "Path", fr: "Parcours" },
    icon: "◎",
    match: ["/path", "/lesson"],
  },
  {
    href: "/practice-lab",
    label: { ar: "تدريب", en: "Practice", fr: "Pratique" },
    icon: "✦",
    match: ["/practice-lab", "/speech", "/listening"],
  },
  {
    href: "/vocabulary",
    label: { ar: "كلمات", en: "Words", fr: "Mots" },
    icon: "あ",
    match: ["/vocabulary", "/teacher"],
  },
  {
    href: "/exam",
    label: { ar: "امتحان", en: "Exam", fr: "Examen" },
    icon: "✓",
    match: ["/exam"],
  },
];

export function LearnerNav() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  // Hide on marketing / onboarding
  if (
    pathname === "/" ||
    pathname.startsWith("/onboarding") ||
    pathname.startsWith("/placement") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/privacy") ||
    pathname.startsWith("/sign-in")
  ) {
    return null;
  }

  return (
    <nav
      className="learner-nav fixed bottom-0 inset-x-0 z-50 md:hidden"
      aria-label={locale === "ar" ? "تنقل التعلم" : "Learning navigation"}
    >
      <div className="learner-nav-inner mx-auto max-w-lg px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <ul className="flex items-stretch justify-between gap-0.5 rounded-2xl bg-ink-950 text-white shadow-2xl border border-ink-800 px-1 py-1.5">
          {ITEMS.map((item) => {
            const active = item.match.some(
              (m) => pathname === m || pathname.startsWith(m + "/")
            );
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl text-center transition-colors min-h-[3.25rem]",
                    active
                      ? "bg-accent-600 text-white"
                      : "text-ink-300 hover:text-white hover:bg-ink-800"
                  )}
                >
                  <span className="text-base leading-none" aria-hidden>
                    {item.icon}
                  </span>
                  <span className="text-[0.65rem] font-semibold leading-tight">
                    {item.label[locale] ?? item.label.en}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
