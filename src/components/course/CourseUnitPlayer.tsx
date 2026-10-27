"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { canSpeak, speakFrench, speakFrenchSequence, stopSpeaking } from "@/lib/speech";
import { markGoalCompleted } from "@/application/learner-store";
import { recordStudyActivity } from "@/application/motivation-store";
import { trackEvent } from "@/application/local-events";
import { addCourseVocab } from "@/application/vocab-store";
import { checkAnswer, optionOrder, orderTokens, type AnswerVerdict } from "@/domain/course/answers";
import { unitGoalId } from "@/domain/course/types";
import type { ChoiceItem, CourseUnit, PracticeItem } from "@/domain/course/types";
import type { Locale } from "@/i18n/config";

const SECTIONS = [
  "overview",
  "dialogue",
  "comprehension",
  "vocabulary",
  "grammar",
  "pronunciation",
  "culture",
  "practice",
  "production",
  "task",
  "test",
] as const;
type Section = (typeof SECTIONS)[number];

type Props = {
  unit: CourseUnit;
  nextUnitId: string | null;
  alreadyPassed: boolean;
};

export function CourseUnitPlayer({ unit, nextUnitId, alreadyPassed }: Props) {
  const t = useTranslations("course");
  const locale = useLocale() as Locale;
  const [index, setIndex] = useState(0);
  const [tts, setTts] = useState(false);
  const section: Section = SECTIONS[index];

  useEffect(() => {
    setTts(canSpeak());
    return () => stopSpeaking();
  }, []);

  function go(i: number) {
    stopSpeaking();
    setIndex(i);
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-24">
      <div className="sticky top-[4.25rem] z-20 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 bg-surface/95 backdrop-blur border-b border-ink-100">
        <div className="flex items-center gap-3">
          <Link href="/path" className="text-caption font-semibold text-ink-500 hover:text-ink-800">
            ← {t("backToPath")}
          </Link>
          <p className="flex-1 text-end text-caption text-ink-500 tabular-nums">
            {t("stepOf", { current: index + 1, total: SECTIONS.length })}
          </p>
        </div>
        <div
          className="mt-2 h-1.5 rounded-full bg-ink-100 overflow-hidden"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={SECTIONS.length}
          aria-valuenow={index + 1}
          aria-label={t("progressLabel")}
        >
          <div
            className="h-full bg-accent-600 transition-[width] duration-300"
            style={{ width: `${((index + 1) / SECTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <header className="pt-8 pb-6">
        <p className="text-overline text-accent-700 mb-2">
          {t("unitLabel", { level: unit.level, order: unit.order })}
        </p>
        <h1 className="text-title font-serif text-ink-950" lang="fr">
          {unit.title.fr}
        </h1>
        {locale !== "fr" && <p className="text-body text-ink-600 mt-1">{unit.title[locale]}</p>}
      </header>

      <nav aria-label={t("sectionsLabel")} className="mb-8 -mx-1 flex gap-1.5 overflow-x-auto pb-1">
        {SECTIONS.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => go(i)}
            aria-current={i === index ? "step" : undefined}
            className={cn(
              "shrink-0 min-h-9 px-3 rounded-full text-caption font-semibold border transition-colors",
              i === index
                ? "bg-ink-950 text-surface border-ink-950"
                : "border-ink-200 text-ink-600 hover:border-ink-400"
            )}
          >
            {t(`section_${s}`)}
          </button>
        ))}
      </nav>

      <section aria-labelledby="section-title">
        <h2 id="section-title" className="text-title-sm font-serif text-ink-950 mb-4">
          {t(`section_${section}`)}
        </h2>

        {section === "overview" && <Overview unit={unit} locale={locale} />}
        {section === "dialogue" && <DialogueView unit={unit} locale={locale} tts={tts} />}
        {section === "comprehension" && (
          <ChoiceList items={unit.comprehension} locale={locale} immediate />
        )}
        {section === "vocabulary" && <VocabularyView unit={unit} locale={locale} tts={tts} />}
        {section === "grammar" && <GrammarView unit={unit} locale={locale} />}
        {section === "pronunciation" && <PronunciationView unit={unit} locale={locale} tts={tts} />}
        {section === "culture" && (
          <Card>
            <h3 className="text-body font-bold text-ink-900 mb-2">{unit.culture.title[locale]}</h3>
            <p className="text-body text-ink-700 text-pretty">{unit.culture.body[locale]}</p>
          </Card>
        )}
        {section === "practice" && <PracticeView items={unit.practice} locale={locale} />}
        {section === "production" && <ProductionView unit={unit} locale={locale} />}
        {section === "task" && <TaskView unit={unit} locale={locale} />}
        {section === "test" && (
          <UnitTest unit={unit} locale={locale} nextUnitId={nextUnitId} alreadyPassed={alreadyPassed} />
        )}
      </section>

      <div className="mt-10 flex justify-between gap-3">
        <Button variant="ghost" className="shrink-0" onClick={() => go(index - 1)} disabled={index === 0}>
          {t("previous")}
        </Button>
        {index < SECTIONS.length - 1 && (
          <Button
            // Long section names ("Suivant : Compréhension") wrap instead of overflowing narrow phones.
            className="min-w-0 h-auto min-h-12 py-2 text-center"
            onClick={() => {
              recordStudyActivity();
              go(index + 1);
            }}
          >
            {t("next")}: {t(`section_${SECTIONS[index + 1]}`)}
          </Button>
        )}
      </div>
    </div>
  );
}

function ListenButton({ text, label }: { text: string; label: string }) {
  return (
    <button
      type="button"
      onClick={() => speakFrench(text)}
      className="shrink-0 inline-flex items-center justify-center min-h-9 min-w-9 px-2.5 rounded-full border border-ink-200 text-caption font-semibold text-accent-700 hover:border-accent-400"
      aria-label={`${label}: ${text}`}
    >
      <span aria-hidden="true">▶</span>
    </button>
  );
}

function Overview({ unit, locale }: { unit: CourseUnit; locale: Locale }) {
  const t = useTranslations("course");
  return (
    <div className="space-y-5">
      <Card>
        <p className="text-caption font-semibold text-ink-500 mb-1">{t("theme")}</p>
        <p className="text-body-lg text-ink-900 mb-4">{unit.theme[locale]}</p>
        <p className="text-body text-ink-700 text-pretty">{unit.context[locale]}</p>
      </Card>
      <Card>
        <h3 className="text-body font-bold text-ink-900 mb-3">{t("canDoTitle")}</h3>
        <ul className="space-y-2.5">
          {unit.canDo.map((c) => (
            <li key={c.fr} className="flex gap-3 text-body text-ink-800">
              <span aria-hidden="true" className="text-accent-600 font-bold">✓</span>
              <span>{c[locale]}</span>
            </li>
          ))}
        </ul>
      </Card>
      <p className="text-caption text-ink-500">{t("overviewNote")}</p>
    </div>
  );
}

function DialogueView({ unit, locale, tts }: { unit: CourseUnit; locale: Locale; tts: boolean }) {
  const t = useTranslations("course");
  const { dialogue } = unit;
  return (
    <div className="space-y-4">
      <p className="text-body-sm text-ink-600">
        <span className="font-semibold text-ink-800">{dialogue.title[locale]}</span> — {dialogue.setting[locale]}
      </p>
      {tts && (
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="accent" size="sm" onClick={() => speakFrenchSequence(dialogue.lines.map((l) => l.fr))}>
            {t("playDialogue")}
          </Button>
          <Button variant="ghost" size="sm" onClick={stopSpeaking}>
            {t("stop")}
          </Button>
        </div>
      )}
      <Card>
        <ol className="space-y-3" lang="fr">
          {dialogue.lines.map((line, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-20 shrink-0 text-caption font-bold text-ink-500 pt-1">{line.speaker}</span>
              <span className="flex-1 text-body text-ink-900">{line.fr}</span>
              {tts && <ListenButton text={line.fr} label={t("listen")} />}
            </li>
          ))}
        </ol>
      </Card>
      <p className="text-caption text-ink-500">{tts ? t("ttsNote") : t("noTts")}</p>
    </div>
  );
}

/** Options as [original index, text] pairs, in a stable shuffled order. */
function choiceOptions(item: ChoiceItem, locale: Locale): [number, string][] {
  const opts = item.optionsL10n ? item.optionsL10n[locale] : item.options ?? [];
  return optionOrder(opts.length, item.id).map((i) => [i, opts[i]]);
}

function ChoiceList({
  items,
  locale,
  immediate,
  numbered = true,
}: {
  items: ChoiceItem[];
  locale: Locale;
  immediate?: boolean;
  numbered?: boolean;
}) {
  const t = useTranslations("course");
  const [picked, setPicked] = useState<Record<string, number>>({});
  return (
    <ol className="space-y-4">
      {items.map((item, n) => {
        const choice = picked[item.id];
        const answered = choice !== undefined;
        return (
          <li key={item.id}>
            <Card>
              <p className="text-body font-medium text-ink-900 mb-3">
                {numbered ? `${n + 1}. ` : ""}
                {item.prompt[locale]}
              </p>
              <div className="grid gap-2" role="group" aria-label={item.prompt[locale]}>
                {choiceOptions(item, locale).map(([i, opt]) => {
                  const isRight = i === item.correctIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-pressed={choice === i}
                      disabled={immediate && answered}
                      onClick={() => setPicked({ ...picked, [item.id]: i })}
                      className={cn(
                        "text-start min-h-11 px-4 py-2.5 rounded-xl border text-body transition-colors",
                        !answered && "border-ink-200 hover:border-ink-400 text-ink-800",
                        answered && isRight && "border-success-600 bg-success-50 text-success-700",
                        answered && choice === i && !isRight && "border-accent-600 bg-accent-50 text-accent-800",
                        answered && choice !== i && !isRight && "border-ink-100 text-ink-500"
                      )}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {answered && (
                <p className="mt-3 text-body-sm text-ink-700" role="status">
                  {choice === item.correctIndex ? t("correct") : t("notQuite")}
                  {item.explanation ? ` ${item.explanation[locale]}` : ""}
                </p>
              )}
            </Card>
          </li>
        );
      })}
    </ol>
  );
}

function VocabularyView({ unit, locale, tts }: { unit: CourseUnit; locale: Locale; tts: boolean }) {
  const t = useTranslations("course");
  const [added, setAdded] = useState<number | null>(null);
  const all = unit.vocabulary.flatMap((g) => g.items);
  return (
    <div className="space-y-5">
      {unit.vocabulary.map((group) => (
        <Card key={group.title.fr}>
          <h3 className="text-body font-bold text-ink-900 mb-3">{group.title[locale]}</h3>
          <ul className="divide-y divide-ink-100">
            {group.items.map((v) => (
              <li key={v.fr} className="py-2.5 flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-body font-semibold text-ink-950" lang="fr">
                    {v.fr}
                    {v.gender && <span className="ms-2 text-caption font-medium text-ink-500">({v.gender})</span>}
                  </p>
                  <p className="text-body-sm text-ink-600">{v.meaning[locale]}</p>
                  {v.example && (
                    <p className="text-body-sm text-ink-500 italic" lang="fr">
                      {v.example}
                    </p>
                  )}
                </div>
                {tts && <ListenButton text={v.example ?? v.fr} label={t("listen")} />}
              </li>
            ))}
          </ul>
        </Card>
      ))}
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setAdded(addCourseVocab(all.map((v) => ({ term: v.fr, meaning: v.meaning })), unit.level))}
        >
          {t("addToReview")}
        </Button>
        {added !== null && (
          <p className="text-body-sm text-ink-600" role="status">
            {t("addedToReview", { count: added })}
          </p>
        )}
      </div>
    </div>
  );
}

function GrammarView({ unit, locale }: { unit: CourseUnit; locale: Locale }) {
  const t = useTranslations("course");
  return (
    <div className="space-y-6">
      {unit.grammar.map((g) => (
        <Card key={g.id}>
          <h3 className="text-body-lg font-bold text-ink-950 mb-2">{g.title[locale]}</h3>
          <p className="text-body text-ink-700 mb-4 text-pretty">{g.explanation[locale]}</p>
          {g.table && (
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-body-sm border-collapse" lang="fr" dir="ltr">
                <thead>
                  <tr>
                    {g.table.head.map((h, i) => (
                      <th key={i} scope="col" className="text-start font-semibold text-ink-600 border-b border-ink-200 py-2 pe-4 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {g.table.rows.map((row, r) => (
                    <tr key={r} className="border-b border-ink-100 last:border-0">
                      {row.map((cell, c) => (
                        <td key={c} className={cn("py-2 pe-4 whitespace-nowrap", c === 0 ? "text-ink-500" : "text-ink-900 font-medium")}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <h4 className="text-caption font-semibold text-ink-500 mb-2">{t("examples")}</h4>
          <ul className="space-y-2 mb-2">
            {g.examples.map((ex) => (
              <li key={ex.fr}>
                <p className="text-body text-ink-900" lang="fr">{ex.fr}</p>
                {locale !== "fr" && <p className="text-body-sm text-ink-500">{ex.gloss[locale]}</p>}
              </li>
            ))}
          </ul>
          {g.watchOut && (
            <p className="mt-4 rounded-xl bg-warning-50 border border-warning-100 px-4 py-3 text-body-sm text-warning-700">
              <span className="font-bold">{t("watchOut")} </span>
              {g.watchOut[locale]}
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}

function PronunciationView({ unit, locale, tts }: { unit: CourseUnit; locale: Locale; tts: boolean }) {
  const t = useTranslations("course");
  const p = unit.pronunciation;
  return (
    <Card>
      <h3 className="text-body-lg font-bold text-ink-950 mb-2">{p.title[locale]}</h3>
      <p className="text-body text-ink-700 mb-4 text-pretty">{p.explanation[locale]}</p>
      <ul className="space-y-2" lang="fr">
        {p.examples.map((ex) => (
          <li key={ex} className="flex items-center gap-3">
            <span className="flex-1 text-body text-ink-900">{ex}</span>
            {tts && <ListenButton text={ex} label={t("listen")} />}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-caption text-ink-500">{t("repeatAloud")}</p>
    </Card>
  );
}

function verdictText(v: AnswerVerdict, t: ReturnType<typeof useTranslations>): string {
  if (v === "correct") return t("correct");
  if (v === "accents") return t("checkAccents");
  return t("notQuite");
}

function PracticeItemView({ item, locale, onResult }: { item: PracticeItem; locale: Locale; onResult: (ok: boolean) => void }) {
  const t = useTranslations("course");
  const [value, setValue] = useState("");
  const [verdict, setVerdict] = useState<AnswerVerdict | null>(null);
  const [shown, setShown] = useState(false);
  const tokens = useMemo(() => (item.kind === "order" ? orderTokens(item.answer, item.id) : []), [item]);
  const [used, setUsed] = useState<number[]>([]);

  if (item.kind === "choice") {
    return <ChoiceList items={[item]} locale={locale} immediate numbered={false} />;
  }

  const expected = item.kind === "fill" ? item.answers[0] : item.answer;
  const typed = item.kind === "order" ? used.map((i) => tokens[i]).join(" ") : value;

  function check() {
    const v = item.kind === "fill" ? checkAnswer(typed, (item as { answers: string[] }).answers) : checkAnswer(typed, [expected]);
    setVerdict(v);
    onResult(v !== "wrong");
  }

  return (
    <Card>
      <p className="text-body font-medium text-ink-900 mb-2">{item.prompt[locale]}</p>
      {item.kind === "fill" && item.sentence && (
        <p className="text-body-lg text-ink-950 mb-3" lang="fr">{item.sentence}</p>
      )}
      {item.kind === "fill" ? (
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setVerdict(null);
          }}
          onKeyDown={(e) => e.key === "Enter" && value.trim() && check()}
          className="input-field"
          lang="fr"
          aria-label={item.prompt[locale]}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      ) : (
        <div>
          <p className="min-h-11 rounded-xl border border-dashed border-ink-300 px-3 py-2 text-body text-ink-950 mb-3" lang="fr" aria-live="polite">
            {typed || <span className="text-ink-400">{t("tapWords")}</span>}
          </p>
          <div className="flex flex-wrap gap-2" lang="fr">
            {tokens.map((w, i) => (
              <button
                key={i}
                type="button"
                disabled={used.includes(i)}
                onClick={() => {
                  setUsed([...used, i]);
                  setVerdict(null);
                }}
                className="min-h-10 px-3 rounded-lg border border-ink-200 text-body text-ink-900 disabled:opacity-30 hover:border-ink-400"
              >
                {w}
              </button>
            ))}
            {used.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setUsed([]);
                  setVerdict(null);
                }}
                className="min-h-10 px-3 rounded-lg text-caption font-semibold text-ink-500 hover:text-ink-800"
              >
                {t("clear")}
              </button>
            )}
          </div>
        </div>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button size="sm" onClick={check} disabled={!typed.trim()}>
          {t("check")}
        </Button>
        {verdict === "wrong" && !shown && (
          <button type="button" className="text-caption font-semibold text-accent-700 hover:underline" onClick={() => setShown(true)}>
            {t("showAnswer")}
          </button>
        )}
      </div>
      {verdict && (
        <p
          role="status"
          className={cn(
            "mt-3 text-body-sm",
            verdict === "correct" && "text-success-700",
            verdict === "accents" && "text-warning-700",
            verdict === "wrong" && "text-accent-800"
          )}
        >
          {verdictText(verdict, t)}
          {verdict !== "correct" || item.explanation ? " " : ""}
          {verdict === "accents" && <span lang="fr">{expected}</span>}
          {verdict !== "wrong" && item.explanation ? ` ${item.explanation[locale]}` : ""}
        </p>
      )}
      {shown && (
        <p className="mt-2 text-body-sm text-ink-700">
          {t("answer")}: <span lang="fr" className="font-semibold">{expected}</span>
          {item.explanation ? ` — ${item.explanation[locale]}` : ""}
        </p>
      )}
    </Card>
  );
}

function PracticeView({ items, locale }: { items: PracticeItem[]; locale: Locale }) {
  const t = useTranslations("course");
  const [results, setResults] = useState<Record<string, boolean>>({});
  const done = Object.keys(results).length;
  const right = Object.values(results).filter(Boolean).length;
  return (
    <div className="space-y-4">
      <p className="text-body-sm text-ink-600">{t("practiceIntro")}</p>
      {items.map((item, n) => (
        <div key={item.id}>
          <p className="text-caption font-semibold text-ink-500 mb-1.5">{t("exercise", { n: n + 1 })}</p>
          <PracticeItemView
            item={item}
            locale={locale}
            onResult={(ok) => setResults((r) => (item.id in r ? r : { ...r, [item.id]: ok }))}
          />
        </div>
      ))}
      {done > 0 && (
        <p className="text-body-sm text-ink-600" role="status">
          {t("practiceScore", { right, done, total: items.filter((i) => i.kind !== "choice").length })}
        </p>
      )}
    </div>
  );
}

function SelfChecklist({ items, locale }: { items: CourseUnit["task"]["checklist"]; locale: Locale }) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
  return (
    <ul className="space-y-2">
      {items.map((c, i) => (
        <li key={c.fr}>
          <label className="flex items-start gap-3 min-h-11 py-1 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 accent-accent-600"
              checked={checked[i]}
              onChange={() => setChecked(checked.map((v, j) => (j === i ? !v : v)))}
            />
            <span className="text-body text-ink-800">{c[locale]}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function ProductionView({ unit, locale }: { unit: CourseUnit; locale: Locale }) {
  const t = useTranslations("course");
  const [text, setText] = useState("");
  const [compared, setCompared] = useState(false);
  return (
    <div className="space-y-4">
      <Card>
        <p className="text-body text-ink-800 mb-3 text-pretty" id="production-prompt">
          {unit.production.prompt[locale]}
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          lang="fr"
          aria-labelledby="production-prompt"
          className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-surface-elevated text-body text-ink-950 placeholder:text-ink-400 resize-y"
          placeholder={t("writePlaceholder")}
        />
        <div className="mt-3">
          <Button size="sm" onClick={() => setCompared(true)} disabled={text.trim().length < 5}>
            {t("compareModel")}
          </Button>
        </div>
      </Card>
      {compared && (
        <Card>
          <h3 className="text-caption font-semibold text-ink-500 mb-2">{t("modelAnswer")}</h3>
          <p className="text-body text-ink-900 mb-5 whitespace-pre-line" lang="fr">{unit.production.model}</p>
          <h3 className="text-caption font-semibold text-ink-500 mb-2">{t("selfCheck")}</h3>
          <SelfChecklist items={unit.production.checklist} locale={locale} />
          <p className="mt-3 text-caption text-ink-500">{t("selfReviewNote")}</p>
        </Card>
      )}
    </div>
  );
}

function TaskView({ unit, locale }: { unit: CourseUnit; locale: Locale }) {
  const t = useTranslations("course");
  return (
    <Card>
      <h3 className="text-body-lg font-bold text-ink-950 mb-2">{unit.task.title[locale]}</h3>
      <p className="text-body text-ink-700 mb-5 text-pretty">{unit.task.brief[locale]}</p>
      <h4 className="text-caption font-semibold text-ink-500 mb-2">{t("selfCheck")}</h4>
      <SelfChecklist items={unit.task.checklist} locale={locale} />
      <p className="mt-3 text-caption text-ink-500">{t("taskNote")}</p>
    </Card>
  );
}

function UnitTest({
  unit,
  locale,
  nextUnitId,
  alreadyPassed,
}: {
  unit: CourseUnit;
  locale: Locale;
  nextUnitId: string | null;
  alreadyPassed: boolean;
}) {
  const t = useTranslations("course");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const total = unit.test.length;
  const score = unit.test.filter((q) => answers[q.id] === q.correctIndex).length;
  const needed = Math.ceil(total * unit.passRatio);
  const passed = submitted && score >= needed;
  const complete = Object.keys(answers).length === total;

  function submit() {
    setSubmitted(true);
    recordStudyActivity();
    if (unit.test.filter((q) => answers[q.id] === q.correctIndex).length >= needed) {
      markGoalCompleted(unitGoalId(unit));
      for (const g of unit.alsoDemonstrates ?? []) markGoalCompleted(g);
      trackEvent("unit_passed", { unitId: unit.id });
    }
  }

  return (
    <div className="space-y-4" key={attempt}>
      <p className="text-body-sm text-ink-600">{t("testIntro", { needed, total })}</p>
      {alreadyPassed && !submitted && <p className="text-body-sm text-success-700">{t("alreadyPassed")}</p>}
      <ol className="space-y-4">
        {unit.test.map((q, n) => {
          const choice = answers[q.id];
          return (
            <li key={q.id}>
              <Card>
                <p className="text-body font-medium text-ink-900 mb-3">
                  {n + 1}. {q.prompt[locale]}
                </p>
                <div className="grid gap-2" role="group" aria-label={q.prompt[locale]}>
                  {choiceOptions(q, locale).map(([i, opt]) => {
                    const isRight = i === q.correctIndex;
                    return (
                      <button
                        key={i}
                        type="button"
                        aria-pressed={choice === i}
                        disabled={submitted}
                        onClick={() => setAnswers({ ...answers, [q.id]: i })}
                        className={cn(
                          "text-start min-h-11 px-4 py-2.5 rounded-xl border text-body transition-colors",
                          !submitted && choice === i && "border-ink-950 bg-ink-50 text-ink-950",
                          !submitted && choice !== i && "border-ink-200 hover:border-ink-400 text-ink-800",
                          // Correct answers are revealed only after a pass, so a retry still measures something.
                          submitted && isRight && (passed || choice === i) && "border-success-600 bg-success-50 text-success-700",
                          submitted && choice === i && !isRight && "border-accent-600 bg-accent-50 text-accent-800",
                          submitted && choice !== i && !(isRight && passed) && "border-ink-100 text-ink-500"
                        )}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </Card>
            </li>
          );
        })}
      </ol>

      {!submitted ? (
        <Button variant="accent" onClick={submit} disabled={!complete}>
          {complete ? t("submitTest") : t("answerAll", { left: total - Object.keys(answers).length })}
        </Button>
      ) : (
        <Card className={passed ? "border-success-600" : "border-accent-300"}>
          <p className="text-title-sm font-serif text-ink-950 mb-1" role="status">
            {t("testScore", { score, total })}
          </p>
          <p className="text-body text-ink-700 mb-5">{passed ? t("testPassed") : t("testFailed", { needed })}</p>
          <div className="flex flex-wrap gap-3">
            {passed && nextUnitId && (
              <Link href={`/lesson/${nextUnitId}`}>
                <Button variant="accent">{t("nextUnit")}</Button>
              </Link>
            )}
            {passed && !nextUnitId && (
              <Link href="/path">
                <Button variant="accent">{t("backToPath")}</Button>
              </Link>
            )}
            <Button
              variant="secondary"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                setAttempt(attempt + 1);
              }}
            >
              {t("retryTest")}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
