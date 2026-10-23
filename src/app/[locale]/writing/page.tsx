"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { localTutorReply } from "@/domain/ai/tutor-fallback";
import { recordStudyActivity } from "@/application/motivation-store";

export default function WritingPage() {
  const t = useTranslations("writing");
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  function submit() {
    const fb = localTutorReply(text, "correction");
    setFeedback(fb);
    recordStudyActivity();
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      <Card className="mb-6">
        <p className="text-body-sm text-ink-500 mb-3">{t("prompt")}</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-ink-200 text-body mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-accent-500"
          placeholder={t("placeholder")}
        />
        <Button variant="accent" onClick={submit} disabled={!text.trim()}>
          {t("check")}
        </Button>
      </Card>

      {feedback && (
        <Card className="mb-8">
          <h2 className="text-body font-medium text-ink-900 mb-2">{t("feedback")}</h2>
          <p className="text-body text-ink-700 text-pretty">{feedback}</p>
          <p className="text-caption text-ink-400 mt-3">{t("limitNote")}</p>
        </Card>
      )}

      <Link href="/dashboard">
        <Button variant="ghost">{t("back")}</Button>
      </Link>
    </div>
  );
}
