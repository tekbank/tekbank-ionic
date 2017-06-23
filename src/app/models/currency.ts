export interface CurrencyConversionRequest {
  from: string;
  to: string;
}

export interface CurrencyConversion {
  from: string;
  to: string;
  amount: number;
  rate: number;
  timestamp: Date;
}
