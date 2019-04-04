import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { PreloaderpageModule } from './preloaderpage/preloaderpage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportSitesComponent } from './transport-list/transport-sites/transport-sites.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SignupPageComponent,
    LoginPageComponent,
    TransportListComponent,
    TransportSitesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    PreloaderpageModule
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
