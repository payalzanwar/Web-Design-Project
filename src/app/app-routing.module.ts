import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { AdventurelistComponent } from './adventure-list/adventurelist/adventurelist.component';
import { AdventureComponent } from './adventure-list/adventure/adventure.component';
import { AboutUsHeaderImageComponent } from './about-us/about-us-header-image/about-us-header-image.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ShowPackagesComponent } from './package-page/show-packages/show-packages.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'adlist', component: AdventureComponent},
  {path: 'scuba', component: AdventurelistComponent},
  {path:'aboutus',component:AboutUsHeaderImageComponent},
  {path:'footer',component:FooterComponent},
  {path:'packagelist',component: ShowPackagesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }