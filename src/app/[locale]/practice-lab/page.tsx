"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllUnits } from "@/domain/lessons/registry";
import { getStoredProfile } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import { speakFrench, canSpeak } from "@/lib/speech";
import type { LearnerProfile } from "@/domain/types";
import type { Locale } from "@/i18n/config";

type Drill = {
  id: string;
  kind: "write" | "quiz" | "listen";
  prompt: string;
  answers?: string[];
  options?: string[];
  correctIndex?: number;
  speakText?: string;
};

const COPY = {
  ar: {
    eyebrow: "ساعات ممارسة",
    title: "معمل التدريب المكثف",
    instituteNote:
      "جلسة زي واجب المعهد: تكرار من دروسك على الموقع. كل جولة = دقائق ممارسة حقيقية.",
    write: "كتابة",
    quiz: "اختيار",
    listen: "استماع وتكرار",
    play: "تشغيل",
    heard: "سمعت وكررت",
    typeAnswer: "اكتب بالفرنسية…",
    check: "تحقق",
    correct: "صح!",
    tryAgain: "حاول تاني",
    next: "التالي",
    sessionDone: "خلّصت الجولة",
    anotherRound: "جولة كمان",
    toPath: "المسار",
    toExam: "محاكاة الامتحان",
  },
  en: {
    eyebrow: "Practice hours",
    title: "Intensive practice lab",
    instituteNote:
      "Institute-style homework: drills from your on-site lessons. Each round = real practice minutes.",
    write: "Writing",
    quiz: "Quiz",
    listen: "Listen & repeat",
    play: "Play",
    heard: "Heard & repeated",
    typeAnswer: "Type in French…",
    check: "Check",
    correct: "Correct!",
    tryAgain: "Try again",
    next: "Next",
    sessionDone: "Round complete",
    anotherRound: "Another round",
    toPath: "Path",
    toExam: "Mock exam",
  },
  fr: {
    eyebrow: "Heures de pratique",
    title: "Labo intensif",
    instituteNote:
      "Comme les devoirs d'un institut : exercices tirés de vos leçons sur le site.",
    write: "Écrit",
    quiz: "QCM",
    listen: "Écoute et répétition",
    play: "Écouter",
    heard: "Écouté et répété",
    typeAnswer: "Écrivez en français…",
    check: "Vérifier",
    correct: "Correct !",
    tryAgain: "Réessayez",
    next: "Suivant",
    sessionDone: "Série terminée",
    anotherRound: "Encore une série",
    toPath: "Parcours",
    toExam: "Examen blanc",
  },
} as const;

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[?.!']/g, "")
    .replace(/\s+/g, " ");
}

function buildDrills(locale: Locale): Drill[] {
  const drills: Drill[] = [];
  for (const u of getAllUnits().slice(0, 45)) {
    for (const v of u.vocab.slice(0, 2)) {
      drills.push({
        id: `${u.id}-v-${v.term}`,
        kind: "write",
        prompt:
          locale === "ar"
            ? `اكتب بالفرنسية: ${v.meaning.ar}`
            : locale === "fr"
              ? `Écrivez : ${v.meaning.fr}`
              : `Write in French: ${v.meaning.en}`,
        answers: [v.term, v.term.toLowerCase()],
        speakText: v.term,
      });
    }
    for (const q of u.quiz.slice(0, 1)) {
      drills.push({
        id: `${u.id}-${q.id}`,
        kind: "quiz",
        prompt: q.prompt[locale],
        options: q.options[locale],
        correctIndex: q.correctIndex,
      });
    }
    if (u.lesson.dialogue[0]) {
      const line = u.lesson.dialogue[0].replace(/^—\s*/, "");
      drills.push({
        id: `${u.id}-listen`,
        kind: "listen",
        prompt:
          locale === "ar"
            ? "اسمع وكرّر الجملة"
            : locale === "fr"
              ? "Écoutez et répétez"
              : "Listen and repeat",
        speakText: line,
      });
    }
  }
  for (let i = drills.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [drills[i], drills[j]] = [drills[j], drills[i]];
  }
  return drills.slice(0, 24);
}

export default function PracticeLabPage() {
  const locale = useLocale() as Locale;
  const c = COPY[locale] ?? COPY.en;
  const router = useRouter();
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<null | boolean>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const [tts, setTts] = useState(false);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    const p = getStoredProfile();
    if (!p) {
      router.replace("/onboarding");
      return;
    }
    setProfile(p);
    setTts(canSpeak());
  }, [router]);

  // `seed` changes on "new round" to reshuffle the drills.
  const drills = useMemo(() => {
    void seed;
    return buildDrills(locale);
  }, [locale, seed]);

  if (!profile) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20">
        <div className="h-8 w-40 bg-ink-100 rounded animate-pulse" />
      </div>
    );
  }

  const drill = drills[idx];
  const minutes = Math.max(1, Math.round((Date.now() - startedAt) / 60000) || 1);

  function finishSession() {
    recordStudyActivity();
    setDone(true);
  }

  function next() {
    setAnswer("");
    setFeedback(null);
    if (idx + 1 >= drills.length) finishSession();
    else setIdx(idx + 1);
  }

  function checkWrite() {
    if (!drill?.answers) return;
    const ok = drill.answers.some((a) => norm(a) === norm(answer));
    setFeedback(ok);
    if (ok) setScore((s) => s + 1);
  }

  function answerQuiz(opt: number) {
    if (drill?.correctIndex === undefined) return;
    const ok = opt === drill.correctIndex;
    setFeedback(ok);
    if (ok) setScore((s) => s + 1);
    setTimeout(next, 450);
  }

  return (
    <div className="max-w-lg mx-auto min-h-[100dvh] flex flex-col scene-3d">
      <header className="sticky top-0 z-10 bg-surface/95 backdrop-blur border-b border-ink-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-ink-400 text-xl px-1">
            ×
          </Link>
          <div className="flex-1">
            <p className="text-caption text-ink-400">{c.eyebrow}</p>
            <p className="text-body-sm font-medium">{c.title}</p>
          </div>
          <span className="text-caption text-ink-500">
            {idx + 1}/{drills.length || 1}
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-ink-100 overflow-hidden">
          <div
            className="h-full bg-accent-500 transition-all"
            style={{
              width: `${drills.length ? ((idx + 1) / drills.length) * 100 : 0}%`,
            }}
          />
        </div>
      </header>

      <main className="flex-1 px-4 py-6 pb-24">
        <Card className="mb-4 border-accent-100 bg-accent-50/30">
          <p className="text-body-sm text-ink-700 text-pretty">{c.instituteNote}</p>
        </Card>

        {!done && drill && (
          <Card className="layer-stack">
            <p className="text-caption text-ink-400 mb-2">
              {drill.kind === "write"
                ? c.write
                : drill.kind === "quiz"
                  ? c.quiz
                  : c.listen}
            </p>
            <p className="text-body-lg font-medium text-ink-900 mb-4 text-pretty">
              {drill.prompt}
            </p>

            {drill.kind === "listen" && drill.speakText && (
              <div className="space-y-3">
                {tts && (
                  <Button
                    variant="accent"
                    onClick={() => speakFrench(drill.speakText!)}
                  >
                    {c.play}
                  </Button>
                )}
                <p className="font-serif text-body text-ink-800" dir="ltr">
                  {drill.speakText}
                </p>
                <Button variant="secondary" onClick={next}>
                  {c.heard}
                </Button>
              </div>
            )}

            {drill.kind === "write" && (
              <div>
                {tts && drill.speakText && (
                  <button
                    type="button"
                    className="text-caption text-accent-700 underline mb-3"
                    onClick={() => speakFrench(drill.speakText!)}
                  >
                    {c.play}
                  </button>
                )}
                <input
                  className="input-field h-14 mb-3 text-center"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder={c.typeAnswer}
                  dir="ltr"
                  disabled={feedback === true}
                />
                {feedback === true && (
                  <p className="text-success-700 mb-3">{c.correct}</p>
                )}
                {feedback === false && (
                  <p className="text-accent-700 mb-3">{c.tryAgain}</p>
                )}
                {feedback !== true ? (
                  <Button
                    variant="accent"
                    className="w-full"
                    onClick={checkWrite}
                    disabled={!answer.trim()}
                  >
                    {c.check}
                  </Button>
                ) : (
                  <Button variant="accent" className="w-full" onClick={next}>
                    {c.next}
                  </Button>
                )}
              </div>
            )}

            {drill.kind === "quiz" && drill.options && (
              <div className="space-y-2">
                {drill.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => answerQuiz(i)}
                    className={`w-full text-start px-4 py-3 rounded-2xl border-2 ${
                      feedback !== null && i === drill.correctIndex
                        ? "border-success-500 bg-success-50"
                        : "border-ink-100 bg-white"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </Card>
        )}

        {done && (
          <Card className="text-center">
            <p className="text-4xl mb-3">⏱</p>
            <h2 className="text-title-sm font-serif mb-2">{c.sessionDone}</h2>
            <p className="text-body text-ink-600 mb-1">
              {score} / {drills.length}
            </p>
            <p className="text-body-sm text-ink-500 mb-6">~{minutes} min</p>
            <div className="flex flex-col gap-2">
              <Button
                variant="accent"
                onClick={() => {
                  setIdx(0);
                  setScore(0);
                  setDone(false);
                  setAnswer("");
                  setFeedback(null);
                  setSeed((s) => s + 1);
                }}
              >
                {c.anotherRound}
              </Button>
              <Link href="/path">
                <Button variant="secondary" className="w-full">
                  {c.toPath}
                </Button>
              </Link>
              <Link href="/exam">
                <Button variant="secondary" className="w-full">
                  {c.toExam}
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
