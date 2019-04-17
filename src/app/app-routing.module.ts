import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportSitesComponent } from './transport-list/transport-sites/transport-sites.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PreloaderPageComponent } from './preloader-page/preloader-page.component';
import { AuthenticationService as AuthGuard } from './service/authentication.service';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { BooknowComponent } from './booknow/booknow.component';
import { ShowPackagesComponent } from './package-page/show-packages/show-packages.component';
import { PackageEvenComponent } from './package-even/package-even.component';

const routes: Routes = [
  {path:'', component: PreloaderPageComponent},
  {path:'home', component: HomePageComponent},
  {path:'transportTypes', component: TransportListComponent, canActivate: [AuthGuard]},
  {path:'transportSites/:transportType', component: TransportSitesComponent, canActivate: [AuthGuard]},
  {path:'accomodation', component: AccomodationComponent, canActivate: [AuthGuard]},
  {path:'signup', component: SignupPageComponent},
  {path:'login', component: LoginPageComponent},
  {path: 'scuba', component: AdventureListComponent},
  {path: 'booknow', component: BooknowComponent},
  {path:'packagelist',component: PackageEvenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
