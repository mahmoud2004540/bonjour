import { locales } from "@/i18n/config";
import { getAllUnits } from "@/domain/lessons/registry";
import { LEGACY_UNIT_IDS } from "@/domain/course/legacy";

export function generateStaticParams() {
  const params: { locale: string; unitId: string }[] = [];
  // Current units plus replaced lesson ids, so old links still resolve (and redirect).
  const ids = new Set([...getAllUnits().map((u) => u.id), ...LEGACY_UNIT_IDS]);
  for (const locale of locales) {
    for (const unitId of ids) {
      params.push({ locale, unitId });
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
