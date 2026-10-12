"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllModules } from "@/domain/university/modules";
import type { Locale } from "@/i18n/config";

const TRACK_LABEL: Record<
  string,
  { en: string; fr: string; ar: string }
> = {
  grammar: { en: "Grammar", fr: "Grammaire", ar: "قواعد" },
  phonetics: { en: "Phonetics", fr: "Phonétique", ar: "صوتيات" },
  civilization: { en: "Civilization", fr: "Civilisation", ar: "حضارة" },
  writing: { en: "Writing", fr: "Écriture", ar: "كتابة" },
  oral: { en: "Speaking", fr: "Oral", ar: "شفهي" },
  lexique: { en: "Lexicon", fr: "Lexique", ar: "معجم" },
};

export default function AcademyPage() {
  const t = useTranslations("academy");
  const locale = useLocale() as Locale;
  const modules = getAllModules();

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20 scene-3d">
      <p className="text-overline text-accent-700 mb-2">{t("eyebrow")}</p>
      <h1 className="text-title font-serif text-ink-950 mb-3 text-balance">
        {t("title")}
      </h1>
      <p className="text-body text-ink-600 mb-4 text-pretty max-w-2xl">
        {t("subtitle")}
      </p>
      <p className="text-body-sm text-ink-500 mb-10 text-pretty max-w-2xl">
        {t("onsiteNote")}
      </p>

      <div className="grid gap-5 mb-12">
        {modules.map((m) => (
          <Card key={m.id} className="layer-stack">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-caption px-2 py-0.5 rounded-lg bg-ink-100 text-ink-700">
                {m.level}
              </span>
              <span className="text-caption text-accent-700">
                {TRACK_LABEL[m.track]?.[locale] ?? m.track}
              </span>
            </div>
            <h2 className="text-title-sm font-serif text-ink-950 mb-2">
              {m.title[locale]}
            </h2>
            <p className="text-body text-ink-700 mb-4 text-pretty">
              {m.summary[locale]}
            </p>
            <ul className="space-y-1.5 mb-5">
              {m.outcomes[locale].map((o, i) => (
                <li key={i} className="text-body-sm text-ink-800 flex gap-2">
                  <span className="text-accent-600">✓</span>
                  {o}
                </li>
              ))}
            </ul>
            <div className="space-y-4 border-t border-ink-100 pt-4">
              {m.blocks.map((b, i) => (
                <div key={i}>
                  <p className="text-caption text-ink-500 mb-1">
                    {b.heading[locale]}
                  </p>
                  <p className="text-body-sm text-ink-800 text-pretty">
                    {b.body[locale]}
                  </p>
                </div>
              ))}
            </div>
            {m.relatedUnitIds.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {m.relatedUnitIds.map((id) => (
                  <Link key={id} href={`/lesson/${id}`}>
                    <Button variant="secondary">{t("openUnit")}</Button>
                  </Link>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/dashboard">
          <Button variant="accent">{t("toLessons")}</Button>
        </Link>
        <Link href="/grammar">
          <Button variant="secondary">{t("toGrammar")}</Button>
        </Link>
      </div>
    </div>
  );
}
