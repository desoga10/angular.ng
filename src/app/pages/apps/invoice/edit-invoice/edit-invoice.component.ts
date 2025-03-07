import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceinvoiceService } from '../serviceinvoice.service';
import { InvoiceList, order } from '../invoice';
import {
  UntypedFormGroup,
  UntypedFormArray,
  UntypedFormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
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
  invoice: InvoiceList;

  addForm: UntypedFormGroup | any;
  subTotal = 0;
  vat = 0;
  grandTotal = 0;

  constructor(
    activatedRouter: ActivatedRoute,
    private invoiceService: ServiceinvoiceService,
    private router: Router,
    private fb: UntypedFormBuilder,
    public dialog: MatDialog
  ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    this.invoice = this.invoiceService
      .getInvoiceList()
      .filter((x) => x.id === +this.id)[0];
    this.subTotal = this.invoice?.totalCost;
    this.vat = this.invoice?.vat;
    this.grandTotal = this.invoice?.grandTotal;

    this.addForm = this.fb.group({
      item: this.fb.array([this.itemControl()]),
    });
    this.fillAddControls();
  }

  itemControl(): UntypedFormGroup {
    return this.fb.group({
      itemName: ['', Validators.required],
      itemCost: ['', Validators.required],
      itemSold: ['', Validators.required],
      itemTotal: ['0'],
    });
  }

  fillAddControls(): void {
    this.addForm.setControl('item', this.setItem(this.invoice?.orders));
  }

  setItem(order: any): UntypedFormArray {
    const fa = new UntypedFormArray([]);
    order?.forEach((s: any) => {
      fa.push(
        this.fb.group({
          itemName: s.itemName,
          itemCost: s.unitPrice,
          itemSold: s.units,
          itemTotal: s.unitTotalPrice,
        })
      );
    });
    return fa;
  }

  btnAddItemClick(): void {
    (<UntypedFormArray>this.addForm.get('item')).push(this.itemControl());
  }

  btnRemoveClick(i: number): void {
    let totalCostOfItem =
      this.addForm.get('item')?.value[i].itemCost *
      this.addForm.get('item')?.value[i].itemSold;
    this.subTotal = this.subTotal - totalCostOfItem;
    this.vat = this.subTotal / 10;
    this.grandTotal = this.subTotal + this.vat;
    (<UntypedFormArray>this.addForm.get('item')).removeAt(i);
  }

  //////////////////////////////////////////////////////////////////////////////

  itemsChanged(): void {
    let total: number = 0;
    for (
      let t = 0;
      t < (<UntypedFormArray>this.addForm.get('item')).length;
      t++
    ) {
      if (
        this.addForm.get('item')?.value[t].itemCost != '' &&
        this.addForm.get('item')?.value[t].itemSold
      ) {
        total =
          this.addForm.get('item')?.value[t].itemCost *
            this.addForm.get('item')?.value[t].itemSold +
          total;
      }
    }
    this.subTotal = total;
    this.vat = this.subTotal / 10;
    this.grandTotal = this.subTotal + this.vat;
  }

  saveDetail(): void {
    this.invoice.grandTotal = this.grandTotal;
    this.invoice.totalCost = this.subTotal;
    this.invoice.vat = this.vat;
    this.invoice.orders = [];
    // tslint:disable-next-line - Disables all
    for (
      let t = 0;
      t < (<UntypedFormArray>this.addForm.get('item')).length;
      t++
    ) {
      const o: order = new order();
      o.itemName = this.addForm.get('item')?.value[t].itemName;
      o.unitPrice = this.addForm.get('item')?.value[t].itemCost;
      o.units = this.addForm.get('item')?.value[t].itemSold;
      o.unitTotalPrice = o.units * o.unitPrice;
      this.invoice.orders.push(o);
    }

    this.dialog.open(OkDialogComponent);
    this.invoiceService.updateInvoice(this.invoice?.id, this.invoice);
    this.router.navigate(['/apps/invoice']);
  }
}
