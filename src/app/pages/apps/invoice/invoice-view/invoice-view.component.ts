import { Component, inject, Input, signal } from '@angular/core';
import { ServiceinvoiceService } from '../serviceinvoice.service';
import { RouterModule } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';
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
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TablerIconsModule,
  ],
})
export class AppInvoiceViewComponent {
  @Input() id = '';
  displayedColumns: string[] = ['itemName', 'unitPrice', 'unit', 'total'];
  private service = inject(ServiceinvoiceService);
  invoiceData = signal('');

  ngOnInit() {
    console.log(this.id);
    if (this.id) {
      this.service.getInvoiceById(Number(this.id)).then((res) => {
        this.invoiceData.set(res);
        console.log(this.invoiceData());
      });
    }
  }
}
