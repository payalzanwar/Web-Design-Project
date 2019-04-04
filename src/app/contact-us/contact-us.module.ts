import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsHeaderImgComponent } from './contact-us-header-img/contact-us-header-img.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsJumbotronComponent } from './contact-us-jumbotron/contact-us-jumbotron.component';
import { ContactUsCardsComponent } from './contact-us-cards/contact-us-cards.component';



@NgModule({
  declarations: [ContactUsHeaderImgComponent, ContactUsComponent, ContactUsJumbotronComponent, ContactUsCardsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ContactUsHeaderImgComponent,
    ContactUsComponent,
    ContactUsJumbotronComponent,
    ContactUsCardsComponent
  ]
})
export class ContactUsModule { }
