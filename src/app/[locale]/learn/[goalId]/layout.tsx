import { locales } from "@/i18n/config";
import { GOALS } from "@/domain/curriculum/registry";

export function generateStaticParams() {
  const params: { locale: string; goalId: string }[] = [];
  for (const locale of locales) {
    for (const goal of GOALS) {
      params.push({ locale, goalId: goal.id });
    }
  }
  return params;
}

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
