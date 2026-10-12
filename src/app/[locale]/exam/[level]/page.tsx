"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getExamBlueprint } from "@/domain/exam/catalog";
import {
  getUnitsByLevel,
  isUnitComplete,
} from "@/domain/lessons/registry";
import { speakFrench, canSpeak } from "@/lib/speech";
import { getStoredProfile } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import type { Locale } from "@/i18n/config";

export default function ExamLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const t = useTranslations("exam");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [level, setLevel] = useState<string | null>(null);
  const [mockIdx, setMockIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [scoredCount, setScoredCount] = useState(0);
  const [done, setDone] = useState(false);
  const [writing, setWriting] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [tts, setTts] = useState(false);

  useEffect(() => {
    params.then((p) => setLevel(p.level));
  }, [params]);

  useEffect(() => {
    if (!getStoredProfile()) router.replace("/onboarding");
    setTts(canSpeak());
  }, [router]);

  const bp = useMemo(
    () => (level ? getExamBlueprint(level) : undefined),
    [level]
  );

  if (!level) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16">
        <div className="h-2 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  if (!bp) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="mb-4">{t("notFound")}</p>
        <Link href="/exam">
          <Button variant="secondary">{t("backHub")}</Button>
        </Link>
      </div>
    );
  }

  const profile = getStoredProfile();
  const units = getUnitsByLevel(bp.level);
  const unitsDone =
    profile && units.length > 0
      ? units.filter((u) => isUnitComplete(u, profile)).length
      : 0;
  const curriculumReady = units.length > 0 && unitsDone === units.length;

  const item = bp.mock[mockIdx];
  const isMcq = item?.options && typeof item.correctIndex === "number";

  function answerMcq(opt: number) {
    if (selected !== null || !item || item.correctIndex === undefined) return;
    setSelected(opt);
    const ok = opt === item.correctIndex;
    if (ok) setScore((s) => s + 1);
    setScoredCount((c) => c + 1);
    setTimeout(() => {
      setSelected(null);
      if (mockIdx + 1 < bp!.mock.length) setMockIdx(mockIdx + 1);
      else {
        recordStudyActivity(20);
        setDone(true);
      }
    }, 500);
  }

  function nextOpen() {
    setShowHint(false);
    setWriting("");
    if (mockIdx + 1 < bp.mock.length) setMockIdx(mockIdx + 1);
    else {
      recordStudyActivity(15);
      setDone(true);
    }
  }

  return (
    <div className="max-w-lg mx-auto min-h-[100dvh] flex flex-col">
      <header className="sticky top-0 z-10 bg-surface/95 backdrop-blur border-b border-ink-100 px-4 py-3 flex items-center gap-3">
        <Link href="/exam" className="text-ink-400 text-xl px-1">
          ×
        </Link>
        <div className="flex-1">
          <p className="text-caption text-ink-400">{bp.officialName}</p>
          <p className="text-body-sm font-medium text-ink-900">{t("mockTitle")}</p>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 pb-24 scene-3d">
        <Card className="mb-6">
          <p className="text-body-sm text-ink-700 mb-2 text-pretty">
            {bp.passNote[locale]}
          </p>
          <p className="text-caption text-ink-500">
            {t("curriculumProgress", {
              done: unitsDone,
              total: units.length,
            })}
          </p>
          {curriculumReady ? (
            <p className="text-body-sm text-success-700 mt-2">{t("curriculumReady")}</p>
          ) : (
            <p className="text-body-sm text-accent-700 mt-2">{t("finishPathFirst")}</p>
          )}
        </Card>

        <h2 className="text-title-sm font-serif mb-3">{t("skillsTitle")}</h2>
        <ul className="space-y-2 mb-8">
          {bp.skills.map((s) => (
            <li
              key={s.skill}
              className="rounded-xl bg-white border border-ink-100 px-4 py-3 shadow-sm"
            >
              <p className="text-body font-medium text-ink-900">{s.title[locale]}</p>
              <p className="text-body-sm text-ink-500">{s.whatYouDo[locale]}</p>
            </li>
          ))}
        </ul>

        <h2 className="text-title-sm font-serif mb-3">{t("checklistTitle")}</h2>
        <ul className="space-y-2 mb-10">
          {bp.readinessChecklist[locale].map((line, i) => (
            <li key={i} className="flex gap-2 text-body-sm text-ink-800">
              <span className="text-accent-600">✓</span>
              {line}
            </li>
          ))}
        </ul>

        {!done && item && (
          <Card className="layer-stack">
            <p className="text-caption text-ink-400 mb-2">
              {t("mockProgress", {
                current: mockIdx + 1,
                total: bp.mock.length,
              })}{" "}
              · {t(`skill_${item.skill}`)}
            </p>
            {item.stimulus && (
              <div className="mb-4">
                {(item.skill === "listening" || item.skill === "reading") && tts && (
                  <button
                    type="button"
                    className="text-caption text-accent-700 underline mb-2"
                    onClick={() => speakFrench(item.stimulus!)}
                  >
                    {t("playStimulus")}
                  </button>
                )}
                <p className="font-serif text-body text-ink-900 leading-relaxed" dir="ltr">
                  {item.stimulus}
                </p>
              </div>
            )}
            <p className="text-body-lg text-ink-900 mb-4 font-medium text-pretty">
              {item.prompt[locale]}
            </p>

            {isMcq && item.options && (
              <div className="space-y-2.5">
                {item.options[locale].map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => answerMcq(idx)}
                    className={`w-full text-start px-4 py-3.5 rounded-2xl border-2 transition-all ${
                      selected === idx
                        ? idx === item.correctIndex
                          ? "border-success-500 bg-success-50"
                          : "border-accent-500 bg-accent-50"
                        : "border-ink-100 bg-white hover:border-ink-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {!isMcq && (
              <div>
                {(item.skill === "writing" || item.skill === "speaking") && (
                  <>
                    {item.skill === "writing" && (
                      <textarea
                        className="input-field min-h-[120px] py-3 mb-3 resize-y"
                        value={writing}
                        onChange={(e) => setWriting(e.target.value)}
                        placeholder={t("writePlaceholder")}
                        dir="ltr"
                      />
                    )}
                    {item.skill === "speaking" && item.modelHint && tts && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mb-3"
                        onClick={() => speakFrench(item.modelHint!.fr)}
                      >
                        {t("hearModel")}
                      </Button>
                    )}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setShowHint(true)}
                      >
                        {t("showModel")}
                      </Button>
                      <Button variant="accent" size="sm" onClick={nextOpen}>
                        {t("nextItem")}
                      </Button>
                    </div>
                    {showHint && item.modelHint && (
                      <p className="text-body-sm text-ink-600 border-s-2 border-accent-300 ps-3 text-pretty" dir="ltr">
                        {item.modelHint[locale]}
                      </p>
                    )}
                  </>
                )}
              </div>
            )}
          </Card>
        )}

        {done && (
          <Card className="text-center">
            <p className="text-4xl mb-3">🎓</p>
            <h2 className="text-title-sm font-serif mb-2">{t("mockDone")}</h2>
            {scoredCount > 0 && (
              <p className="text-body text-ink-600 mb-3">
                {t("mockScore", { score, total: scoredCount })}
              </p>
            )}
            <p className="text-body-sm text-ink-500 mb-6 text-pretty">{t("mockDoneBody")}</p>
            <p className="text-body-sm text-ink-700 mb-6 text-pretty border border-ink-100 rounded-xl p-4 bg-ink-50/50">
              {t("schoolNext")}
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/path">
                <Button variant="accent" className="w-full">
                  {t("toPath")}
                </Button>
              </Link>
              <Link href="/exam">
                <Button variant="secondary" className="w-full">
                  {t("backHub")}
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
