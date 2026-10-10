/**
 * Static root redirect to default locale.
 * Works with `output: "export"` (no server redirect at runtime).
 */
export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/bonjour/en/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace('/bonjour/en/');`,
          }}
        />
      </head>
      <body>
        <p>
          <a href="/bonjour/en/">Continue to Bonjour</a>
        </p>
      </body>
    </html>
  );
}
