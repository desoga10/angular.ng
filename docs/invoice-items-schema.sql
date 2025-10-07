-- Enable pgcrypto for UUID generation if not already enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1) Table
CREATE TABLE public.invoice_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id BIGINT NOT NULL REFERENCES public.invoice(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  item_details JSONB NOT NULL DEFAULT '[]'::jsonb,   -- <— matches your Angular code
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE
);

-- Helpful indexes
CREATE INDEX IF NOT EXISTS invoice_items_invoice_id_idx ON public.invoice_items (invoice_id);
CREATE INDEX IF NOT EXISTS invoice_items_user_id_idx    ON public.invoice_items (user_id);
CREATE INDEX IF NOT EXISTS invoice_items_gin_details_idx ON public.invoice_items USING GIN (item_details);

-- 2) Row Level Security
ALTER TABLE public.invoice_items ENABLE ROW LEVEL SECURITY;

-- Policies
-- :one: Allow insert if user_id = auth.uid()
CREATE POLICY "Allow insert if user_id = auth.uid()"
  ON public.invoice_items
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- :two: Delete Invoice (authenticated users can delete their own rows)
CREATE POLICY "Delete Invoice"
  ON public.invoice_items
  FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- :three: Select for invoice items (open read to all)
CREATE POLICY "select for invoice items"
  ON public.invoice_items
  FOR SELECT
  TO public
  USING (true);

-- :four: Users can view their own invoice items (explicit self-view)
-- (Note: This overlaps with policy #3. Keep both if you want global read + explicit self-read.)
CREATE POLICY "Users can view their own invoice"
  ON public.invoice_items
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);