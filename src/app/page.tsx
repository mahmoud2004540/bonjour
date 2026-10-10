import { redirect } from "next/navigation";

/**
 * Root path redirects to the default locale.
 * With basePath=/bonjour this serves https://…/bonjour/ → /bonjour/en/
 */
export default function RootPage() {
  redirect("/en");
}
