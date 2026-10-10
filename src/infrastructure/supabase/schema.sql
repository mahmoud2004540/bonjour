-- Bonjour 2.0 — Database schema (PostgreSQL / Supabase)
-- Domain-aligned. Apply only after reviewing migrations.
-- Row-level security required before production.

-- Identity
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  locale text not null default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists learner_preferences (
  learner_id uuid primary key references profiles(id) on delete cascade,
  objectives text[] not null default '{}',
  situations text[] not null default '{}',
  availability text,
  preferred_style text
);

-- Assessment
create table if not exists placement_attempts (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references profiles(id) on delete cascade,
  version text not null,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  finalized boolean not null default false
);

create table if not exists placement_observations (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references placement_attempts(id) on delete cascade,
  dimension text not null,
  question_id text not null,
  response text not null,
  is_correct boolean,
  observed_at timestamptz not null default now()
);

create table if not exists skill_evidence (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references profiles(id) on delete cascade,
  dimension text not null,
  status text not null check (status in ('demonstrated', 'partial', 'not_yet', 'unknown')),
  notes text,
  observed_at timestamptz
);

-- Learning
create table if not exists completed_goals (
  learner_id uuid not null references profiles(id) on delete cascade,
  goal_id text not null,
  completed_at timestamptz not null default now(),
  primary key (learner_id, goal_id)
);

create table if not exists practice_attempts (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references profiles(id) on delete cascade,
  task_id text not null,
  goal_id text not null,
  response text not null,
  evidence_status text not null,
  created_at timestamptz not null default now()
);

-- Speech (assets only when real files exist)
create table if not exists audio_assets (
  id uuid primary key default gen_random_uuid(),
  version int not null default 1,
  status text not null default 'draft',
  storage_path text,
  duration_ms int,
  created_at timestamptz not null default now()
);

create table if not exists speech_attempts (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references profiles(id) on delete cascade,
  target_id text not null,
  recording_path text,
  evaluation_status text not null default 'not_evaluated',
  created_at timestamptz not null default now()
);

-- RLS placeholders (enable before production)
-- alter table profiles enable row level security;
-- create policy "Users read own profile" on profiles for select using (auth.uid() = id);
