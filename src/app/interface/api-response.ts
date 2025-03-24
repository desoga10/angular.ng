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
