# Bonjour 2.0 — Architecture notes

## Stack

- Next.js 15 App Router, TypeScript, static export for GitHub Pages
- next-intl (en / fr / ar) with `dir=rtl` for Arabic
- Domain code under `src/domain` (no UI imports)
- Application store under `src/application` (localStorage until Supabase)

## Learning path (vertical slice)

Create profile → Onboarding preferences → Placement v1.2 → Profile evidence →
Dashboard next action → Learn tasks → Self-evidence → Progress / Practice / Real-life log

## Curriculum

Registry pattern: each scenario file exports Scenario + Goals + Tasks.
`registry.ts` aggregates published content and `validateCurriculumIntegrity()`.

Levels published: A1, A2, B1, B2 (opinion), C1 (short argument).
C2: materials catalogue only until scenario design is ready.

## Honesty constraints

- No fake speech scores
- Placement results are derived only in `domain/placement/scoring.ts`; open answers are never auto-scored
- No invented minutes, points or levels in progress UI
- Listening placement uses **text stand-ins** until real audio assets exist
- Materials stay on-platform (no core redirects to external FLE sites)
- Cloud auth / analytics / payments are optional and not claimed as live without keys

## Checks

```bash
npm run check   # typecheck + lint + unit tests + domain checks (CI runs this)
npm run build
```

## Theming

Colors are RGB CSS variables in `src/app/globals.css` (`--ink-*`, `--accent-*`, `--surface*`, …)
consumed by `tailwind.config.ts`. Dark values apply via `prefers-color-scheme` or
`<html data-theme>` (set from Settings, see `src/application/theme.ts`).
