import { Component } from '@angular/core';
import { ServiceinvoiceService } from '../serviceinvoice.service';
import { InvoiceList } from '../invoice';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.scss'],
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
  ],
})
export class AppInvoiceViewComponent {
  id: any;
  invoiceDetail: InvoiceList;
  displayedColumns: string[] = ['itemName', 'unitPrice', 'unit', 'total'];

  constructor(
    activatedRouter: ActivatedRoute,
    private invoiceService: ServiceinvoiceService
  ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    this.invoiceDetail = this.invoiceService
      .getInvoiceList()
      .filter((x) => x?.id === +this.id)[0];
  }
}
