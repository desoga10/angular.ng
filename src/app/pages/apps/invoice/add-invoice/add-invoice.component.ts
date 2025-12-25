import { Component, inject, signal, computed, effect } from '@angular/core';
import {
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { ServiceInvoiceService } from '../serviceinvoice.service';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ToastrService } from 'ngx-toastr';
import { LucideAngularModule } from 'lucide-angular';
import { TaxService } from 'src/app/services/tax.service';
import { UserTaxSettings } from 'src/app/interface/api-response';


interface OrderStatus {
  value: string;
  viewValue: string;
  tax_enabled?: boolean;
}


@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    LucideAngularModule
  ],
})
export class AppAddInvoiceComponent {
  private invoiceService = inject(ServiceInvoiceService);
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private router = inject(Router);
  private taxService = inject(TaxService);
  addInvoiceForm!: FormGroup;
  loading = signal(false);
  itemDetailsSignal = signal<any[]>([]);
  phoneNumber = '^(+d{1,3}[- ]?)?d{10}$';
  currencies = signal<{ code: string; name: string }[]>([]);
  userTaxEnabled = signal(true);

  orders: OrderStatus[] = [
    { value: 'pending', viewValue: 'Pending' },
    { value: 'shipped', viewValue: 'Shipped' },
    { value: 'delivered', viewValue: 'Delivered' },
  ];

  // Computed signals
  unitTotals = computed(() =>
    this.itemDetailsSignal().map(
      (item) => (item.item_unit_price || 0) * (item.item_units || 0)
    )
  );


 subtotal = computed(() =>
    this.unitTotals().reduce((acc: any, curr) => acc + curr, 0.0)
   );

   

  /*   grandTotal = computed(() =>
   this.unitTotals().reduce((acc: any, curr) => acc + curr, 0.0)
  );
*/

  constructor() {
    this.addInvoiceForm = this.fb.group({
      order_status: [''],
      order_date: [''],
      from_business_name: ['', Validators.required],
      from_email: ['', [Validators.email]],
      from_address: [''],
      from_phone_number: [''],
      from_invoice_number: [''],
      to_client_name: ['', Validators.required],
      to_email: ['', [Validators.email]],
      to_address: [''],
      to_phone_number: [''],
      due_date: [''],
      subtotal_price: [0],  
      grand_total_price: [0/*this.grandTotal()*/],
      from_bank_account_name: [''],
      from_bank_account_number: [''],
      currency: [''],
      beneficiary_name: [''],
      bank_address: [''],
      sort_code: [''],
      swift: [''],
      iban: [''],
      routing_number: [''],
      account_type: [''],
      item_details: this.fb.array([]),
      taxEnabled: [true], // default on
      tax_name: ['VAT'],
      tax_rate: [0],
      tax_amount: [0], // will be calculated

    });
    this.addDetails();
    // Sync signal after form is ready
    this.itemDetails().valueChanges.subscribe((val) => {
      this.itemDetailsSignal.set(val);
      this.updateTotals();
    });

    
  }

  ngOnInit(): void{
    this.getAllCurrencies();
   /* this.loadUserTaxSettings();*/
   this.taxService.getUserTaxSettings().subscribe({
    next: (settings: UserTaxSettings) => {
      this.addInvoiceForm.patchValue({
        tax_name: settings.tax_name ?? 'VAT',
        tax_rate: settings.tax_rate ?? 0,
        taxEnabled: settings.tax_enable ?? true 
      });
      this.userTaxEnabled.set(settings.tax_enable ?? true);
      this.updateTotals();
    },
    error: (err) => {
      console.error('Error fetching tax settings:', err);
      this.addInvoiceForm.patchValue({ tax_name: 'VAT', tax_rate: 0 });
      this.userTaxEnabled.set(true);
      this.updateTotals();
    }
  });

}
  

  getAllCurrencies() {
    this.invoiceService.getCurrencies().subscribe((data) => {
      this.currencies.set(data);
    });
  }
   
 /* loadUserTaxSettings() {
    this.taxService.getUserTaxSettings().subscribe((settings: any) => {
      this.addInvoiceForm.patchValue({
        tax_name: settings.tax_name || 'VAT',
        tax_rate: settings.tax_rate || 0,
      });

      // recalculate totals after loading tax settings
      this.updateTotals();
    });
  }
*/

  itemDetails(): FormArray {
    return this.addInvoiceForm.get('item_details') as FormArray;
  }

  addDetails() {
    const itemDetail = this.fb.group({
      item_description: new FormControl(''),
      item_unit_price: new FormControl(''),
      item_units: new FormControl(''),
      unit_total_price: new FormControl(''),
    });
    this.itemDetails().push(itemDetail);
  }

  removeDetails(i: number) {
    this.itemDetails().removeAt(i);
    this.updateTotals();
  }
  updateTotals() {
   /* const subtotal = this.grandTotal();*/
    // const subtotal = typeof this.grandTotal === 'function' ? this.grandTotal() : this.grandTotal;
    const subtotal = this.subtotal();  
    
    const { tax_name, tax_rate, taxEnabled  } = this.addInvoiceForm.value;
   /* const settings = {
      tax_rate: this.addInvoiceForm.get('tax_rate')?.value || 0,
      tax_name: this.addInvoiceForm.get('tax_name')?.value || '',
    };*/

   
    const { taxAmount, grandTotal } = this.taxService.calculate(subtotal, /*settings*/{ tax_name, tax_rate }, taxEnabled );
    this.addInvoiceForm.get('tax_amount')?.setValue(taxAmount, { emitEvent: false });
    this.addInvoiceForm.get('grand_total_price')?.setValue(grandTotal, { emitEvent: false });

  }

  async onSubmit() {
    if (this.addInvoiceForm.valid) {
      const formValue = this.addInvoiceForm.value;

     // 1️⃣ Get subtotal (existing grand_total_price WITHOUT tax)
    //const subtotal = formValue.grand_total_price || 0;

    // 2️⃣ Tax settings from your form
   /* const taxName = formValue.taxName;
    const taxRate = formValue.taxRate;*/
    const { tax_name, tax_rate ,taxEnabled, ...rest} = formValue;

    // 3️⃣ Final calculation using TaxService
  //  const { taxAmount, grandTotal } = this.taxService.calculate(
   //   subtotal,
    //  { tax_name /*: taxName*/, tax_rate/*: taxRate */}
   // );
    
   const payload = {
     ...rest,
     tax_name/*: taxName*/,
     tax_rate/*: taxRate*/,
    // tax_amount: taxAmount,
   //  grand_total_price: grandTotal, // NOW INCLUDES TAX
   tax_amount: this.addInvoiceForm.get('tax_amount')?.value,
        grand_total_price: this.addInvoiceForm.get('grand_total_price')?.value
   };
  // const payload = {
  //  ...formValue
  //};



      this.loading.set(true); // disable the button
      try {
        const result = await this.invoiceService.submitInvoiceWithItems(payload);
        //Show success toast
        this.toastr.success('Invoice created successfully!', 'Success');

        // Optional: navigate or reset form
        this.addInvoiceForm.reset();
        this.itemDetails().clear();
        // this.addDetails();
        this.router.navigate(['/apps/invoice']);
        } catch (err) {
        //Show error toast
        this.toastr.error(
          'Failed to create invoice. Please try again.',
          'Error'
        );
      } finally {
        this.loading.set(false); // enable the button
      }
    } else {
      this.toastr.warning(
        'Please complete all required fields.',
        'Form Incomplete'
      );
    }
  }
}
