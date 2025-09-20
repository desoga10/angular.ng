import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ServiceInvoiceService } from '../serviceinvoice.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
  ],
})
export class AppEditInvoiceComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  invoiceService = inject(ServiceInvoiceService);
  fb = inject(FormBuilder);
  invoiceForm!: FormGroup;

  invoiceId!: number;

  loading = signal(false);
  currencies = signal<{ code: string; name: string }[]>([]);
  orders = ['Draft', 'Sent', 'Paid', 'Overdue'];

  paymentFields = [
    { label: 'Bank Account Name', control: 'from_bank_account_name' },
    { label: 'Bank Account Number', control: 'from_bank_account_number' },
    { label: 'Sort Code', control: 'sort_code' },
    { label: 'SWIFT', control: 'swift' },
    { label: 'IBAN', control: 'iban' },
    { label: 'Routing Number', control: 'routing_number' },
    { label: 'Account Type', control: 'account_type' },
    { label: 'Beneficiary Name', control: 'beneficiary_name' },
    { label: 'Bank Address', control: 'bank_address' },
  ];

  ngOnInit() {
    this.invoiceId = +this.route.snapshot.paramMap.get('id')!;
    this.initializeForm();
    this.loadInvoice(); // This is called AFTER form is initialized
    this.loadCurrencies();
  }

  private initializeForm() {
    this.invoiceForm = this.fb.group({
      order_status: ['', Validators.required],
      order_date: ['', Validators.required],
      from_business_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      from_address: [''],
      from_phone_number: [''],
      from_invoice_number: ['', Validators.required],
      to_client_name: ['', Validators.required],
      to_email: ['', [Validators.required, Validators.email]],
      to_address: [''],
      to_phone_number: [''],
      due_date: ['', Validators.required],
      grand_total_price: [0],
      from_bank_account_name: [''],
      from_bank_account_number: [''],
      currency: ['', Validators.required],
      beneficiary_name: [''],
      bank_address: [''],
      sort_code: [''],
      swift: [''],
      iban: [''],
      routing_number: [''],
      account_type: [''],
      item_details: this.fb.array([]),
    });

    console.log('Form initialized:', this.invoiceForm.value);
  }

  get itemDetails(): FormArray {
    // Safely access item_details, though at this point invoiceForm should be defined
    return this.invoiceForm?.get('item_details') as FormArray;
  }

  loadCurrencies() {
    this.invoiceService
      .getCurrencies()
      .subscribe((data) => this.currencies.set(data));
  }

  addDetails() {
    this.itemDetails.push(
      this.fb.group({
        item_description: ['', Validators.required],
        item_unit_price: [0, [Validators.required, Validators.min(0.01)]],
        item_units: [0, [Validators.required, Validators.min(1)]],
      })
    );
  }

  removeDetails(index: number) {
    if (this.itemDetails.length > 1) {
      this.itemDetails.removeAt(index);
    } else {
      const lastItem = this.itemDetails.at(0);
      lastItem.reset({
        item_description: '',
        item_unit_price: 0,
        item_units: 0,
      });
    }
  }

  unitTotals(): number[] {
    if (!this.itemDetails || !this.itemDetails.controls) {
      return [];
    }
    return this.itemDetails.controls.map((control) => {
      const price = control.get('item_unit_price')?.value || 0;
      const units = control.get('item_units')?.value || 0;
      return price * units;
    });
  }

  grandTotal = computed(() =>
    this.unitTotals().reduce((acc, curr) => acc + curr, 0)
  );

  async loadInvoice() {
    try {
      if (this.invoiceId) {
        console.log('Attempting to load invoice with ID:', this.invoiceId);
        const invoice = await this.invoiceService.getInvoiceById(
          this.invoiceId
        );

        if (invoice) {
          console.log('Invoice data received:', invoice);

          // Patch main form values
          // IMPORTANT: Ensure keys in 'invoice' object EXACTLY match formControlNames
          this.invoiceForm.patchValue({
            order_status: invoice.order_status,
            order_date: invoice.order_date, // Ensure format matches date input (YYYY-MM-DD)
            from_business_name: invoice.from_business_name,
            from_email: invoice.from_email,
            from_address: invoice.from_address,
            from_phone_number: invoice.from_phone_number,
            from_invoice_number: invoice.from_invoice_number,
            to_client_name: invoice.to_client_name,
            to_email: invoice.to_email,
            to_address: invoice.to_address,
            to_phone_number: invoice.to_phone_number,
            due_date: invoice.due_date, // Ensure format matches date input (YYYY-MM-DD)
            grand_total_price: invoice.grand_total_price,
            from_bank_account_name: invoice.from_bank_account_name,
            from_bank_account_number: invoice.from_bank_account_number,
            currency: invoice.currency,
            beneficiary_name: invoice.beneficiary_name,
            bank_address: invoice.bank_address,
            sort_code: invoice.sort_code,
            swift: invoice.swift,
            iban: invoice.iban,
            routing_number: invoice.routing_number,
            account_type: invoice.account_type,
          });

          console.log(
            'Form after patching main values:',
            this.invoiceForm.value
          );

          // Clear existing items before populating with fetched data
          this.itemDetails.clear();
          console.log(
            'itemDetails cleared. Current length:',
            this.itemDetails.length
          );

          // Populate item_details FormArray
          if (
            invoice.item_details &&
            Array.isArray(invoice.item_details) &&
            invoice.item_details.length > 0
          ) {
            console.log(
              'Populating item_details from fetched data:',
              invoice.item_details
            );
            invoice.item_details.forEach((item: any) => {
              this.itemDetails.push(
                this.fb.group({
                  // Confirm these property names exactly match your API response
                  item_description: [
                    item.item_description || '',
                    Validators.required,
                  ],
                  item_unit_price: [
                    item.item_unit_price || 0,
                    [Validators.required, Validators.min(0.01)],
                  ],
                  item_units: [
                    item.item_units || 0,
                    [Validators.required, Validators.min(1)],
                  ],
                })
              );
            });
            console.log(
              'itemDetails populated. New length:',
              this.itemDetails.length
            );
          } else {
            console.log(
              'Invoice item_details is empty or not an array. Adding one default item row.'
            );
            this.addDetails();
          }
        } else {
          console.warn(
            `Invoice data is empty or null for ID: ${this.invoiceId}. Initializing with default item.`
          );
          this.addDetails(); // Ensure at least one row for a "new" empty invoice
        }
      } else {
        console.log(
          'No invoice ID found in URL. Assuming new invoice. Adding one default item row.'
        );
        this.addDetails(); // Add one default empty row for a new invoice
      }
    } catch (err) {
      console.error('Failed to load invoice:', err);
      alert(
        'Failed to load invoice. Please check the browser console for more details.'
      );
      this.addDetails(); // Ensure one row even on load error
    }
  }

  async updateInvoice() {
    if (this.invoiceForm.invalid) {
      alert('Please fill in all required fields and correct any errors.');
      this.invoiceForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    const currentGrandTotal = this.grandTotal();
    this.invoiceForm.patchValue({ grand_total_price: currentGrandTotal });

    const updatedInvoice = this.invoiceForm.value;

    try {
      await this.invoiceService.editInvoice(this.invoiceId, updatedInvoice);
      alert('Invoice updated successfully! 🎉');
      this.router.navigate(['/apps/invoice']);
    } catch (err) {
      console.error('Update failed:', err);
      alert(
        'Update failed: ' +
          (err instanceof Error ? err.message : 'Unknown error')
      );
    } finally {
      this.loading.set(false);
    }
  }
}
