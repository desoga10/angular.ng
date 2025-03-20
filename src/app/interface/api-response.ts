export interface CurrencyData {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}
