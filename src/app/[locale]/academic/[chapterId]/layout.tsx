import { locales } from "@/i18n/config";
import { getAllChapters } from "@/domain/academic/chapters";

export function generateStaticParams() {
  const params: { locale: string; chapterId: string }[] = [];
  for (const locale of locales) {
    for (const ch of getAllChapters()) {
      params.push({ locale, chapterId: ch.id });
    }
  }
  return params;
}

export default function AcademicChapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
