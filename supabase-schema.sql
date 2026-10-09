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
