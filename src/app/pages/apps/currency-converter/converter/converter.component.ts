import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ConverterService } from '../converter.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [MaterialModule, CommonModule, MatButtonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class AppConverterComponent {
  selectedCategory = 'All';
  currencyService = inject(ConverterService);
  amountValueFrankFurther = signal('');
  fromValueFrankFurther = signal('');
  toValueFrankFurther = signal('');
  amountValueExchangeRate = signal('');
  fromValueExchangeRate = signal('');
  toValueExchangeRate = signal('');
  // amount = signal<number>(1);
  // fromCurrency = signal<string>('USD');
  // toCurrency = signal<string>('EUR');
  resultFrankFurther = signal<number | null>(null);
  resultExchangeRate = signal<number | null>(null);
  fromCurrencyFrankFurther = signal<string | null>(null);
  fromCurrencyExchangeRate = signal<string | null>(null);
  toCurrencyFrankFurther = signal<string | null>(null);
  toCurrencyExchangeRate = signal<string | null>(null);
  frankFurtherCurrencies = [
    'AUD',
    'BGN',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'ISK',
    'JPY',
    'KRW',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PHP',
    'PLN',
    'RON',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'USD',
    'ZAR',
  ];

  exchangeRateCurrencies = [
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYN',
    'BZD',
    'CAD',
    'CDF',
    'CHF',
    'CLP',
    'CNY',
    'COP',
    'CRC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'FOK',
    'GBP',
    'GEL',
    'GGP',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'IMP',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JEP',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KID',
    'KMF',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLE',
    'SOS',
    'SRD',
    'SSP',
    'STN',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TVD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'UYU',
    'UZS',
    'VES',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XCD',
    'XDR',
    'XOF',
    'XPF',
    'YER',
    'ZAR',
    'ZMW',
    'ZWL',
  ];

  onSubmitFrankFurther() {
    console.log(this.amountValueFrankFurther());
    console.log(this.fromValueFrankFurther());
    console.log(this.toValueFrankFurther());

    this.currencyService.conversionParameters(
      this.amountValueFrankFurther(),
      this.fromValueFrankFurther(),
      this.toValueFrankFurther()
    );

    this.currencyService.frankConvertCurrency().subscribe((response) => {
      console.log(response);
      this.resultFrankFurther.set(response.rates[this.toValueFrankFurther()]);
      this.fromCurrencyFrankFurther.set(response.base);
      this.toCurrencyFrankFurther.set(this.toValueFrankFurther());
      console.log(this.toValueFrankFurther());
    });
  }

  onSubmitExchangeRate() {
    console.log(this.amountValueExchangeRate());
    console.log(this.fromValueExchangeRate());
    console.log(this.toValueExchangeRate());

    this.currencyService.conversionParameters(
      this.amountValueExchangeRate(),
      this.fromValueExchangeRate(),
      this.toValueExchangeRate()
    );

    this.currencyService.exchangeRateConvertCurrency().subscribe((response) => {
      console.log(response);
      this.resultExchangeRate.set(response.conversion_result);
      this.fromCurrencyExchangeRate.set(response.base_code);
      this.toCurrencyExchangeRate.set(response.target_code);
    });
  }
}
