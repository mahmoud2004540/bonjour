"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getSupabaseConfigStatus } from "@/infrastructure/supabase/client";

export default function SignInPage() {
  const t = useTranslations("auth");
  const status = getSupabaseConfigStatus();

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-20">
      <h1 className="text-title font-serif text-ink-950 mb-2">{t("title")}</h1>
      <p className="text-body text-ink-600 mb-10">{t("subtitle")}</p>

      <Card className="mb-6">
        {!status.configured ? (
          <>
            <p className="text-body text-ink-800 mb-6">{t("localMode")}</p>
            <Link href="/onboarding">
              <Button variant="accent">{t("continueLocal")}</Button>
            </Link>
          </>
        ) : (
          <p className="text-body text-ink-800">{t("supabaseReady")}</p>
        )}
      </Card>

      <Link href="/" className="text-caption text-ink-400 hover:text-ink-600">
        {t("backHome")}
      </Link>
    </div>
  );
}
