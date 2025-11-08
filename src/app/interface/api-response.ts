export interface FrankFurtherCurrencyData {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

export interface ExchangeRateCurrencyData {
  amount: number;
  base_code: string;
  target_code: string;
  conversion_rate: number;
  conversion_result: number;
}

export interface UsersAccountSettingData {
  id?: string;
  username: string;
  full_name: string;
  country: string;
  phone_number: string;
  address: string;
}

export interface InvoiceItem {
  item_unit_price: number;
  item_units: number;
  unit_total_price: number;
  item_description: string;
}

export interface AddNewInvoice {
  id: string;
  order_status: string;
  order_date: string;
  from_business_name: string;
  from_bank_account_name: string;
  from_email: string;
  from_address: string;
  from_phone_number: string;
  from_invoice_number: string;
  to_client_name: string;
  to_email: string;
  to_address: string;
  to_phone_number: string;
  due_date: string;
  grand_total_price: number;
  items: InvoiceItem[]; // 👈 Now supports multiple items
}
export interface ViewInvoiceResponse {
  id: string;
  order_status: 'paid' | 'unpaid' | 'overdue' | 'draft';
  order_date: string;
  from_business_name: string;
  from_bank_name: string;
  from_bank_account_name: string;
  from_bank_account_number: string;
  beneficiary_name: string;
  bank_address: string;
  account_type: string;
  sort_code: string;
  iban: string;
  swift: string;
  routing_number: string;
  currency: string;
  from_email: string;
  from_address: string;
  from_phone_number: string;
  from_invoice_number: string;
  to_client_name: string;
  to_email: string;
  to_address: string;
  to_phone_number: string;
  due_date: string;
  grand_total_price: number;
  items: InvoiceItem[];
  invoice?: {
    order_status?: string;
  };
}
