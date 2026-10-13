"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  getDueVocab,
  getAllVocab,
  getVocabByLevel,
  reviewVocab,
  addCustomVocab,
  ensureSeedVocab,
} from "@/application/vocab-store";
import { recordStudyActivity } from "@/application/motivation-store";
import type { VocabItem } from "@/domain/types";
import type { Locale } from "@/i18n/config";

const LEVELS = ["A1", "A2", "B1", "B2"] as const;

export default function VocabularyPage() {
  const t = useTranslations("vocabulary");
  const locale = useLocale() as Locale;
  const [due, setDue] = useState<VocabItem[]>([]);
  const [all, setAll] = useState<VocabItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [term, setTerm] = useState("");
  const [translation, setTranslation] = useState("");
  const [filter, setFilter] = useState<string>("all");

  function refresh() {
    ensureSeedVocab();
    setDue(getDueVocab(40));
    setAll(getAllVocab());
    setCurrent(0);
    setRevealed(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  const item = due[current];

  function answer(ok: boolean) {
    if (!item) return;
    reviewVocab(item.id, ok);
    recordStudyActivity(ok ? 8 : 3);
    setRevealed(false);
    if (current + 1 < due.length) setCurrent(current + 1);
    else refresh();
  }

  function addWord() {
    if (!term.trim() || !translation.trim()) return;
    addCustomVocab(term, translation, locale);
    setTerm("");
    setTranslation("");
    refresh();
  }

  const levelCounts = LEVELS.map((lv) => ({
    lv,
    n: getVocabByLevel(lv).length,
  }));

  const browse =
    filter === "all"
      ? all.slice(0, 80)
      : getVocabByLevel(filter).slice(0, 80);

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-4 text-pretty">{t("subtitle")}</p>

      <Card className="mb-6">
        <p className="text-body-sm text-ink-700 mb-2">
          {locale === "ar"
            ? `إجمالي الكلمات في بنك الحفظ: ${all.length}`
            : `Total words in bank: ${all.length}`}
        </p>
        <div className="flex flex-wrap gap-2 text-caption text-ink-600">
          {levelCounts.map(({ lv, n }) => (
            <button
              key={lv}
              type="button"
              onClick={() => setFilter(lv)}
              className={`px-3 py-1 rounded-full border ${
                filter === lv
                  ? "border-accent-500 bg-accent-50"
                  : "border-ink-100"
              }`}
            >
              {lv}: {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-full border ${
              filter === "all"
                ? "border-accent-500 bg-accent-50"
                : "border-ink-100"
            }`}
          >
            {locale === "ar" ? "الكل" : "All"}
          </button>
        </div>
      </Card>

      {item ? (
        <Card className="mb-10">
          <p className="text-caption text-ink-400 mb-2">
            {t("reviewProgress", { current: current + 1, total: due.length })}
          </p>
          <p className="text-title-sm font-serif text-ink-950 mb-4" dir="ltr">
            {item.term}
          </p>
          {item.example && (
            <p className="text-body-sm text-ink-500 mb-4 italic" dir="ltr">
              {item.example}
            </p>
          )}
          {!revealed ? (
            <Button variant="secondary" onClick={() => setRevealed(true)}>
              {t("reveal")}
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-body text-ink-800">
                {item.translation[locale]}
              </p>
              <div className="flex gap-3">
                <Button variant="accent" onClick={() => answer(true)}>
                  {t("knew")}
                </Button>
                <Button variant="secondary" onClick={() => answer(false)}>
                  {t("forgot")}
                </Button>
              </div>
            </div>
          )}
        </Card>
      ) : (
        <Card className="mb-10">
          <p className="text-body text-ink-600">
            {locale === "ar"
              ? "مفيش كلمات مستحقة للمراجعة دلوقتي — تصفّح البنك تحت أو أضف كلمة."
              : "No words due right now — browse the bank below or add a word."}
          </p>
        </Card>
      )}

      <Card className="mb-10">
        <h2 className="text-title-sm font-serif mb-3">
          {locale === "ar" ? "تصفح كلمات المستوى" : "Browse level words"}
        </h2>
        <ul className="space-y-2 max-h-80 overflow-y-auto">
          {browse.map((v) => (
            <li
              key={v.id}
              className="flex justify-between gap-3 text-body-sm border-b border-ink-50 py-2"
            >
              <span dir="ltr" className="font-medium text-ink-900">
                {v.term}
              </span>
              <span className="text-ink-500 text-end">
                {v.translation[locale]}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="mb-8">
        <h2 className="text-title-sm font-serif mb-3">{t("addTitle")}</h2>
        <div className="flex flex-col sm:flex-row gap-2 mb-2">
          <input
            className="input-field"
            placeholder={t("termPlaceholder")}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            dir="ltr"
          />
          <input
            className="input-field"
            placeholder={t("translationPlaceholder")}
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
          <Button variant="secondary" onClick={addWord}>
            {t("add")}
          </Button>
        </div>
      </Card>

      <Link href="/teacher/vocab">
        <Button variant="accent">
          {locale === "ar" ? "جلسات حفظ (مع المدرس)" : "Teacher vocab packs"}
        </Button>
      </Link>
    </div>
  );
}
