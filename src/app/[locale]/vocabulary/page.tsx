"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  getDueVocab,
  getAllVocab,
  reviewVocab,
  addCustomVocab,
  ensureSeedVocab,
} from "@/application/vocab-store";
import { recordStudyActivity } from "@/application/motivation-store";
import type { VocabItem } from "@/domain/types";
import type { Locale } from "@/i18n/config";

export default function VocabularyPage() {
  const t = useTranslations("vocabulary");
  const locale = useLocale() as Locale;
  const [due, setDue] = useState<VocabItem[]>([]);
  const [all, setAll] = useState<VocabItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [term, setTerm] = useState("");
  const [translation, setTranslation] = useState("");

  function refresh() {
    ensureSeedVocab();
    setDue(getDueVocab(12));
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

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      {item ? (
        <Card className="mb-10">
          <p className="text-caption text-ink-400 mb-2">
            {t("reviewProgress", { current: current + 1, total: due.length })}
          </p>
          <p className="text-title-sm font-serif text-ink-950 mb-4">{item.term}</p>
          {item.example && (
            <p className="text-body-sm text-ink-500 mb-4 italic">{item.example}</p>
          )}
          {!revealed ? (
            <Button variant="secondary" onClick={() => setRevealed(true)}>
              {t("reveal")}
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-body text-ink-800">{item.translation[locale]}</p>
              <div className="flex flex-wrap gap-3">
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
          <p className="text-body text-ink-600">{t("caughtUp")}</p>
        </Card>
      )}

      <Card className="mb-10">
        <h2 className="text-body font-medium text-ink-900 mb-3">{t("addTitle")}</h2>
        <div className="space-y-3">
          <input
            className="input-field"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder={t("termPlaceholder")}
          />
          <input
            className="input-field"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            placeholder={t("translationPlaceholder")}
          />
          <Button variant="secondary" onClick={addWord}>
            {t("add")}
          </Button>
        </div>
      </Card>

      <Card className="mb-8">
        <h2 className="text-caption text-ink-400 mb-3">{t("allTitle", { count: all.length })}</h2>
        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {all.map((v) => (
            <li key={v.id} className="text-body-sm text-ink-700 flex justify-between gap-2">
              <span>{v.term}</span>
              <span className="text-caption text-ink-400">{v.status}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Link href="/dashboard">
        <Button variant="ghost">{t("back")}</Button>
      </Link>
    </div>
  );
}
