import type { Metadata } from "next";
import {
  DM_Sans,
  Fraunces,
  IBM_Plex_Sans_Arabic,
  Noto_Naskh_Arabic,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { THEME_BOOT_SCRIPT } from "@/application/theme";

/** Clean modern body for Latin (EN/FR) */
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Distinctive editorial headlines for Latin */
const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Excellent Arabic UI body */
const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic-sans",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Elegant Arabic headings */
const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-arabic-serif",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bonjour — Languages you can actually use",
  description:
    "A calm adult language academy. Real situations, honest progress, clear next steps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body
        className={`${dmSans.variable} ${fraunces.variable} ${ibmArabic.variable} ${notoNaskh.variable} ${jetbrainsMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
