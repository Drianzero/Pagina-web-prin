create table if not exists public.learning_progress (
    user_id uuid primary key references auth.users (id) on delete cascade,
    completed_lessons text[] not null default '{}'::text[],
    completed_quizzes text[] not null default '{}'::text[],
    current_lesson text not null default 'html',
    editor_code text not null default '',
    updated_at timestamptz not null default now()
);

alter table public.learning_progress
    add column if not exists current_lesson text not null default 'html';

alter table public.learning_progress
    add column if not exists editor_code text not null default '';

alter table public.learning_progress enable row level security;

drop policy if exists "Users can read their own learning progress" on public.learning_progress;
create policy "Users can read their own learning progress"
    on public.learning_progress
    for select
    to authenticated
    using (auth.uid() = user_id);

drop policy if exists "Users can create their own learning progress" on public.learning_progress;
create policy "Users can create their own learning progress"
    on public.learning_progress
    for insert
    to authenticated
    with check (auth.uid() = user_id);

drop policy if exists "Users can update their own learning progress" on public.learning_progress;
create policy "Users can update their own learning progress"
    on public.learning_progress
    for update
    to authenticated
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

create table if not exists public.cyber_chat_rate_limits (
    ip_hash text primary key check (ip_hash ~ '^[a-f0-9]{64}$'),
    window_started_at timestamptz not null default now(),
    request_count integer not null default 0 check (request_count >= 0),
    updated_at timestamptz not null default now()
);

create index if not exists cyber_chat_rate_limits_updated_at_idx
    on public.cyber_chat_rate_limits (updated_at);

alter table public.cyber_chat_rate_limits enable row level security;
revoke all on table public.cyber_chat_rate_limits from anon, authenticated;

create or replace function public.consume_cyber_chat_rate_limit(p_ip_hash text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_request_count integer;
begin
    if p_ip_hash !~ '^[a-f0-9]{64}$' then
        raise exception 'Invalid rate-limit key';
    end if;

    insert into public.cyber_chat_rate_limits as limits (
        ip_hash,
        window_started_at,
        request_count,
        updated_at
    )
    values (p_ip_hash, now(), 1, now())
    on conflict (ip_hash) do update
    set
        request_count = case
            when limits.window_started_at <= now() - interval '1 minute' then 1
            else limits.request_count + 1
        end,
        window_started_at = case
            when limits.window_started_at <= now() - interval '1 minute' then now()
            else limits.window_started_at
        end,
        updated_at = now()
    returning request_count into v_request_count;

    delete from public.cyber_chat_rate_limits
    where updated_at < now() - interval '1 day';

    return v_request_count <= 12;
end;
$$;

revoke all on function public.consume_cyber_chat_rate_limit(text) from public, anon, authenticated;
grant execute on function public.consume_cyber_chat_rate_limit(text) to service_role;
