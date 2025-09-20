import { Routes } from '@angular/router';

// theme pages
import { AppAccountSettingComponent } from './account-setting/account-setting.component';
import { AppFaqComponent } from './faq/faq.component';

export const ThemePagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'account-setting',
        component: AppAccountSettingComponent,
        data: {
          title: 'Account Setting',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Account Setting' },
          ],
        },
      },
      {
        path: 'faq',
        component: AppFaqComponent,
        data: {
          title: 'FAQ',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'FAQ' },
          ],
        },
      },
    ],
  },
];
