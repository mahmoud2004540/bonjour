import { locales } from "@/i18n/config";
import { getAllUnits } from "@/domain/lessons/registry";

export function generateStaticParams() {
  const params: { locale: string; unitId: string }[] = [];
  const units = getAllUnits();
  for (const locale of locales) {
    for (const unit of units) {
      params.push({ locale, unitId: unit.id });
    }
  }
  return params;
}

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
