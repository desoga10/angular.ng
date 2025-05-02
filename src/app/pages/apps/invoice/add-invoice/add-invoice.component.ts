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
import { ServiceinvoiceService } from '../serviceinvoice.service';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ToastrService } from 'ngx-toastr';

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
  ],
})
export class AppAddInvoiceComponent {
  private invoiceService = inject(ServiceinvoiceService);
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private router = inject(Router);
  addInvoiceForm!: FormGroup;
  itemDetailsSignal = signal<any[]>([]);
  phoneNumber = '^(+d{1,3}[- ]?)?d{10}$';

  // Computed signals
  unitTotals = computed(() =>
    this.itemDetailsSignal().map(
      (item) => (item.item_unit_price || 0) * (item.item_units || 0)
    )
  );

  grandTotal = computed(() =>
    this.unitTotals().reduce((acc: any, curr) => acc + curr, 0)
  );
  constructor() {
    this.addInvoiceForm = this.fb.group({
      order_status: ['', Validators.required],
      order_date: ['', Validators.required],
      from_business_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      from_address: ['', Validators.required],
      from_phone_number: ['', Validators.required],
      from_invoice_number: ['', Validators.required],
      from_bank_account_name: ['', Validators.required],
      to_client_name: ['', Validators.required],
      to_email: ['', [Validators.required, Validators.email]],
      to_address: ['', Validators.required],
      to_phone_number: ['', Validators.required],
      due_date: ['', Validators.required],
      grand_total_price: [this.grandTotal()],
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

  itemDetails(): FormArray {
    return this.addInvoiceForm.get('item_details') as FormArray;
  }

  addDetails() {
    const itemDetail = this.fb.group({
      item_description: new FormControl('', Validators.required),
      item_unit_price: new FormControl('', Validators.required),
      item_units: new FormControl('', Validators.required),
      unit_total_price: new FormControl('', Validators.required),
    });
    this.itemDetails().push(itemDetail);
  }

  removeDetails(i: number) {
    this.itemDetails().removeAt(i);
  }

  async onSubmit() {
    if (this.addInvoiceForm.valid) {
      const formValue = this.addInvoiceForm.value;

      try {
        const result = await this.invoiceService.submitInvoiceWithItems(
          formValue
        );

        // ✅ Show success toast
        this.toastr.success('Invoice created successfully!', 'Success');

        // Optional: navigate or reset form
        this.addInvoiceForm.reset();
        this.itemDetails().clear();
        this.addDetails();
        this.router.navigate(['/apps/invoice']);
      } catch (err) {
        // ❌ Show error toast
        this.toastr.error(
          'Failed to create invoice. Please try again.',
          'Error'
        );
      }
    } else {
      this.toastr.warning(
        'Please complete all required fields.',
        'Form Incomplete'
      );
    }
  }
}
