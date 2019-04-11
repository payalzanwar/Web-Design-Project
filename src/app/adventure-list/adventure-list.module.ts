import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventurelistComponent } from './adventurelist/adventurelist.component';
import { FooterModule } from '../footer/footer.module'
import { FooterComponent } from '../footer/footer/footer.component';
import { AdventureComponent } from './adventure/adventure.component';

@NgModule({
  declarations: [
    AdventurelistComponent,
    FooterComponent,
    AdventureComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ]
})
export class AdventureListModule { }
