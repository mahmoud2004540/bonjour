import { locales } from "@/i18n/config";

const TRACKS = ["reading", "listening", "writing", "vocab"] as const;

export function generateStaticParams() {
  const params: { locale: string; track: string }[] = [];
  for (const locale of locales) {
    for (const track of TRACKS) {
      params.push({ locale, track });
    }
  }
  return params;
}

export default function TeacherTrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
