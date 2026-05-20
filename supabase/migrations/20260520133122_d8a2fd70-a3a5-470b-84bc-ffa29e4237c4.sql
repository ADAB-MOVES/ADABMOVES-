
CREATE TABLE public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  org text,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact message"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) between 1 and 200
    AND length(email) between 3 and 320
    AND length(message) between 1 and 5000
  );

CREATE POLICY "Authenticated can read contact messages"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);
