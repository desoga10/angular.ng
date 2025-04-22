import { Component, inject } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { AddedDialogComponent } from './added-dialog/added-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';

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
  invoiceService = inject(ServiceinvoiceService);
  private fb = inject(FormBuilder);
  addInvoiceForm!: FormGroup;

  constructor(private router: Router, public dialog: MatDialog) {
    this.addInvoiceForm = this.fb.group({
      order_status: [''],
      order_date: [''],
      from_business_name: [''],
      from_email: [''],
      from_address: [''],
      from_phone_number: [''],
      from_invoice_number: [''],
      from_bank_account_name: [''],
      to_client_name: [''],
      to_email: [''],
      to_address: [''],
      to_phone_number: [''],
      due_date: [''],
      item_details: this.fb.array([]),
    });
    this.addDetails();
  }

  itemDetails(): FormArray {
    return this.addInvoiceForm.get('item_details') as FormArray;
  }

  addDetails() {
    const itemDetail = this.fb.group({
      item_description: new FormControl('', Validators.required),
      item_unit_price: new FormControl('', Validators.required),
      item_units: new FormControl('', Validators.required),
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
        // optionally navigate or show success message
      } catch (err: any) {
        alert('Error submitting invoice' + err.message);
      }
    }
  }
}
