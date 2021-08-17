import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppResolve } from './app.resolve';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './guard/authentication.guard';

import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate:[AuthenticationGuard]
  },
  { 
    path: 'coupon',
      component: BlankComponent,
      resolve: {
        appResolve: AppResolve
      }
    },
    { 
      path: 'product',
        component: BlankComponent,
        resolve: {
          appResolve: AppResolve
        }
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
