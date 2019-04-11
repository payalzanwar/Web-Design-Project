import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../footer/footer.module'
import { FooterComponent } from '../footer/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FooterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomepageModule { }
