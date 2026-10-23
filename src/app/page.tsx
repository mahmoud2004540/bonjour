import Link from "next/link";

/**
 * Root → default locale (static-friendly redirect).
 */
export default function RootPage() {
  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem", textAlign: "center" }}>
      <p>Redirecting…</p>
      <p>
        <Link href="/en/">Continue to Bonjour</Link>
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/bonjour/en/');`,
        }}
      />
      <noscript>
        <meta httpEquiv="refresh" content="0;url=/bonjour/en/" />
      </noscript>
    </div>
  );
}
