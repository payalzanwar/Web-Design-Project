import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsHeaderImageComponent } from './about-us-header-image/about-us-header-image.component';

@NgModule({
  declarations: [AboutUsHeaderImageComponent],
  imports: [
    CommonModule
  ],
  exports:[AboutUsHeaderImageComponent]
})
export class AboutUsModule { }
