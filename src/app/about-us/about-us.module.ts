import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsHeaderImageComponent } from './about-us-header-image/about-us-header-image.component';
import { AboutUsJumbotronComponent } from './about-us-jumbotron/about-us-jumbotron.component';

@NgModule({
  declarations: [AboutUsHeaderImageComponent, AboutUsJumbotronComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AboutUsHeaderImageComponent,
    AboutUsJumbotronComponent
  ]
})
export class AboutUsModule { }
