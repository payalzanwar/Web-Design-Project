import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { PreloaderpageModule } from './preloaderpage/preloaderpage.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdventurelistComponent } from './adventure-list/adventurelist/adventurelist.component';
import { FooterModule } from './footer/footer.module';
import { AdventureComponent } from './adventure-list/adventure/adventure.component';
// import { FooterComponent } from './footer/footer/footer.component';
import { AboutUsModule } from './about-us/about-us.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { PackagePageModule } from './package-page/package-page.module';

@NgModule({
  declarations: [
    AppComponent,
    AdventurelistComponent,
    AdventureComponent
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    PreloaderpageModule,
    NgbModule,
    FooterModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AboutUsModule,
    HeaderModule,
    FooterModule,
    PackagePageModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
