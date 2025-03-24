import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { FrankFurtherCurrencyData } from '../../../interface/api-response';
import { ExchangeRateCurrencyData } from '../../../interface/api-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  http = inject(HttpClient);
  amountX = signal('');
  fromX = signal('');
  toX = signal('');

  frankConvertCurrency() {
    console.log(this.amountX());
    console.log(this.fromX());
    console.log(this.toX());

    return this.http.get<FrankFurtherCurrencyData>(
      `${
        environment.FRANKFURTER_API_URL
      }/latest?base=${this.fromX()}&symbols=${this.toX()}&amount=${this.amountX()}`
    );
  }

  exchangeRateConvertCurrency() {
    console.log(this.amountX());
    console.log(this.fromX());
    console.log(this.toX());

    return this.http.get<ExchangeRateCurrencyData>(
      `${
        environment.EXCHANGE_RATE_API_URL
      }/${this.fromX()}/${this.toX()}/${this.amountX()}`
    );
  }

  conversionParameters(amount: string, from: string, to: string) {
    this.amountX.set(amount);
    this.fromX.set(from);
    this.toX.set(to);
  }
}
