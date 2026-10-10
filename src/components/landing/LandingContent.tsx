"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function LandingContent() {
  const t = useTranslations("landing");
  const tNav = useTranslations("nav");

  return (
    <div className="relative">
      {/* Hero */}
      <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32 max-w-5xl mx-auto">
        <p className="text-caption font-medium tracking-wide text-accent-600 uppercase mb-6">
          {t("eyebrow")}
        </p>

        <h1 className="text-display md:text-display-lg font-serif text-ink-950 text-balance max-w-3xl mb-6">
          {t("headline")}
        </h1>

        <p className="text-body-lg text-ink-600 max-w-2xl mb-10 leading-relaxed">
          {t("subheadline")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center h-12 px-7 rounded-xl bg-ink-950 text-surface font-medium text-body transition-all duration-200 hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            {t("ctaPrimary")}
          </Link>

          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center h-12 px-7 rounded-xl border border-ink-200 text-ink-800 font-medium text-body transition-all duration-200 hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            {t("ctaSecondary")}
          </Link>
        </div>
      </section>

      {/* Difference */}
      <section className="px-6 py-20 bg-ink-50/60 border-y border-ink-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-title font-serif text-ink-950 mb-4">
            {t("differenceTitle")}
          </h2>
          <p className="text-body-lg text-ink-600 max-w-2xl leading-relaxed">
            {t("differenceBody")}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-title font-serif text-ink-950 mb-12">
            {t("howTitle")}
          </h2>

          <ol className="space-y-6 max-w-xl">
            {[1, 2, 3, 4, 5].map((step) => (
              <li key={step} className="flex gap-5 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ink-950 text-surface text-sm font-medium flex items-center justify-center">
                  {step}
                </span>
                <p className="text-body text-ink-700 pt-1">
                  {t(`howStep${step}` as any)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-20 border-t border-ink-100">
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-accent-600 text-white font-medium text-body transition-all duration-200 hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            {tNav("getStarted")}
          </Link>
        </div>
      </section>
    </div>
  );
}
