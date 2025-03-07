export class order {
  constructor(
    public itemName: string = '',
    public unitPrice: number = 0,
    public units: number = 0,
    public unitTotalPrice: number = 0,
  ) {}
}

export class InvoiceList {
  constructor(
    public id: number = 0,
    public billFrom: string = '',
    public billFromEmail: string = 'from@mail.com',
    public billFromAddress: string = '',
    public billFromPhone: number = 758269842,
    public billFromFax: number = 0,
    public billTo: string = '',
    public billToEmail: string = 'to@mail.com',
    public billToAddress: string = '',
    public billToPhone: number = 58258855,
    public billToFax: number = 0,
    public orders: order[] = [],
    public orderDate: Date = new Date(),
    public totalCost: number = 0,
    public vat: number = 0,
    public grandTotal: number = 0,
    public status: string = '',
    public completed: boolean = false,
    public isSelected: boolean = false,
  ) {}
}
