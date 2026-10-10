"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-ink-100 mt-auto">
      <div className="max-w-wide mx-auto px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
        <p className="font-serif text-ink-800">Bonjour</p>
        <nav className="flex flex-wrap gap-4 text-body-sm text-ink-500" aria-label="Footer">
          <Link href="/about" className="hover:text-ink-900 transition-colors">
            {t("about")}
          </Link>
          <Link href="/scenarios" className="hover:text-ink-900 transition-colors">
            {t("scenarios")}
          </Link>
          <Link href="/resources" className="hover:text-ink-900 transition-colors">
            {t("materials")}
          </Link>
          <Link href="/privacy" className="hover:text-ink-900 transition-colors">
            {t("privacy")}
          </Link>
          <Link href="/onboarding" className="hover:text-ink-900 transition-colors">
            {t("start")}
          </Link>
        </nav>
        <p className="text-caption text-ink-400">{t("tagline")}</p>
      </div>
    </footer>
  );
}
