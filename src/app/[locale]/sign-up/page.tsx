"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { AuthError, AuthShell, Field } from "@/components/auth/AuthShell";
import { useAuth } from "@/components/auth/AuthGate";
import { MIN_PASSWORD_LENGTH, signUp, type AuthErrorCode } from "@/application/auth";

export default function SignUpPage() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const { configured } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<AuthErrorCode | "mismatch" | null>(null);
  const [checkEmail, setCheckEmail] = useState(false);

  if (!configured) {
    return (
      <AuthShell title={t("signUpTitle")} subtitle={t("localModeTitle")}>
        <p className="text-body text-ink-700 mb-6">{t("localMode")}</p>
        <Link href="/sign-in">
          <Button variant="secondary" className="w-full">
            {t("backToSignIn")}
          </Button>
        </Link>
      </AuthShell>
    );
  }

  if (checkEmail) {
    return (
      <AuthShell title={t("checkEmailTitle")}>
        <p className="text-body text-ink-700 mb-6 text-pretty" role="status">
          {t("checkEmailBody", { email: email.trim() })}
        </p>
        <Link href="/sign-in">
          <Button variant="secondary" className="w-full">
            {t("backToSignIn")}
          </Button>
        </Link>
      </AuthShell>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("mismatch");
      return;
    }
    setBusy(true);
    const result = await signUp(email, password, name, locale);
    setBusy(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    // Signed in immediately → the auth provider redirects to onboarding.
    if (!result.value.signedIn) setCheckEmail(true);
  }

  return (
    <AuthShell
      title={t("signUpTitle")}
      subtitle={t("signUpSubtitle")}
      footer={
        <p>
          {t("haveAccount")}{" "}
          <Link href="/sign-in" className="font-semibold text-accent-700 hover:underline">
            {t("signIn")}
          </Link>
        </p>
      }
    >
      <form onSubmit={submit} noValidate>
        <AuthError code={error} />
        <Field id="name" label={t("name")} value={name} onChange={setName} autoComplete="name" />
        <Field id="email" label={t("email")} type="email" value={email} onChange={setEmail} autoComplete="email" />
        <Field
          id="password"
          label={t("password")}
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          hint={t("passwordHint", { min: MIN_PASSWORD_LENGTH })}
        />
        <Field
          id="confirm"
          label={t("confirmPassword")}
          type="password"
          value={confirm}
          onChange={setConfirm}
          autoComplete="new-password"
        />
        <p className="mb-5 text-caption text-ink-500">
          {t("privacyNote")}{" "}
          <Link href="/privacy" className="underline">
            {t("privacyLink")}
          </Link>
        </p>
        <Button
          type="submit"
          variant="accent"
          className="w-full"
          disabled={busy || !name.trim() || !email || !password || !confirm}
        >
          {busy ? t("creating") : t("createAccount")}
        </Button>
      </form>
    </AuthShell>
  );
}
