# Bonjour 2.0 — Blueprint status

Live: https://mahmoud2004540.github.io/bonjour/ar/

## Curriculum scenarios (published)

| Level | Scenarios |
|-------|-----------|
| A1 | Intro, **café (full task chain)**, shopping, transport, housing, health |
| A2 | Restaurant, hotel, phone, appointments |
| B1 | Work, service problem |
| B2 | Opinion + justification |
| C1 | Structured argument |
| C2 | **Register & nuance** |

## Shipped without keys

Vertical slice, i18n+RTL, materials on-site, placement v1.2, preference recommendations,
practice, real-life log, settings, privacy, domain checks, architecture notes.

### Blueprint alignment pass (Oct 2026)

- **Quality gates** — `npm run check` = typecheck + ESLint + Vitest + domain checks; CI runs it
  before every deploy, and the build no longer ignores type/lint errors.
- **Placement** — `domain/placement/scoring.ts` recomputes correctness from the versioned question
  bank (UI values are never trusted). Attempts are stored per learner + version and frozen at
  finalization; finalizing twice returns the same result. Written answers count as *writing*
  evidence awaiting review, and speaking is shown as not assessed.
- **No fabricated data** — removed invented study minutes and XP points. Dashboard, path and
  achievements show only real evidence (goals demonstrated, lessons completed, study days).
- **i18n** — UI strings moved out of `locale === "ar" ? … : …` ternaries into `messages/*`;
  placeholder copy ("—") replaced. A test enforces identical keys across en/fr/ar.
- **Accessibility** — visible focus ring everywhere, single `<main>` landmark, localized skip
  link, real `lang`/`dir` on `<html>`, WCAG AA contrast for secondary text.
- **Design system** — colors are CSS-variable tokens; light + dark themes (follows the device,
  or choose in Settings).

## Remaining

- Same full task chain on remaining A1 scenarios (courses, transport, …)
- French versions of resource glosses (content data currently has ar/en only)
- End-to-end and visual regression tests (Playwright) in CI
- Motion pass: heavy 3D hover transforms vs. the blueprint's "fast, subtle" rule

## Blocked on keys/assets

Supabase auth + server-authoritative placement · real audio · speech scoring · Stripe · AI ·
admin CMS / human review queue
