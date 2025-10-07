-- ======================================================
-- Seed: Backfill public.users, then insert invoice + items
-- ======================================================

DO $$
DECLARE
  test_user_id UUID;
  test_email TEXT;
  test_username TEXT;
  new_invoice_id BIGINT;
BEGIN
  -- 1) Pick any existing auth user for the seed
  SELECT id, email,
         COALESCE((raw_user_meta_data->>'username')::text, 'contributor') AS username
  INTO test_user_id, test_email, test_username
  FROM auth.users
  ORDER BY created_at DESC
  LIMIT 1;

  IF test_user_id IS NULL THEN
    RAISE EXCEPTION 'No users found in auth.users. Please create a user via the Dashboard (Auth) or sign up through the app, then rerun this seed.';
  END IF;

  -- 2) Backfill/Upsert to public.users so the FK can pass
  INSERT INTO public.users (id, username, full_name, avatar_url, email)
  SELECT
    au.id,
    COALESCE((au.raw_user_meta_data->>'username')::text, 'contributor') AS username,
    COALESCE((au.raw_user_meta_data->>'full_name')::text, '') AS full_name,
    COALESCE((au.raw_user_meta_data->>'avatar_url')::text, '') AS avatar_url,
    au.email
  FROM auth.users au
  WHERE au.id = test_user_id
  ON CONFLICT (id) DO UPDATE
    SET username = EXCLUDED.username,
        full_name = EXCLUDED.full_name,
        avatar_url = EXCLUDED.avatar_url,
        email = EXCLUDED.email;

  -- 3) Temporarily disable RLS so we can insert seed rows (RLS requires auth.uid())
  ALTER TABLE public.invoice DISABLE ROW LEVEL SECURITY;
  ALTER TABLE public.invoice_items DISABLE ROW LEVEL SECURITY;

  -- 4) Insert a sample invoice
  INSERT INTO public.invoice (
    from_business_name,
    from_email,
    from_address,
    from_phone_number,
    from_invoice_number,
    from_bank_account_name,
    from_bank_account_number,
    to_client_name,
    to_email,
    to_address,
    to_phone_number,
    due_date,
    order_status,
    order_date,
    user_id,
    grand_total_price,
    currency,
    sort_code,
    swift,
    iban,
    routing_number,
    account_type,
    beneficiary_name,
    bank_address
  )
  VALUES (
    'TechNova Ltd',
    'billing@technova.com',
    '123 Silicon Avenue, Lagos',
    '+234 800 123 4567',
    'INV-2025-001',
    'TechNova Business Account',
    9876543210,
    'Greenfield Solutions',
    'accounts@greenfield.io',
    '14 Broad Street, Lagos',
    '+234 809 222 8899',
    '2025-11-30',
    'Pending',
    '2025-10-07',
    test_user_id,
    150000,
    'NGN',
    123456,
    654321,
    112233,
    445566,
    'Business Checking',
    'Greenfield Solutions Ltd',
    '14 Broad Street, Lagos'
  )
  RETURNING id INTO new_invoice_id;

  -- 5) Insert linked invoice_items row (JSON array payload)
  INSERT INTO public.invoice_items (invoice_id, item_details, user_id)
  VALUES (
    new_invoice_id,
    '[
      {
        "item_description": "Website Development",
        "item_unit_price": 120000,
        "item_units": 1,
        "unit_total_price": 120000
      },
      {
        "item_description": "Hosting (12 months)",
        "item_unit_price": 2500,
        "item_units": 12,
        "unit_total_price": 30000
      }
    ]'::jsonb,
    test_user_id
  );

  -- 6) Re-enable RLS
  ALTER TABLE public.invoice ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.invoice_items ENABLE ROW LEVEL SECURITY;

  RAISE NOTICE 'Seed inserted invoice id=% linked to user % (%).', new_invoice_id, test_user_id, test_email;
END $$;

-- Quick checks
SELECT * FROM public.users ORDER BY id DESC LIMIT 5;
SELECT * FROM public.invoice ORDER BY id DESC LIMIT 5;
SELECT * FROM public.invoice_items ORDER BY id DESC LIMIT 5;