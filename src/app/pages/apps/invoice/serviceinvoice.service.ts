import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { InvoiceList } from './invoice';
import { invoceLists } from './invoice-data';

@Injectable({
  providedIn: 'root',
})
export class ServiceinvoiceService {
  private invoiceList: InvoiceList[] = [];

  private getInvoice(): any {
    return from(invoceLists);
  }

  constructor() {
    this.getInvoice().subscribe((data: any) => this.invoiceList.push(data));
  }

  public getInvoiceList(): InvoiceList[] {
    return this.invoiceList;
  }
  public deleteInvoice(id: number): void {
    this.invoiceList = this.invoiceList.filter((CId) => CId.id !== id);
  }
  public addInvoice(invoice: InvoiceList): void {
    this.invoiceList.splice(0, 0, invoice);
  }
  public updateInvoice(id: number, invoice: InvoiceList): void {
    const element = this.invoiceList.filter((x) => x.id === id);
    const index: number = this.invoiceList.indexOf(element[0]);
    this.invoiceList[index] = invoice;
  }
}
