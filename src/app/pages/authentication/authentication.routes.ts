import { Routes } from '@angular/router';

import { AppMaintenanceComponent } from './maintenance/maintenance.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'maintenance',
        component: AppMaintenanceComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
