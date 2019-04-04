import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsHeaderImageComponent } from './about-us-header-image/about-us-header-image.component';
import { AboutUsJumbotronComponent } from './about-us-jumbotron/about-us-jumbotron.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutCardsComponent } from './about-cards/about-cards.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@NgModule({
  declarations: [AboutUsHeaderImageComponent, AboutUsJumbotronComponent, AboutCardsComponent, AboutUsPageComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    AboutUsHeaderImageComponent,
    AboutUsJumbotronComponent,
    AboutCardsComponent,
    AboutUsPageComponent
  ]
})
export class AboutUsModule { }
