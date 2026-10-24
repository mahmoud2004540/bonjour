"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/components/auth/AuthGate";

export default function PrivacyPage() {
  const t = useTranslations("privacy");
  const { configured } = useAuth();

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-4">{t("title")}</h1>
      <div className="space-y-6 text-body text-ink-600 text-pretty">
        <p>{t("p1")}</p>
        {configured ? (
          <>
            <p>{t("p2Cloud")}</p>
            <p>{t("deleteAccount")}</p>
          </>
        ) : (
          <p>{t("p2")}</p>
        )}
        <p>{t("p3")}</p>
        <p>{t("p4")}</p>
      </div>
      <div className="mt-10">
        <Link href="/">
          <Button variant="secondary">{t("home")}</Button>
        </Link>
      </div>
    </div>
  );
}
