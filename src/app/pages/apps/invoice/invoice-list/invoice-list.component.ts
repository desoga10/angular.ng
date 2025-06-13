import { Component, Input, ViewChild, inject } from '@angular/core';
import { ServiceinvoiceService } from '../serviceinvoice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ActivatedRoute, RouterModule } from '@angular/router';

export interface PeriodicElement {
  id: number;
  order_date: string;
  due_date: string;
  order_status: string;
  grand_total_price: number;
}

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
    MatPaginatorModule,
  ],
})
export class AppInvoiceListComponent {
  displayedColumns: string[] = [
    'position',
    'order_date',
    'due_date',
    'order_status',
    'grand_total_price',
    'view_options',
  ];

  dataSource = new MatTableDataSource<PeriodicElement>();

  private service = inject(ServiceinvoiceService);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  invoices: any[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.fetchUserInvoices();
  }

  async fetchUserInvoices() {
    this.service
      .getUserInvoices()
      .then((result) => {
        console.log(result);
        this.invoices = result;
        this.loading = false;
        this.dataSource = new MatTableDataSource(this.invoices);
        this.dataSource.paginator = this.paginator;
      })
      .catch((error) => {
        this.loading = false;
        alert(`Failed to load invoices: ${error}`);
      });
  }
}
