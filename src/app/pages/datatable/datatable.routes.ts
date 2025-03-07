import { Routes } from '@angular/router';

import { AppKichenSinkComponent } from './kichen-sink/kichen-sink.component';

export const DatatablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'kichen-sink',
        component: AppKichenSinkComponent,
        data: {
          title: 'Kichen Sink',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Kichen Sink' },
          ],
        },
      },
    ],
  },
];
