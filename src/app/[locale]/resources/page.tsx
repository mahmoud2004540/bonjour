"use client";

import { useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  MATERIALS,
  MATERIAL_LEVELS,
  type MaterialItem,
} from "@/domain/resources/materials";
import type { CefrLevel } from "@/domain/types";
import type { Locale } from "@/i18n/config";

function speakFrench(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

/** Resources page — 100% on-site. No external <a href>. */
export default function ResourcesPage() {
  const t = useTranslations("resources");
  const locale = useLocale() as Locale;
  const [level, setLevel] = useState<CefrLevel>("A1");
  const [activeId, setActiveId] = useState<string | null>(null);

  const list = useMemo(
    () => MATERIALS.filter((m) => m.level === level),
    [level]
  );

  const active = activeId
    ? (MATERIALS.find((m) => m.id === activeId) ?? null)
    : (list[0] ?? null);

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-3 text-pretty">{t("subtitle")}</p>
      <p className="text-caption text-ink-400 mb-8">{t("inAppNote")}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {MATERIAL_LEVELS.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => {
              setLevel(l);
              setActiveId(null);
            }}
            className={`px-3 py-1.5 rounded-full text-caption transition-colors duration-200 ${
              level === l
                ? "bg-ink-950 text-white"
                : "bg-ink-100 text-ink-600 hover:bg-ink-200"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 mb-12">
        <div className="space-y-2">
          {list.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveId(m.id)}
              className={`w-full text-start px-4 py-3 rounded-xl border transition-colors duration-200 ${
                (active?.id ?? "") === m.id
                  ? "border-ink-950 bg-ink-50"
                  : "border-ink-100 hover:border-ink-200"
              }`}
            >
              <span className="text-body-sm font-medium text-ink-900">
                {m.title[locale]}
              </span>
              <span className="block text-caption text-ink-400 mt-0.5">
                {m.kind}
              </span>
            </button>
          ))}
          {list.length === 0 && (
            <p className="text-body text-ink-500">{t("empty")}</p>
          )}
        </div>

        <div>
          {active ? (
            <MaterialView key={active.id} item={active} locale={locale} t={t} />
          ) : (
            <Card>
              <p className="text-body text-ink-500">{t("pick")}</p>
            </Card>
          )}
        </div>
      </div>

      <Link href="/dashboard">
        <Button variant="secondary">{t("back")}</Button>
      </Link>
    </div>
  );
}

function MaterialView({
  item,
  locale,
  t,
}: {
  item: MaterialItem;
  locale: Locale;
  t: ReturnType<typeof useTranslations>;
}) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<"idle" | "ok" | "no">("idle");

  const support = locale === "ar" ? item.bodyAr : item.bodyEn;

  function check() {
    if (!item.exercise) return;
    const norm = answer.trim().toLowerCase();
    const ok = item.exercise.answers.some(
      (a) => norm === a || norm.includes(a)
    );
    setResult(ok ? "ok" : "no");
  }

  return (
    <Card>
      <h2 className="text-title-sm font-serif text-ink-950 mb-1">
        {item.title[locale]}
      </h2>
      <p className="text-caption text-ink-400 mb-5">
        {item.level} · {item.kind}
      </p>

      <div className="bg-ink-50 rounded-xl p-5 mb-4">
        <p className="text-body text-ink-900 whitespace-pre-line leading-relaxed">
          {item.bodyFr}
        </p>
      </div>

      <p className="text-body-sm text-ink-600 mb-4 text-pretty">{support}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => speakFrench(item.bodyFr)}
        >
          {t("listen")}
        </Button>
        <span className="text-caption text-ink-400 self-center">
          {t("ttsNote")}
        </span>
      </div>

      {item.vocabulary && item.vocabulary.length > 0 && (
        <div className="mb-6">
          <h3 className="text-caption text-ink-400 mb-3">{t("vocab")}</h3>
          <ul className="space-y-2">
            {item.vocabulary.map((v) => (
              <li
                key={v.fr}
                className="flex flex-wrap gap-x-3 gap-y-1 text-body-sm border-b border-ink-50 pb-2"
              >
                <span className="font-medium text-ink-900 min-w-[7rem]">
                  {v.fr}
                </span>
                <span className="text-ink-600">
                  {locale === "ar" ? v.ar : v.en}
                </span>
                <button
                  type="button"
                  className="text-caption text-accent-700 hover:underline"
                  onClick={() => speakFrench(v.fr)}
                >
                  {t("listenWord")}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.exercise && (
        <div className="border-t border-ink-100 pt-5">
          <p className="text-body text-ink-800 mb-3">
            {locale === "fr"
              ? item.exercise.promptFr
              : locale === "ar"
                ? item.exercise.promptAr
                : item.exercise.promptEn}
          </p>
          <input
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              setResult("idle");
            }}
            className="w-full px-4 py-3 rounded-xl border border-ink-200 mb-3 text-body focus:outline-none focus:ring-2 focus:ring-accent-500"
            placeholder={t("answerPlaceholder")}
          />
          <Button type="button" size="sm" onClick={check}>
            {t("check")}
          </Button>
          {result === "ok" && (
            <p className="text-body-sm text-success-700 mt-3">{t("correct")}</p>
          )}
          {result === "no" && (
            <p className="text-body-sm text-ink-600 mt-3">{t("tryAgain")}</p>
          )}
        </div>
      )}
    </Card>
  );
}
