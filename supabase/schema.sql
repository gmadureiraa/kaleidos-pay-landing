-- Kaleidos Pay · Waitlist schema
-- Roda isso uma vez no SQL editor do projeto Supabase.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

-- Lockdown: só a service_role do backend insere.
alter table public.waitlist enable row level security;

-- (Opcional) revogar acesso anon para garantir que só o server insere.
revoke all on table public.waitlist from anon, authenticated;
