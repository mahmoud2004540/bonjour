# Bonjour 2.0 — Blueprint status

Honest map against the product & technical blueprint.
Updated as the platform grows. **No fake “done” claims.**

## Product journey

| Step | Status |
|------|--------|
| Landing | Done |
| Account / Auth | Local mode only — Supabase schema ready, needs keys |
| Onboarding | Done |
| Placement | Basic evidence collection — not full multi-version server-authoritative system |
| Learning profile | Done (evidence-based) |
| Learning plan / next action | Deterministic engine Done |
| Dashboard | Done |
| Learn / Practice | Done (self-review labelled) |
| Evidence | Self-review + placement observations |
| Progress | Done (no invented mastery %) |
| Real-life use tracking | Not built |

## A1 curriculum scenarios (published)

1. Faire connaissance (introductions)
2. Au café (ordering)
3. Faire les courses (shopping)
4. Se déplacer (transport)
5. Le logement (housing)
6. Santé (pharmacy / how you feel)

## Blueprint sections

| # | Area | Status |
|---|------|--------|
| 1–4 | Overview, users, philosophy, journey | Implemented in product copy & flow |
| 5 | Landing | Done |
| 6 | Auth | Structure + schema; **not live without Supabase** |
| 7 | Onboarding | Done |
| 8 | Placement (full architecture) | Partial |
| 9 | Profile | Done |
| 10 | Curriculum engine | Registry + lifecycle helpers; authoring UI not built |
| 11 | Learning engine | Deterministic recommendations Done |
| 12–14 | Learning / lessons / practice | Done for published goals |
| 15 | Speech | Types + capability flags; **no recording/scoring** |
| 16 | Human review | Domain types only |
| 17–18 | Progress / Dashboard | Done |
| 19 | AI | **Not built** (AI-powered not AI-first — deferred until value is clear) |
| 20 | i18n EN/FR/AR + RTL | Done; extensible config |
| 21–25 | Design / motion / responsive / a11y | Strong foundation; full WCAG audit not done |
| 26–28 | Architecture / data / security | Clean layers; RLS policies not enabled (no live DB) |
| 29 | Testing | Not automated yet |
| 30 | Authoring CMS | Not built |
| 31 | Analytics | Not built |
| 32 | Payments | Not built |
| 33 | Admin | Not built |
| 34–37 | Methodology / rules / DoD | Followed for shipped slices |
| 38 | First vertical slice | **Done** |
| 39 | Final goal | In progress via incremental scenarios |

## Blocked on external setup

- Supabase project + env keys → real auth & cloud data
- Audio production → speech playback
- Payment provider → subscriptions
- AI provider keys → conversational practice (when justified)

## Live URL

https://mahmoud2004540.github.io/bonjour/en/
