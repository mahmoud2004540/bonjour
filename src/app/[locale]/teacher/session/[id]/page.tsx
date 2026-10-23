"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getTeacherSession } from "@/domain/teacher/sessions";
import { speakFrench, canSpeak } from "@/lib/speech";
import { recordStudyActivity } from "@/application/motivation-store";
import { getStoredProfile } from "@/application/learner-store";
import { addCustomVocab } from "@/application/vocab-store";
import type { Locale } from "@/i18n/config";

function analyzeWriting(text: string, hints: string[]): string[] {
  const notes: string[] = [];
  const lower = text.toLowerCase();
  if (text.trim().length < 12) notes.push("short");
  const hit = hints.filter((h) =>
    lower.includes(h.toLowerCase().replace("…", "").trim())
  );
  if (hit.length === 0 && hints.length) notes.push("hints");
  if (!/[.!?]/.test(text) && text.length > 20) notes.push("punct");
  if (notes.length === 0) notes.push("ok");
  return notes;
}

export default function TeacherSessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = useTranslations("teacher");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [writing, setWriting] = useState("");
  const [writeNotes, setWriteNotes] = useState<string[] | null>(null);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabShow, setVocabShow] = useState(false);
  const [tts, setTts] = useState(false);
  const [hidePassage, setHidePassage] = useState(false);

  useEffect(() => {
    params.then((p) => setId(p.id));
  }, [params]);

  useEffect(() => {
    if (!getStoredProfile()) router.replace("/onboarding");
    setTts(canSpeak());
  }, [router]);

  const session = useMemo(() => (id ? getTeacherSession(id) : undefined), [id]);

  if (!id) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16">
        <div className="h-2 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="mb-4">{t("notFound")}</p>
        <Link href="/teacher">
          <Button variant="secondary">{t("backHub")}</Button>
        </Link>
      </div>
    );
  }

  const questions = session.questions ?? [];
  const words = session.words ?? [];

  function answerQ(opt: number) {
    if (selected !== null) return;
    setSelected(opt);
    const item = questions[qIndex];
    const ok = opt === item.correctIndex;
    const next = score + (ok ? 1 : 0);
    setScore(next);
    setTimeout(() => {
      setSelected(null);
      if (qIndex + 1 < questions.length) setQIndex(qIndex + 1);
      else {
        recordStudyActivity();
        setDone(true);
      }
    }, 450);
  }

  function submitWriting() {
    const hints = session!.writingHints?.[locale] ?? [];
    setWriteNotes(analyzeWriting(writing, hints));
    recordStudyActivity();
  }

  function nextVocab(knew: boolean) {
    if (knew && words[vocabIndex]) {
      addCustomVocab(
        words[vocabIndex].term,
        words[vocabIndex].meaning[locale],
        locale
      );
    }
    setVocabShow(false);
    if (vocabIndex + 1 < words.length) setVocabIndex(vocabIndex + 1);
    else {
      recordStudyActivity();
      setDone(true);
    }
  }

  return (
    <div className="max-w-lg mx-auto min-h-[100dvh] flex flex-col">
      <header className="sticky top-0 z-10 bg-surface/95 backdrop-blur border-b border-ink-100 px-4 py-3 flex items-center gap-3">
        <Link href="/teacher" className="text-ink-400 text-xl px-1">
          ×
        </Link>
        <div className="flex-1">
          <p className="text-caption text-ink-400">
            {session.level} · {t(`track_${session.track}`)}
          </p>
          <p className="text-body-sm font-medium text-ink-900 truncate">
            {session.title[locale]}
          </p>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 pb-24">
        <div className="flex gap-3 mb-6">
          <div className="w-11 h-11 rounded-full bg-accent-100 border border-accent-200 flex items-center justify-center text-lg shrink-0 shadow-sm">
            👩‍🏫
          </div>
          <div className="rounded-2xl rounded-ss-md bg-white border border-ink-100 px-4 py-3 shadow-sm text-body-sm text-ink-800 text-pretty">
            {session.coach[locale]}
          </div>
        </div>

        {(session.track === "reading" || session.track === "listening") &&
          session.passage &&
          !done && (
            <Card className="mb-6">
              {session.track === "listening" && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <Button
                    variant="accent"
                    size="sm"
                    onClick={() => {
                      setHidePassage(true);
                      speakFrench(session.passage!);
                    }}
                    disabled={!tts}
                  >
                    {t("playAudio")}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setHidePassage((h) => !h)}
                  >
                    {hidePassage ? t("showText") : t("hideText")}
                  </Button>
                </div>
              )}
              {session.track === "reading" && tts && (
                <button
                  type="button"
                  className="mb-3 text-caption text-accent-700 underline"
                  onClick={() => speakFrench(session.passage!)}
                >
                  {t("readAloud")}
                </button>
              )}
              {!(session.track === "listening" && hidePassage) && (
                <p className="font-serif text-body-lg text-ink-900 leading-relaxed text-pretty" dir="ltr">
                  {session.passage}
                </p>
              )}
              {session.track === "listening" && hidePassage && (
                <p className="text-body-sm text-ink-400 italic">{t("listenOnly")}</p>
              )}
            </Card>
          )}

        {(session.track === "reading" || session.track === "listening") &&
          !done &&
          questions.length > 0 && (
            <div>
              <p className="text-caption text-ink-400 mb-2">
                {t("qProgress", { current: qIndex + 1, total: questions.length })}
              </p>
              <p className="text-body-lg text-ink-900 mb-4 font-medium">
                {questions[qIndex].prompt[locale]}
              </p>
              <div className="space-y-2.5">
                {questions[qIndex].options[locale].map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => answerQ(idx)}
                    className={`w-full text-start px-4 py-3.5 rounded-2xl border-2 transition-all ${
                      selected === idx
                        ? idx === questions[qIndex].correctIndex
                          ? "border-success-500 bg-success-50"
                          : "border-accent-500 bg-accent-50"
                        : "border-ink-100 bg-white hover:border-ink-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

        {session.track === "writing" && !writeNotes && (
          <div>
            <p className="text-body text-ink-800 mb-4 text-pretty">
              {session.writingPrompt?.[locale]}
            </p>
            {session.writingHints && (
              <div className="flex flex-wrap gap-2 mb-4">
                {session.writingHints[locale].map((h) => (
                  <span
                    key={h}
                    className="text-caption px-2.5 py-1 rounded-lg bg-ink-50 text-ink-600 border border-ink-100"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
            <textarea
              className="input-field min-h-[140px] py-3 mb-4 resize-y"
              value={writing}
              onChange={(e) => setWriting(e.target.value)}
              placeholder={t("writePlaceholder")}
              dir="ltr"
            />
            <Button
              variant="accent"
              className="w-full h-12"
              onClick={submitWriting}
              disabled={writing.trim().length < 5}
            >
              {t("submitWriting")}
            </Button>
          </div>
        )}

        {session.track === "writing" && writeNotes && (
          <Card>
            <p className="text-overline text-accent-700 mb-3">{t("teacherFeedback")}</p>
            <ul className="space-y-2 mb-6">
              {writeNotes.map((n) => (
                <li key={n} className="text-body-sm text-ink-700">
                  {t(`note_${n}` as "note_ok")}
                </li>
              ))}
            </ul>
            <p className="text-body-sm text-ink-500 mb-4 font-serif border-s-2 border-ink-200 ps-3" dir="ltr">
              {writing}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" onClick={() => setWriteNotes(null)}>
                {t("editAgain")}
              </Button>
              <Link href="/teacher">
                <Button variant="accent" size="sm">
                  {t("backHub")}
                </Button>
              </Link>
            </div>
          </Card>
        )}

        {session.track === "vocab" && !done && words.length > 0 && (
          <div className="text-center pt-4">
            <p className="text-caption text-ink-400 mb-6">
              {t("vocabProgress", {
                current: vocabIndex + 1,
                total: words.length,
              })}
            </p>
            <p className="text-display-sm font-serif text-ink-950 mb-4" dir="ltr">
              {words[vocabIndex].term}
            </p>
            {tts && (
              <button
                type="button"
                onClick={() => speakFrench(words[vocabIndex].term)}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 text-accent-800 text-body-sm"
              >
                🔊 {t("listen")}
              </button>
            )}
            {!vocabShow ? (
              <Button
                variant="secondary"
                className="w-full max-w-xs h-12 mx-auto"
                onClick={() => setVocabShow(true)}
              >
                {t("revealMeaning")}
              </Button>
            ) : (
              <div className="space-y-4 max-w-xs mx-auto">
                <p className="text-body-lg rounded-2xl bg-success-50 border border-success-100 py-4">
                  {words[vocabIndex].meaning[locale]}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="secondary" onClick={() => nextVocab(false)}>
                    {t("hard")}
                  </Button>
                  <Button variant="accent" onClick={() => nextVocab(true)}>
                    {t("knew")}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {done && (
          <Card className="text-center mt-4">
            <p className="text-4xl mb-3">✨</p>
            <h2 className="text-title-sm font-serif mb-2">{t("sessionDone")}</h2>
            {(session.track === "reading" || session.track === "listening") && (
              <p className="text-body text-ink-600 mb-6">
                {t("score", { score, total: questions.length })}
              </p>
            )}
            <Link href="/teacher">
              <Button variant="accent">{t("backHub")}</Button>
            </Link>
          </Card>
        )}
      </main>
    </div>
  );
}
