import { Routes } from '@angular/router';

// tables
import { AppBasicTableComponent } from './basic-table/basic-table.component';
import { AppDynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { AppExpandTableComponent } from './expand-table/expand-table.component';
import { AppFooterRowTableComponent } from './footer-row-table/footer-row-table.component';
import { AppHttpTableComponent } from './http-table/http-table.component';
import { AppMixTableComponent } from './mix-table/mix-table.component';
import { AppMultiHeaderFooterTableComponent } from './multi-header-footer-table/multi-header-footer-table.component';
import { AppPaginationTableComponent } from './pagination-table/pagination-table.component';
import { AppRowContextTableComponent } from './row-context-table/row-context-table.component';
import { AppSelectionTableComponent } from './selection-table/selection-table.component';
import { AppSortableTableComponent } from './sortable-table/sortable-table.component';
import { AppStickyColumnTableComponent } from './sticky-column-table/sticky-column-table.component';
import { AppStickyHeaderFooterTableComponent } from './sticky-header-footer-table/sticky-header-footer-table.component';
import { AppFilterableTableComponent } from './filterable-table/filterable-table.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic-table',
        component: AppBasicTableComponent,
        data: {
          title: 'Basic Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Basic Table' },
          ],
        },
      },
      {
        path: 'dynamic-table',
        component: AppDynamicTableComponent,
        data: {
          title: 'Dynamic Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Dynamic Table' },
          ],
        },
      },
      {
        path: 'expand-table',
        component: AppExpandTableComponent,
        data: {
          title: 'Expand Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Expand Table' },
          ],
        },
      },
      {
        path: 'filterable-table',
        component: AppFilterableTableComponent,
        data: {
          title: 'Filterable Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Filterable Table' },
          ],
        },
      },
      {
        path: 'footer-row-table',
        component: AppFooterRowTableComponent,
        data: {
          title: 'Footer Row Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Footer Row Table' },
          ],
        },
      },
      {
        path: 'http-table',
        component: AppHttpTableComponent,
        data: {
          title: 'HTTP Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'HTTP Table' },
          ],
        },
      },
      {
        path: 'mix-table',
        component: AppMixTableComponent,
        data: {
          title: 'Mix Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Mix Table' },
          ],
        },
      },
      {
        path: 'multi-header-footer-table',
        component: AppMultiHeaderFooterTableComponent,
        data: {
          title: 'Multi Header Footer Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Multi Header Footer Table' },
          ],
        },
      },
      {
        path: 'pagination-table',
        component: AppPaginationTableComponent,
        data: {
          title: 'Pagination Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Pagination Table' },
          ],
        },
      },
      {
        path: 'row-context-table',
        component: AppRowContextTableComponent,
        data: {
          title: 'Row Context Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Row Context Table' },
          ],
        },
      },
      {
        path: 'selection-table',
        component: AppSelectionTableComponent,
        data: {
          title: 'Selection Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Selection Table' },
          ],
        },
      },
      {
        path: 'sortable-table',
        component: AppSortableTableComponent,
        data: {
          title: 'Sortable Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Sortable Table' },
          ],
        },
      },
      {
        path: 'sticky-column-table',
        component: AppStickyColumnTableComponent,
        data: {
          title: 'Sticky Column Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Sticky Column Table' },
          ],
        },
      },
      {
        path: 'sticky-header-footer-table',
        component: AppStickyHeaderFooterTableComponent,
        data: {
          title: 'Sticky Header Footer Table',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Sticky Header Footer Table' },
          ],
        },
      },
    ],
  },
];
