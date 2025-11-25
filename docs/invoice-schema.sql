CREATE TABLE public.invoice (
  id BIGSERIAL PRIMARY KEY,
  from_business_name TEXT,
  from_email TEXT,
  from_address TEXT,
  from_phone_number TEXT,
  from_invoice_number TEXT,
  from_bank_account_name TEXT,
  to_client_name TEXT,
  to_email TEXT,
  to_address TEXT,
  to_phone_number TEXT,
  due_date TEXT,
  order_status TEXT,
  order_date TEXT,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  grand_total_price BIGINT,
  currency TEXT,
  from_bank_account_number BIGINT,
  sort_code BIGINT,
  swift BIGINT,
  iban BIGINT,
  routing_number BIGINT,
  account_type TEXT,
  beneficiary_name TEXT,
  bank_address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
-- Enable Row-Level Security
ALTER TABLE public.invoice ENABLE ROW LEVEL SECURITY;
-- :one: Allow insert if user_id matches auth.uid()
CREATE POLICY "Allow insert if user_id matches auth"
  ON public.invoice
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());
-- :two: Allow insert where user_id = auth.uid() (redundant but explicit for clarity)
CREATE POLICY "Allow insert where user_id = auth.uid()"
  ON public.invoice
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());
-- :three: Enable delete for users based on user_id
CREATE POLICY "Enable delete for users based on user_id"
  ON public.invoice
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
-- :four: Enable read access for all users (can read all invoices)
CREATE POLICY "Enable read access for all users"
  ON public.invoice
  FOR SELECT
  TO public
  USING (true);
-- :five: User can view their own invoice
CREATE POLICY "User can view their own invoice"
  ON public.invoice
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

ALTER TABLE invoices
ADD COLUMN tax_rate DECIMAL(5,2) DEFAULT 0,
ADD COLUMN tax_amount DECIMAL(10,2) DEFAULT 0;
