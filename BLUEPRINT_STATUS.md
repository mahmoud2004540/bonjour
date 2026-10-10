# Bonjour 2.0 — Blueprint status

Honest map against the product & technical blueprint.  
**No fake “done” claims.**

Live: https://mahmoud2004540.github.io/bonjour/en/

## Product journey

| Step | Status |
|------|--------|
| Landing (warm, adult) | Done |
| Account / Auth | Local mode — Supabase schema ready, needs keys |
| Onboarding | Done |
| Placement | **v1.1** multi-dimension evidence (vocab, grammar, reading, listening text-stand-in, open speaking) |
| Learning profile | Done (evidence-based) |
| Learning plan / next action | Deterministic engine Done |
| Dashboard | Done + encouragement |
| Learn / Practice | Done + completion moment |
| Evidence | Self-review + placement |
| Progress | Done |
| Materials A1–C2 (on-platform) | Done (expanded library) |
| Real-life use log | **Done** (self-report journal) |

## Curriculum published

**A1:** Faire connaissance · Au café · Courses · Transport · Logement · Santé  
**A2:** Au restaurant (order meal + bill)

## Blueprint sections

| # | Area | Status |
|---|------|--------|
| 1–5 | Overview / landing | Done |
| 6 | Auth | Needs Supabase keys |
| 7–9 | Onboarding / placement / profile | Strong partial → expanding |
| 10–14 | Curriculum / learn | A1 + first A2 |
| 15 | Speech | Browser TTS on materials only; no scoring |
| 16 | Human review | Types only |
| 17–18 | Progress / dashboard | Done |
| 19 | AI | Not built |
| 20 | i18n EN/FR/AR + RTL | Done |
| 21–25 | Design / a11y | Foundation; full audit later |
| 26–28 | Architecture / security | Clean layers; no live RLS |
| 29 | Automated tests | Not yet |
| 30–33 | CMS / analytics / payments / admin | Not built |
| 38 | First vertical slice | **Done** |
| 39 | Final product goal | In progress |

## Blocked on you / external

1. **Supabase** URL + anon key → real accounts  
2. **Native audio files** → real listening/speech  
3. **Stripe** → payments  
4. **AI API** → only if it improves learning  

Until then we continue every slice that can ship honestly on-platform.
