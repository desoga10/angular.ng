import { Component, inject, signal, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ConverterService } from '../converter.service';
import { MatButtonModule } from '@angular/material/button';
import { ServiceInvoiceService } from '../../invoice/serviceinvoice.service';

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
  invoiceService = inject(ServiceInvoiceService);
  amountValueFrankFurther = signal('');
  fromValueFrankFurther = signal('');
  toValueFrankFurther = signal('');
  amountValueExchangeRate = signal('');
  fromValueExchangeRate = signal('');
  toValueExchangeRate = signal('');
  currencies = signal<{ code: string; name: string }[]>([]);
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

  ngOnInit(): void {
    this.getAllCurrencies();
  }

  getAllCurrencies() {
    this.invoiceService.getCurrencies().subscribe((data) => {
      this.currencies.set(data);
      console.log(this.currencies());
    });
  }

  onSubmitFrankFurther() {
    this.currencyService.conversionParameters(
      this.amountValueFrankFurther(),
      this.fromValueFrankFurther(),
      this.toValueFrankFurther()
    );

    this.currencyService.frankConvertCurrency().subscribe((response) => {
      this.resultFrankFurther.set(response.rates[this.toValueFrankFurther()]);
      this.fromCurrencyFrankFurther.set(response.base);
      this.toCurrencyFrankFurther.set(this.toValueFrankFurther());
    });
  }

  onSubmitExchangeRate() {
    this.currencyService.conversionParameters(
      this.amountValueExchangeRate(),
      this.fromValueExchangeRate(),
      this.toValueExchangeRate()
    );

    this.currencyService.exchangeRateConvertCurrency().subscribe((response) => {
      this.resultExchangeRate.set(response.conversion_result);
      this.fromCurrencyExchangeRate.set(response.base_code);
      this.toCurrencyExchangeRate.set(response.target_code);
    });
  }

  ngAfterViewInit(): void {
    const container = document.getElementById('oanda_ecc_container');
    if (container) {
      container.innerHTML = `
        <div id="oanda_ecc">
          <span style="color:#000; text-decoration:none; font-size:9px; float:left;">
            Currency Converter
            <a id="oanda_cc_link" style="color:#000; font-size:9px;" href="https://www.oanda.com/currency/converter/">by OANDA</a>
          </span>
        </div>
      `;

      const script = document.createElement('script');
      script.src =
        'https://www.oanda.com/embedded/converter/get/b2FuZGFlY2N1c2VyLy9kZWZhdWx0/?lang=en';
      script.async = true;
      container.appendChild(script);
    }
  }
}
