import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceinvoiceService } from '../serviceinvoice.service';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';

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
  id: any;

  subTotal = 0;
  vat = 0;
  grandTotal = 0;

  constructor(
    activatedRouter: ActivatedRoute,
    private invoiceService: ServiceinvoiceService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }
}
