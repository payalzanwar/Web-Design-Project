import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsHeaderImageComponent } from './about-us-header-image/about-us-header-image.component';
import { AboutUsJumbotronComponent } from './about-us-jumbotron/about-us-jumbotron.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutCardsComponent } from './about-cards/about-cards.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [AboutUsHeaderImageComponent, AboutUsJumbotronComponent, AboutCardsComponent],
  imports: [
    CommonModule,
    NgbModule,
    HeaderModule,
    FooterModule
  ],
  exports:[
    AboutUsHeaderImageComponent,
    AboutUsJumbotronComponent,
    AboutCardsComponent
  ]
})
export class AboutUsModule { }
