import { locales } from "@/i18n/config";
import { getAllTeacherSessions } from "@/domain/teacher/sessions";

export function generateStaticParams() {
  const params: { locale: string; id: string }[] = [];
  for (const locale of locales) {
    for (const s of getAllTeacherSessions()) {
      params.push({ locale, id: s.id });
    }
  }
  return params;
}

export default function TeacherSessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
