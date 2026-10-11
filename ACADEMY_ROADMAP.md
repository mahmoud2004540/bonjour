# AI Language Academy — integration roadmap

Built on the existing **Bonjour** Next.js static app (GitHub Pages).

## Phase 1 — Audit (done)

- Stack: Next.js 15, static export, next-intl, localStorage learner state
- Full French CEFR scenarios A1–C2 already published
- No cloud auth / AI keys / speech services configured

## Phase 2–3 — Foundation + core learning (this release)

| Feature | Status |
|---------|--------|
| Multi-language **target** selection (FR/EN/DE/IT/ES) | Shell ready; **only FR curriculum full** |
| UI locale independent (en/fr/ar) | Already existed |
| Daily minutes + XP + streak (local) | Shipped |
| Vocabulary SRS (local SM-2-inspired) | Shipped |
| Grammar reference (FR A1 sample) | Shipped |
| AI tutor UI + **offline fallback** | Shipped — cloud AI **not** connected |
| Honest limits when services missing | Documented in UI |

## Phase 4+ — needs configuration

- Cloud LLM tutor (server-side provider + env)
- TTS / STT / pronunciation scoring
- Supabase auth + progress sync
- Curricula for EN/DE/IT/ES
- Payments / tiers

## Honesty rules (both master prompts)

- No fake speech scores from text alone
- No claim of live human tutors
- No claim of official CEFR certification from short quizzes
- No inventing grammar rules via “AI” when only local patterns run
