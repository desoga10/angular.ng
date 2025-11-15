import { Component, Input, ViewChild, inject } from '@angular/core';
import { ServiceInvoiceService } from '../serviceinvoice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatProgressSpinnerModule,
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

  private serviceInvoice = inject(ServiceInvoiceService);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  invoices: any[] = [];
  loading = true;
  error: string | null = null;
  searchControl = new FormControl('');

  ngOnInit() {
    this.fetchUserInvoices();

    this.searchControl.valueChanges.subscribe(value => {
      this.applyFilter(value);
    });
  }

  async fetchUserInvoices() {
    this.serviceInvoice
      .getUserInvoices()
      .then((result) => {
        console.log(result);
        this.invoices = result;
        this.loading = false;
        this.error = null;
        this.dataSource = new MatTableDataSource(this.invoices);
        this.dataSource.paginator = this.paginator;
      })
      .catch((error) => {
        this.loading = false;
          this.error = `Failed to load invoices: ${error}`;

        // alert(`Failed to load invoices: ${error}`);
      });
  }

  deleteInvoice(id: string) {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.serviceInvoice.deleteInvoice(id).then(({ error }) => {
        if (error) {
          alert('Error deleting invoice: ' + error.message);
        } else {
          alert('Invoice deleted successfully!');
          this.fetchUserInvoices();
        }
      });
    }
  }
  applyFilter(value: string | null): void {
    this.dataSource.filter = (value ?? '').trim().toLowerCase();
  }

}
