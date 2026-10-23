import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="max-w-content mx-auto px-6 py-24 text-center">
      <h1 className="text-title font-serif text-ink-950 mb-3">404</h1>
      <p className="text-body text-ink-600 mb-8">Page not found.</p>
      <Link
        href="/"
        className="inline-flex h-10 px-5 items-center rounded-lg bg-ink-950 text-surface text-sm font-medium"
      >
        Home
      </Link>
    </div>
  );
}
