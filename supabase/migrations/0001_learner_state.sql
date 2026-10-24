-- Bonjour — account storage for learner progress.
-- Run once in the Supabase dashboard: SQL Editor → New query → paste → Run.
--
-- Each account has one row holding its progress (profile, placement,
-- completed units, vocabulary review). Row-level security makes every row
-- readable and writable only by its owner.

create table if not exists public.learner_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.learner_state enable row level security;

drop policy if exists "learner_state: owner can read" on public.learner_state;
create policy "learner_state: owner can read"
  on public.learner_state for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "learner_state: owner can insert" on public.learner_state;
create policy "learner_state: owner can insert"
  on public.learner_state for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "learner_state: owner can update" on public.learner_state;
create policy "learner_state: owner can update"
  on public.learner_state for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- Keep payloads bounded (a learner's state is a few hundred KB at most).
alter table public.learner_state
  drop constraint if exists learner_state_data_size;
alter table public.learner_state
  add constraint learner_state_data_size check (pg_column_size(data) < 2000000);
