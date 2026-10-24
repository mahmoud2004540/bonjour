"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { AuthError, AuthShell, Field } from "@/components/auth/AuthShell";
import { useAuth } from "@/components/auth/AuthGate";
import { signIn, type AuthErrorCode } from "@/application/auth";
import { getStoredProfile } from "@/application/learner-store";

export default function SignInPage() {
  const t = useTranslations("auth");
  const { configured } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<AuthErrorCode | null>(null);

  if (!configured) {
    return (
      <AuthShell title={t("signInTitle")} subtitle={t("localModeTitle")}>
        <p className="text-body text-ink-700 mb-6 text-pretty">{t("localMode")}</p>
        <Link href={getStoredProfile() ? "/dashboard" : "/onboarding"}>
          <Button variant="accent" className="w-full">
            {t("continueLocal")}
          </Button>
        </Link>
      </AuthShell>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const result = await signIn(email, password);
    // On success the auth provider loads the account's progress and redirects.
    if (!result.ok) {
      setError(result.error);
      setBusy(false);
    }
  }

  return (
    <AuthShell
      title={t("signInTitle")}
      subtitle={t("signInSubtitle")}
      footer={
        <>
          <p>
            {t("noAccount")}{" "}
            <Link href="/sign-up" className="font-semibold text-accent-700 hover:underline">
              {t("createAccount")}
            </Link>
          </p>
        </>
      }
    >
      <form onSubmit={submit} noValidate>
        <AuthError code={error} />
        <Field id="email" label={t("email")} type="email" value={email} onChange={setEmail} autoComplete="email" />
        <Field
          id="password"
          label={t("password")}
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
        />
        <div className="mb-5 text-end">
          <Link href="/forgot-password" className="text-body-sm font-semibold text-accent-700 hover:underline">
            {t("forgotPassword")}
          </Link>
        </div>
        <Button type="submit" variant="accent" className="w-full" disabled={busy || !email || !password}>
          {busy ? t("signingIn") : t("signIn")}
        </Button>
      </form>
    </AuthShell>
  );
}
