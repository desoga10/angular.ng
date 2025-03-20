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
  amountValue = signal('');
  fromValue = signal('');
  toValue = signal('');
  // amount = signal<number>(1);
  // fromCurrency = signal<string>('USD');
  // toCurrency = signal<string>('EUR');
  result = signal<number | null>(null);
  fromCurrency = signal<string | null>(null);
  toCurrency = signal<string | null>(null);
  currencies = [
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

  onSubmit() {
    console.log(this.amountValue());
    console.log(this.fromValue());
    console.log(this.toValue());

    this.currencyService.conversionParameters(
      this.amountValue(),
      this.fromValue(),
      this.toValue()
    );

    this.currencyService.convertCurrency().subscribe((response) => {
      console.log(response);
      this.result.set(response.rates[this.toValue()]);
      this.fromCurrency.set(response.base);
      this.toCurrency.set(this.toValue());
      console.log(this.toValue());
    });
  }
}
