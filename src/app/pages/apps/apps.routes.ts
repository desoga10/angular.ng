import { Routes } from '@angular/router';

import { AppInvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { AppAddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { AppInvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AppEditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { authGuard } from 'src/app/auth.guard';
import { AppConverterComponent } from './currency-converter/converter/converter.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'invoice',
        canActivate: [authGuard],
        component: AppInvoiceListComponent,
        data: {
          title: 'Invoice',
        },
      },
      {
        path: 'converter',
        canActivate: [authGuard],
        component: AppConverterComponent,
        data: {
          title: 'Currency Converter',
        },
      },
      {
        path: 'addInvoice',
        canActivate: [authGuard],
        component: AppAddInvoiceComponent,
        data: {
          title: 'Add Invoice',
        },
      },
      {
        path: 'viewInvoice/:id',
        canActivate: [authGuard],
        component: AppInvoiceViewComponent,
        data: {
          title: 'View Invoice',
        },
      },
      {
        path: 'editinvoice/:id',
        canActivate: [authGuard],
        component: AppEditInvoiceComponent,
        data: {
          title: 'Edit Invoice',
        },
      },
    ],
  },
];
