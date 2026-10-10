"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function LandingContent() {
  const t = useTranslations("landing");
  const tNav = useTranslations("nav");

  return (
    <div className="relative">
      <section className="px-6 pt-22 pb-26 md:pt-30 md:pb-32 max-w-wide mx-auto">
        <p className="text-overline text-accent-600 uppercase mb-5">
          {t("eyebrow")}
        </p>

        <h1 className="text-display md:text-display-xl font-serif text-ink-950 text-balance max-w-3xl mb-7">
          {t("headline")}
        </h1>

        <p className="text-body-lg text-ink-600 max-w-xl mb-6 leading-relaxed text-pretty">
          {t("subheadline")}
        </p>

        <p className="text-body text-ink-500 max-w-xl mb-12 text-pretty">
          {t("welcomeNote")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/onboarding" className="btn-primary h-12 px-8">
            {t("ctaPrimary")}
          </Link>
          <Link href="#how-it-works" className="btn-secondary h-12 px-8">
            {t("ctaSecondary")}
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 bg-accent-50/50 border-y border-accent-100/80">
        <div className="max-w-wide mx-auto grid sm:grid-cols-3 gap-8">
          {["feel1", "feel2", "feel3"].map((key) => (
            <div key={key}>
              <p className="text-body-lg font-serif text-ink-950 mb-2">
                {t(`${key}Title` as "feel1Title")}
              </p>
              <p className="text-body-sm text-ink-600 text-pretty">
                {t(`${key}Body` as "feel1Body")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-22 bg-ink-50/80 border-b border-ink-100">
        <div className="max-w-wide mx-auto">
          <h2 className="text-title font-serif text-ink-950 mb-4">
            {t("differenceTitle")}
          </h2>
          <p className="text-body-lg text-ink-600 max-w-2xl leading-relaxed text-pretty">
            {t("differenceBody")}
          </p>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-22 md:py-28">
        <div className="max-w-wide mx-auto">
          <h2 className="text-title font-serif text-ink-950 mb-4">
            {t("howTitle")}
          </h2>
          <p className="text-body text-ink-500 mb-14 max-w-lg">{t("howIntro")}</p>

          <ol className="space-y-7 max-w-md">
            {[1, 2, 3, 4, 5].map((step) => (
              <li key={step} className="flex gap-5 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ink-950 text-surface text-sm font-medium flex items-center justify-center tabular-nums">
                  {step}
                </span>
                <p className="text-body text-ink-700 pt-1">
                  {t(`howStep${step}` as "howStep1")}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-22 border-t border-ink-100 bg-gradient-to-b from-surface to-accent-50/30">
        <div className="max-w-wide mx-auto text-center">
          <p className="text-title-sm font-serif text-ink-950 mb-3">
            {t("footerTitle")}
          </p>
          <p className="text-body text-ink-600 mb-8 max-w-md mx-auto">
            {t("footerBody")}
          </p>
          <Link href="/onboarding" className="btn-accent h-12 px-10">
            {tNav("getStarted")}
          </Link>
        </div>
      </section>
    </div>
  );
}
