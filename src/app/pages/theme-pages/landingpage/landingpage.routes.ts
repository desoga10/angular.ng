import { Routes } from '@angular/router';

// theme pages
import { AppLandingpageComponent } from './landingpage.component';

export const LandingPageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppLandingpageComponent,
      },
    ],
  },
];
