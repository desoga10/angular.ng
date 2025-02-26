import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (com) => com.DashboardComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/authentication/login/login.component').then(
        (com) => com.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/authentication/register/register.component').then(
        (com) => com.RegisterComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./home/home/home.component').then((com) => com.HomeComponent),
  },
];
