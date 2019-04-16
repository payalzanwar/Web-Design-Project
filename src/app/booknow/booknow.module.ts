import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingformComponent } from './bookingform/bookingform.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookingformComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class BooknowModule { }
