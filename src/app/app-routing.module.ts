import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { AdventurelistComponent } from './adventure-list/adventurelist/adventurelist.component';
import { AdventureComponent } from './adventure-list/adventure/adventure.component';
import { BookingformComponent } from './booknow/bookingform/bookingform.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'adlist', component: AdventureComponent},
  {path: 'scuba', component: AdventurelistComponent},
  {path: 'booknow', component: BookingformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
