import { locales } from "@/i18n/config";
import { EXAM_LEVELS } from "@/domain/exam/catalog";

export function generateStaticParams() {
  const params: { locale: string; level: string }[] = [];
  for (const locale of locales) {
    for (const level of EXAM_LEVELS) {
      params.push({ locale, level });
    }
  }
  return params;
}

export default function ExamLevelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
