import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsModule } from './about-us/about-us.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './header/header.module';
import { PackagePageModule } from './package-page/package-page.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AboutUsModule,
    HeaderModule,
    PackagePageModule,
    FooterModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
