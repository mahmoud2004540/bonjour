"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function LandingContent() {
  const t = useTranslations("landing");
  const tNav = useTranslations("nav");

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -end-24 h-96 w-96 rounded-full bg-accent-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -start-16 h-72 w-72 rounded-full bg-ink-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 end-1/4 h-48 w-48 rounded-full bg-accent-200/25 blur-3xl"
      />

      <section className="relative px-6 pt-20 pb-20 md:pt-28 md:pb-28 max-w-wide mx-auto scene-3d">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-accent-200/80 bg-white/90 px-3 py-1 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-600 shadow-[0_0_8px_rgba(224,106,84,0.8)]" />
              <p className="text-overline text-accent-700 uppercase tracking-wider">
                {t("eyebrow")}
              </p>
            </div>

            <h1 className="text-display md:text-display-xl font-serif text-ink-950 text-balance mb-6">
              {t("headline")}
            </h1>

            <p className="text-body-lg text-ink-600 max-w-xl mb-4 leading-relaxed text-pretty">
              {t("subheadline")}
            </p>

            <p className="text-body text-ink-500 max-w-xl mb-10 text-pretty border-s-2 border-accent-400 ps-4">
              {t("welcomeNote")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/onboarding" className="btn-accent h-12 px-8">
                {t("ctaPrimary")}
              </Link>
              <Link href="#how-it-works" className="btn-secondary h-12 px-8">
                {t("ctaSecondary")}
              </Link>
            </div>

            <p className="text-caption text-ink-400">{t("trustLine")}</p>
          </div>

          {/* 3D stacked preview */}
          <div className="relative hero-3d-wrap px-2">
            <div className="relative float-3d">
              <div className="hero-3d-back" aria-hidden />
              <div className="hero-3d-mid" aria-hidden />
              <div className="hero-3d relative rounded-3xl border border-ink-100 bg-white overflow-hidden">
                <div className="px-5 py-3 border-b border-ink-50 flex items-center justify-between bg-gradient-to-b from-ink-25 to-white">
                  <span className="text-caption text-ink-500">{t("previewLabel")}</span>
                  <span className="text-overline text-accent-600 px-2 py-0.5 rounded-md bg-accent-50">
                    {t("previewLevel")}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-caption text-ink-400">{t("previewSituation")}</p>
                  <div className="space-y-3">
                    <div className="rounded-2xl rounded-ss-md bg-ink-50 px-4 py-3 text-body-sm text-ink-800 shadow-sm">
                      {t("previewLine1")}
                    </div>
                    <div className="rounded-2xl rounded-se-md bg-accent-50 border border-accent-100 px-4 py-3 text-body-sm text-ink-900 ms-6 shadow-md">
                      {t("previewLine2")}
                    </div>
                    <div className="rounded-2xl rounded-ss-md bg-ink-50 px-4 py-3 text-body-sm text-ink-800 shadow-sm">
                      {t("previewLine3")}
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-caption text-success-700 bg-success-50 px-2.5 py-1 rounded-lg shadow-sm">
                      {t("previewCanDo")}
                    </span>
                    <span className="text-caption text-ink-400">{t("previewHonest")}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-center font-serif text-title-sm text-ink-700 italic">
              {t("heroPhrase")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16 bg-ink-950 text-surface panel-3d relative z-10">
        <div className="max-w-wide mx-auto grid sm:grid-cols-3 gap-10 scene-3d">
          {["feel1", "feel2", "feel3"].map((key, i) => (
            <div
              key={key}
              className="relative rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:bg-white/10"
              style={{ transform: `translateZ(${i * 8}px)` }}
            >
              <span className="text-overline text-accent-400 mb-3 block">0{i + 1}</span>
              <p className="text-body-lg font-serif text-surface mb-2">
                {t(`${key}Title` as "feel1Title")}
              </p>
              <p className="text-body-sm text-ink-300 text-pretty">
                {t(`${key}Body` as "feel1Body")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 scene-3d">
        <div className="max-w-wide mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-title font-serif text-ink-950 mb-4">
              {t("differenceTitle")}
            </h2>
            <p className="text-body-lg text-ink-600 leading-relaxed text-pretty mb-6">
              {t("differenceBody")}
            </p>
            <ul className="space-y-3">
              {["diff1", "diff2", "diff3"].map((k) => (
                <li key={k} className="flex gap-3 text-body text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0 shadow-[0_0_6px_rgba(224,106,84,0.6)]" />
                  {t(k as "diff1")}
                </li>
              ))}
            </ul>
          </div>
          <div className="card card-3d layer-stack rounded-3xl p-8 md:p-10">
            <p className="text-overline text-ink-400 mb-4">{t("notLike")}</p>
            <p className="font-serif text-title-sm text-ink-900 mb-3 text-pretty">
              {t("notLikeBody")}
            </p>
            <p className="text-body-sm text-ink-500 text-pretty">{t("notLikeNote")}</p>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="px-6 py-20 md:py-24 bg-accent-50/50 border-y border-accent-100/60 scene-3d"
      >
        <div className="max-w-wide mx-auto">
          <h2 className="text-title font-serif text-ink-950 mb-3">{t("howTitle")}</h2>
          <p className="text-body text-ink-500 mb-12 max-w-lg">{t("howIntro")}</p>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[1, 2, 3, 4, 5].map((step) => (
              <li
                key={step}
                className="step-3d rounded-2xl border border-ink-100 bg-white p-5"
              >
                <span className="inline-flex w-9 h-9 rounded-full bg-ink-950 text-surface text-sm font-medium items-center justify-center tabular-nums mb-4 shadow-lg">
                  {step}
                </span>
                <p className="text-body-sm text-ink-800 leading-relaxed">
                  {t(`howStep${step}` as "howStep1")}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-22 md:py-28">
        <div className="max-w-content mx-auto text-center">
          <p className="font-serif text-display-sm text-ink-950 mb-4 text-balance">
            {t("footerTitle")}
          </p>
          <p className="text-body text-ink-600 mb-10 max-w-md mx-auto text-pretty">
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
