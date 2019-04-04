import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsModule } from './about-us/about-us.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ContactUsModule} from './contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutUsModule,
    NgbModule.forRoot(),
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
