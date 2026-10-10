"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  getRealLifeEntries,
  addRealLifeEntry,
  type RealLifeEntry,
} from "@/application/real-life-log";

export default function RealLifePage() {
  const t = useTranslations("realLife");
  const [entries, setEntries] = useState<RealLifeEntry[]>([]);
  const [note, setNote] = useState("");
  const [situation, setSituation] = useState("");

  useEffect(() => {
    setEntries(getRealLifeEntries());
  }, []);

  function save() {
    if (!note.trim()) return;
    addRealLifeEntry(note, situation || t("defaultSituation"));
    setNote("");
    setSituation("");
    setEntries(getRealLifeEntries());
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-8 text-pretty">{t("subtitle")}</p>

      <Card className="mb-8">
        <label className="block text-caption text-ink-400 mb-2">{t("situation")}</label>
        <input
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
          className="input-field mb-4"
          placeholder={t("situationPlaceholder")}
        />
        <label className="block text-caption text-ink-400 mb-2">{t("note")}</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-ink-200 text-body resize-none mb-4 focus:outline-none focus:ring-2 focus:ring-accent-500"
          placeholder={t("notePlaceholder")}
        />
        <Button variant="accent" onClick={save} disabled={!note.trim()}>
          {t("save")}
        </Button>
      </Card>

      <h2 className="text-caption text-ink-400 mb-3">{t("listTitle")}</h2>
      {entries.length === 0 ? (
        <p className="text-body text-ink-500 mb-10">{t("empty")}</p>
      ) : (
        <ul className="space-y-3 mb-10">
          {entries.map((e) => (
            <li key={e.id}>
              <Card>
                <p className="text-caption text-ink-400 mb-1">
                  {e.situation} · {new Date(e.createdAt).toLocaleDateString()}
                </p>
                <p className="text-body text-ink-800">{e.note}</p>
              </Card>
            </li>
          ))}
        </ul>
      )}

      <Link href="/dashboard">
        <Button variant="secondary">{t("back")}</Button>
      </Link>
    </div>
  );
}
