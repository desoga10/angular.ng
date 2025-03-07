import { Routes } from '@angular/router';

import { AppErrorComponent } from './error/error.component';
import { AppMaintenanceComponent } from './maintenance/maintenance.component';
import { AppSideForgotPasswordComponent } from './side-forgot-password/side-forgot-password.component';
import { AppSideLoginComponent } from './side-login/side-login.component';
import { AppSideRegisterComponent } from './side-register/side-register.component';
import { AppSideTwoStepsComponent } from './side-two-steps/side-two-steps.component';
import { AppBoxedForgotPasswordComponent } from './boxed-forgot-password/boxed-forgot-password.component';
import { AppBoxedLoginComponent } from './boxed-login/boxed-login.component';
import { AppBoxedRegisterComponent } from './boxed-register/boxed-register.component';
import { AppBoxedTwoStepsComponent } from './boxed-two-steps/boxed-two-steps.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'boxed-forgot-pwd',
        component: AppBoxedForgotPasswordComponent,
      },
      {
        path: 'boxed-login',
        component: AppBoxedLoginComponent,
      },
      {
        path: 'boxed-register',
        component: AppBoxedRegisterComponent,
      },
      {
        path: 'boxed-two-steps',
        component: AppBoxedTwoStepsComponent,
      },
      {
        path: 'error',
        component: AppErrorComponent,
      },
      {
        path: 'maintenance',
        component: AppMaintenanceComponent,
      },
      {
        path: 'side-forgot-pwd',
        component: AppSideForgotPasswordComponent,
      },
      {
        path: 'app-side-login',
        component: AppSideLoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'side-register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'side-two-steps',
        component: AppSideTwoStepsComponent,
      },
    ],
  },
];
