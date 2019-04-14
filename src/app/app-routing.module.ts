import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { AdventurelistComponent } from './adventure-list/adventurelist/adventurelist.component';
import { AdventureComponent } from './adventure-list/adventure/adventure.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'adlist', component: AdventureComponent},
  {path: 'scuba', component: AdventurelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
