import { Component, ViewChild, inject, signal } from '@angular/core';
import { ServiceInvoiceService } from '../serviceinvoice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterModule } from '@angular/router';
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
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
})
export class AppInvoiceListComponent {
  // Public properties
  public displayedColumns = signal<string[]>([
    'position',
    'order_date',
    'due_date',
    'order_status',
    'grand_total_price',
    'view_options',
  ]);
  public dataSource = new MatTableDataSource<PeriodicElement>();
  public invoices = signal<any[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<string | null>(null);

  // Private properties
  private serviceInvoice = inject(ServiceInvoiceService);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchControl = new FormControl('');

  ngOnInit() {
    this.fetchUserInvoices();

    this.searchControl.valueChanges.subscribe((value) => {
      this.applyFilter(value);
    });
  }

  async fetchUserInvoices() {
    this.loading.set(true);
    this.serviceInvoice
      .getUserInvoices()
      .then((result) => {
        this.invoices.set(result);
        this.loading.set(false);
        this.error.set(null);
        this.dataSource = new MatTableDataSource(this.invoices());
        this.dataSource.paginator = this.paginator;
      })
      .catch((error) => {
        this.loading.set(false);
        this.error.set(`Failed to load invoices: ${error}`);

        // alert(`Failed to load invoices: ${error}`);
      });
  }

  public deleteInvoice(id: string) {
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
