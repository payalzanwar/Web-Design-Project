import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventurelistComponent } from './adventurelist/adventurelist.component';
import { AdventureComponent } from './adventure/adventure.component';
import { BooknowModule } from '../booknow/booknow.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AdventurelistComponent,
    AdventureComponent
  ],
  imports: [
    CommonModule,
    BooknowModule,
    RouterModule,
    MaterialModule
  ]
})
export class AdventureListModule { }
