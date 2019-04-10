import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { AdventurelistComponent } from './adventure-list/adventurelist/adventurelist.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'adlist', component: AdventurelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
