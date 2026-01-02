import { Component, computed, inject, Input, signal } from '@angular/core';
import { ServiceInvoiceService } from '../serviceinvoice.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ViewInvoiceResponse } from 'src/app/interface/api-response';
import { StatusBadgeComponent } from 'src/app/components/status-badge/status-badge.component';
import { LucideAngularModule, House } from 'lucide-angular';
import { TaxService } from 'src/app/services/tax.service';
import { UserTaxSettings } from 'src/app/interface/api-response';

// import * as html2pdf from 'html2pdf.js';

declare const require: any;
const html2pdf = require('html2pdf.js');

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.scss'],
  standalone: true,

  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TablerIconsModule,
    StatusBadgeComponent,
    LucideAngularModule,
  ],
})
export class AppInvoiceViewComponent {
  readonly house = House;

  @Input() id = '';
  displayedColumns: string[] = ['itemName', 'unitPrice', 'unit', 'total'];
  private service = inject(ServiceInvoiceService);
  private taxService = inject(TaxService);

  items = computed(() => this.invoiceData().items);
  userTaxEnabled = signal(true); // default, will fetch real value later
  taxEnabledLoaded = signal(false);
  invoiceData = signal<ViewInvoiceResponse>({
    id: '',
    order_date: '',
    from_business_name: '',
    from_bank_name: '',
    from_bank_account_name: '',
    from_bank_account_number: '',
    account_type: '',
    beneficiary_name: '',
    bank_address: '',
    sort_code: '',
    iban: '',
    swift: '',
    routing_number: '',
    currency: 'USD',
    from_email: '',
    from_address: '',
    from_phone_number: '',
    from_invoice_number: '',
    to_client_name: '',
    to_email: '',
    to_address: '',
    to_phone_number: '',
    due_date: '',
    grand_total_price: 0,
    tax_name: 'Tax',
    tax_rate: 0,
    tax_amount: 0,
    items: [],
  });
  invoiceIndex = '';
  private route = inject(ActivatedRoute);

  taxAmountToShow = computed(() =>
    this.taxEnabledLoaded() && this.userTaxEnabled()
      ? this.invoiceData().tax_amount
      : 0
  );

  subtotal = computed(() =>
    this.taxEnabledLoaded() && this.userTaxEnabled()
      ? this.invoiceData().grand_total_price - this.invoiceData().tax_amount
      : this.invoiceData().grand_total_price
  );
  taxLabel = computed(
    () =>
      `${this.invoiceData().tax_name || 'Tax'} (${
        this.invoiceData().tax_rate || 0
      }%)`
  );

taxAmountToShow = computed(() =>
  this.taxEnabledLoaded() && this.userTaxEnabled() ? this.invoiceData().tax_amount : 0
);

  subtotal = computed(() =>  this.taxEnabledLoaded() && this.userTaxEnabled() 
  ? this.invoiceData().grand_total_price - this.invoiceData().tax_amount 
   : this.invoiceData().grand_total_price);
  taxLabel = computed(() => `${this.invoiceData().tax_name || 'Tax'} (${this.invoiceData().tax_rate || 0}%)`);

/*
 testStatuses = ['paid', 'unpaid', 'overdue', 'draft', 'shipped' , 'pending' , 'delivered'] as const;
testIndex = 0;*/

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.route.queryParams.subscribe((query) => {
      this.invoiceIndex = query['index'];
    });
    console.log(this.id);
    if (this.id) {
      this.service.getInvoiceById(Number(this.id)).then((res) => {
        this.invoiceData.set(res);
        console.log(this.invoiceData());
      });
    }
    this.taxService.getUserTaxSettings().subscribe({
      next: (settings: UserTaxSettings & { tax_enable?: boolean }) => {
        this.userTaxEnabled.set(settings.tax_enable ?? true);
        console.log('DEBUG tax_enable from API:', settings.tax_enable);
        this.taxEnabledLoaded.set(true);
      },
      error: (err) => {
        console.error(err);
        this.userTaxEnabled.set(true);
      },
    });

    /*
    this.invoiceData.set({
      ...this.invoiceData(),
      order_status: 'paid',
    });

    setInterval(() => {
      this.invoiceData.set({
        ...this.invoiceData(),
        order_status: this.testStatuses[this.testIndex],
      });
      this.testIndex = (this.testIndex + 1) % this.testStatuses.length;
    }, 2000);



*/
  }

  downloadPDF(): void {
    const html2pdf = require('html2pdf.js');

    // Hide the buttons temporarily
    const btns = document.getElementById('pdfButtons');
    if (btns) btns.classList.add('pdf-hidden');

    // Give Angular time to update the DOM
    setTimeout(() => {
      const element = document.getElementById('invoiceContent');

      const options = {
        margin: 0.5,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      html2pdf()
        .from(element)
        .set(options)
        .save()
        .then(() => {
          // Show the buttons again after PDF download
          if (btns) btns.classList.remove('pdf-hidden');
        });
    }, 100); // Wait a bit to ensure the DOM has updated
  }
}
