import { Component, inject, signal, computed } from '@angular/core';
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
import { TablerIconsModule } from 'angular-tabler-icons';
import { ToastrService } from 'ngx-toastr';
import { LucideAngularModule } from 'lucide-angular';

interface OrderStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    LucideAngularModule
  ],
})
export class AppAddInvoiceComponent {
  // Public properties
  public addInvoiceForm!: FormGroup;
  public loading = signal<boolean>(false);
  public phoneNumber = signal<string>('^(+d{1,3}[- ]?)?d{10}$');
  public currencies = signal<{ code: string; name: string }[]>([]);
  public orders = signal<OrderStatus[]>([
    { value: 'pending', viewValue: 'Pending' },
    { value: 'shipped', viewValue: 'Shipped' },
    { value: 'delivered', viewValue: 'Delivered' },
  ]);
  // Computed signals
  public readonly unitTotals = computed(() =>
    this.itemDetailsSignal().map(
      (item) => (item.item_unit_price || 0) * (item.item_units || 0)
    )
  );

  public readonly grandTotal = computed(() =>
    this.unitTotals().reduce((acc: any, curr) => acc + curr, 0.0)
  );

  // Private properties
  private invoiceService = inject(ServiceInvoiceService);
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private router = inject(Router);
  private itemDetailsSignal = signal<any[]>([]);

  // Constructor
  constructor() {
    this.addInvoiceForm = this.fb.group({
      order_status: [''],
      order_date: [''],
      from_business_name: ['', Validators.required],
      from_email: ['', [Validators.email]],
      from_address: [''],
      from_phone_number: [null],
      from_invoice_number: [''],
      to_client_name: ['', Validators.required],
      to_email: ['', [Validators.email]],
      to_address: [''],
      to_phone_number: [null],
      due_date: [''],
      grand_total_price: [this.grandTotal()],
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
    });
    this.addDetails();
    // Sync signal after form is ready
    this.itemDetails().valueChanges.subscribe((val) => {
      this.itemDetailsSignal.set(val);
    });

    this.itemDetails().valueChanges.subscribe(() => {
      const total = this.grandTotal();
      this.addInvoiceForm
        .get('grand_total_price')
        ?.setValue(total, { emitEvent: false });
    });
  }

  // Life cycle hooks
  ngOnInit(): void {
    this.getAllCurrencies();
  }

  // Public methods
  public itemDetails(): FormArray {
    return this.addInvoiceForm.get('item_details') as FormArray;
  }

  public addDetails() {
    const itemDetail = this.fb.group({
      item_description: new FormControl(''),
      item_unit_price: new FormControl(''),
      item_units: new FormControl(''),
      unit_total_price: new FormControl(''),
    });
    this.itemDetails().push(itemDetail);
  }

  public removeDetails(i: number) {
    this.itemDetails().removeAt(i);
  }

  public async onSubmit() {
    if (this.addInvoiceForm.valid) {
      const formValue = this.addInvoiceForm.value;
      this.loading.set(true); // disable the button
      try {
        const result = await this.invoiceService.submitInvoiceWithItems(
          formValue
        );

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

  // Private methods
  private getAllCurrencies() {
    this.invoiceService.getCurrencies().subscribe((data) => {
      this.currencies.set(data);
    });
  }
}
