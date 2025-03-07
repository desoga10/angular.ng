import { Routes } from '@angular/router';

// widgets
import { AppBannersComponent } from './banners/banners.component';
import { AppCardsComponent } from './cards/cards.component';
import { AppChartsComponent } from './charts/charts.component';

export const WidgetsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'banners',
        component: AppBannersComponent,
        data: {
          title: 'Banners',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Banners' },
          ],
        },
      },
      {
        path: 'cards',
        component: AppCardsComponent,
        data: {
          title: 'Cards',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Cards' },
          ],
        },
      },
      {
        path: 'charts',
        component: AppChartsComponent,
        data: {
          title: 'Charts',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Charts' },
          ],
        },
      },
    ],
  },
];
