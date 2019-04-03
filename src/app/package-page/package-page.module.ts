import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRowComponent } from './card-row/card-row.component';
import { BookButtonComponent } from './book-button/book-button.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardPackageComponent } from './card-package/card-package.component';
import { CardImageComponent } from './card-image/card-image.component';

@NgModule({
  declarations: [CardRowComponent, BookButtonComponent, CardDetailsComponent, CardPackageComponent, CardImageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CardPackageComponent,
    CardRowComponent,
    BookButtonComponent,
    CardImageComponent,
    CardDetailsComponent
  ]
})
export class PackagePageModule { }
