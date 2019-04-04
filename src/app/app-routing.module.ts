import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportSitesComponent } from './transport-list/transport-sites/transport-sites.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { AuthenticationService as AuthGuard } from './service/authentication.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomePageComponent},
  {path:'transportTypes', component: TransportListComponent, canActivate: [AuthGuard]},
  {path:'transportSites/:transportType', component: TransportSitesComponent, canActivate: [AuthGuard]},
  {path:'signup', component: SignupPageComponent},
  {path:'login', component: LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [AuthGuard]

})



export class AppRoutingModule { }
