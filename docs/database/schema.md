# Angular.ng database

## Purpose

Store user and invoice information.

## Database Type

Relational PostgreSQL database

## Tables

### `invoices` Table

**Purpose:** Stores all invoice records created by users.

**Primary Key(s):** `id`
**Foreign Key(s):** `user_id` references `id` in the `users` table.

**Columns:**

| Column                   | Type      | Constraints                                   | Description                            |
| ------------------------ | --------- | --------------------------------------------- | -------------------------------------- |
| id                       | BIGSERIAL | PRIMARY KEY                                   | Unique identifier for the invoice      |
| from_business_name       | TEXT      |                                               | Business name of the client            |
| from_email               | TEXT      |                                               | Email address of the client            |
| from_address             | TEXT      |                                               | Address of the sender                  |
| from_phone_number        | TEXT      |                                               | Phone number of the sender             |
| from_invoice_number      | TEXT      |                                               | Invoice number from the sender         |
| from_bank_account_name   | TEXT      |                                               | Bank account name of the sender        |
| to_client_name           | TEXT      |                                               | Name of the client                     |
| to_email                 | TEXT      |                                               | Email address of the client            |
| to_address               | TEXT      |                                               | Address of the client                  |
| to_phone_number          | TEXT      |                                               | Phone number of the client             |
| due_date                 | TEXT      |                                               | Due date of the invoice                |
| order_status             | TEXT      |                                               | Status of the order                    |
| order_date               | TEXT      |                                               | Date of the order                      |
| user_id                  | UUID      | REFERENCES public.users(id) ON DELETE CASCADE | User ID associated with the invoice    |
| grand_total_price        | BIGINT    |                                               | Grand total price of the invoice       |
| currency                 | TEXT      |                                               | Currency of the invoice                |
| from_bank_account_number | BIGINT    |                                               | Bank account number of the sender      |
| sort_code                | BIGINT    |                                               | Sort code of the bank                  |
| swift                    | BIGINT    |                                               | SWIFT code                             |
| iban                     | BIGINT    |                                               | IBAN number                            |
| routing_number           | BIGINT    |                                               | Routing number                         |
| account_type             | TEXT      |                                               | Type of bank account                   |
| beneficiary_name         | TEXT      |                                               | Name of the beneficiary                |
| bank_address             | TEXT      |                                               | Address of the bank                    |
| created_at               | TIMESTAMP | DEFAULT NOW()                                 | Timestamp when the invoice was created |

**Indexes:**

- `invoice_pkey` on id

**Relationships:**

- One-to-many with invoice_items
- Many-to-one with users

**RLS Policies:**

- Users can only view/edit their own invoices
- See rls-policies.md for details

### `users` table

**Purpose:** Stores all user information.

**Primary Key(s):** `id`

**Foreign Key(s):** `id` references `auth.users(id)`, linking the user profile to the authentication system

**Columns:**

| Column     | Type        | Constraints                                             | Description                                          |
| ---------- | ----------- | ------------------------------------------------------- | ---------------------------------------------------- |
| id         | UUID        | PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE | Unique identifier for the user, linked to auth.users |
| username   | TEXT        | NULL                                                    | Username of the user                                 |
| full_name  | TEXT        | NULL                                                    | Full name of the user                                |
| avatar_url | TEXT        | NULL                                                    | URL to the user's avatar image                       |
| email      | TEXT        | NULL                                                    | Email address of the user                            |
| created_at | TIMESTAMPTZ | NOT NULL DEFAULT NOW()                                  | Timestamp when the user profile was created          |
| updated_at | TIMESTAMPTZ | NOT NULL DEFAULT NOW()                                  | Timestamp when the user profile was last updated     |

**Indexes:**

- `users_pkey` on id

**Relationships:**

- One-to-many with invoice
- One-to-many with invoice_items
- Many-to-one with auth.users

**RLS Policies:**

- users can view/edit their own profile
- See rls-policies.md for details

### `invoice items` table

**Purpose:** Stores all invoice items information.

**Primary Key(s):**
**Foreign Key(s):** ` ` references `id` in the ` ` table.

**Columns:**

| Column       | Type        | Constraints                                              | Description                                        |
| ------------ | ----------- | -------------------------------------------------------- | -------------------------------------------------- |
| id           | UUID        | PRIMARY KEY DEFAULT gen_random_uuid()                    | Unique identifier for the invoice item             |
| invoice_id   | BIGINT      | NOT NULL REFERENCES public.invoice(id) ON DELETE CASCADE | ID of the associated invoice                       |
| created_at   | TIMESTAMPTZ | NOT NULL DEFAULT NOW()                                   | Timestamp when the invoice item was created        |
| item_details | JSONB       | NOT NULL DEFAULT '[]'::jsonb                             | JSON object containing details of the invoice item |
| user_id      | UUID        | NOT NULL REFERENCES public.users(id) ON DELETE CASCADE   | User ID associated with the invoice item           |

**Indexes:**

- `invoice_pkey` on id
- `invoice_items_invoice_id_idx` on `invoice_id`
- `invoice_items_user_id_idx` on `user_id`
- `invoice_items_gin_details_idx` on `item_details`

**Relationships:**

- Many-to-one with invoice
- Many-to-one with users

**RLS Policies:**

- users can view/edit their own invoices
- See rls-policies.md for details
