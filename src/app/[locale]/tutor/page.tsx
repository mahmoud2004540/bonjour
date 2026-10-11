"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  isCloudAiConfigured,
  localTutorReply,
  type TutorMode,
  type TutorMessage,
} from "@/domain/ai/tutor-fallback";
import { recordStudyActivity } from "@/application/motivation-store";

export default function TutorPage() {
  const t = useTranslations("tutor");
  const [mode, setMode] = useState<TutorMode>("learn");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<TutorMessage[]>([
    {
      role: "tutor",
      text: t("welcome"),
      at: new Date().toISOString(),
    },
  ]);

  const cloud = isCloudAiConfigured();

  function send() {
    const text = input.trim();
    if (!text) return;
    const userMsg: TutorMessage = {
      role: "user",
      text,
      at: new Date().toISOString(),
    };
    const reply = localTutorReply(text, mode);
    const tutorMsg: TutorMessage = {
      role: "tutor",
      text: reply,
      at: new Date().toISOString(),
    };
    setMessages((m) => [...m, userMsg, tutorMsg]);
    setInput("");
    recordStudyActivity(5);
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-4 text-pretty">{t("subtitle")}</p>

      <p className="text-caption text-ink-400 mb-6">
        {cloud ? t("cloudOn") : t("cloudOff")}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {(["learn", "conversation", "correction"] as TutorMode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
              mode === m
                ? "border-accent-500 bg-accent-50 text-ink-950"
                : "border-ink-200 text-ink-600"
            }`}
          >
            {t(`mode_${m}`)}
          </button>
        ))}
      </div>

      <Card className="mb-6 min-h-[280px] flex flex-col">
        <div className="flex-1 space-y-3 mb-4 max-h-80 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`text-body-sm rounded-xl px-3 py-2 ${
                msg.role === "user"
                  ? "bg-ink-950 text-surface ms-8"
                  : "bg-ink-50 text-ink-800 me-8"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-ink-200 text-body mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-accent-500"
          placeholder={t("placeholder")}
        />
        <Button variant="accent" onClick={send}>
          {t("send")}
        </Button>
      </Card>

      <Link href="/dashboard">
        <Button variant="ghost">{t("back")}</Button>
      </Link>
    </div>
  );
}
