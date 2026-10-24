import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { isRtl, isValidLocale } from "@/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider, RouteGuard } from "@/components/auth/AuthGate";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("common");
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages}>
      <div
        dir={dir}
        lang={locale}
        className="min-h-screen flex flex-col bg-surface"
      >
        {/* Static export has one root <html>; set the real language and direction on it */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=${JSON.stringify(locale)};document.documentElement.dir=${JSON.stringify(dir)};`,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[100] focus:bg-ink-950 focus:text-surface focus:px-3 focus:py-2 focus:rounded-lg"
        >
          {t("skipToContent")}
        </a>
        <AuthProvider>
          <Header />
          <main id="main-content" className="flex-1">
            <RouteGuard>{children}</RouteGuard>
          </main>
          <Footer />
        </AuthProvider>
      </div>
    </NextIntlClientProvider>
  );
}
