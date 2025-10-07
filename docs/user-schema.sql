-- ============================
-- public.users (profile) schema
-- Safe to run multiple times
-- ============================

-- 1) Table
create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  username text null,
  full_name text null,
  avatar_url text null,
  email text null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Updated-at trigger (keeps updated_at fresh on row updates)
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_users_set_updated_at on public.users;
create trigger trg_users_set_updated_at
before update on public.users
for each row
execute procedure public.set_updated_at();

-- 3) RLS
alter table public.users enable row level security;

-- Drop existing policies if they exist (so this file is re-runnable)
do $$
begin
  if exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'users' and policyname = 'Permit Users to Access Their Profile') then
    drop policy "Permit Users to Access Their Profile" on public.users;
  end if;
  if exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'users' and policyname = 'Permit Users to Update Their Profile') then
    drop policy "Permit Users to Update Their Profile" on public.users;
  end if;
end$$;

-- Recreate policies
create policy "Permit Users to Access Their Profile"
  on public.users
  for select
  using (auth.uid() = id);

create policy "Permit Users to Update Their Profile"
  on public.users
  for update
  using (auth.uid() = id);

-- 4) Signup trigger: copy essentials from auth.users into public.users
--    SECURITY DEFINER + search_path kept to 'public' for safety.
create or replace function public.user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, username, full_name, avatar_url, email)
  values (
    new.id,
    new.raw_user_meta_data ->> 'username',
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url',
    new.email
  )
  on conflict (id) do update
    set username   = excluded.username,
        full_name  = excluded.full_name,
        avatar_url = excluded.avatar_url,
        email      = excluded.email,
        updated_at = now();
  return new;
end;
$$;

-- Recreate trigger safely
drop trigger if exists create_user_trigger on auth.users;
create trigger create_user_trigger
after insert on auth.users
for each row
execute procedure public.user_profile();