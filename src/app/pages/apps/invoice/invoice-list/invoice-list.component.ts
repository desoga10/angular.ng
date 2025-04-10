import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ServiceinvoiceService } from '../serviceinvoice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
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
export class AppInvoiceListComponent {
  allComplete: boolean = false;
  displayedColumns: string[] = [
    'chk',
    'id',
    'billFrom',
    'billTo',
    'totalCost',
    'status',
    'action',
  ];

  @ViewChild(MatSort) sort: MatSort = Object.create(null);
  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null);

  constructor(private invoiceService: ServiceinvoiceService) {}

  deleteInvoice(row: number): void {
    if (confirm('Are you sure you want to delete this record ?')) {
      // this.invoiceService.deleteInvoice(row);
      // this.invoiceList.data = this.invoiceList.data.filter(
      //   (invoice) => invoice.id !== row
      // );
    }
  }
}
