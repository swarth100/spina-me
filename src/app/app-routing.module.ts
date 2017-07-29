import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
