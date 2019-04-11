import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { PreloaderpageModule } from './preloaderpage/preloaderpage.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdventurelistComponent } from './adventure-list/adventurelist/adventurelist.component';
import { FooterModule } from './footer/footer.module';
// import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdventurelistComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
