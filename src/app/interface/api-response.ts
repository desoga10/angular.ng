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
