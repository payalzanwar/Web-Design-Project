import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsHeaderImageComponent } from './about-us/about-us-header-image/about-us-header-image.component';

const routes: Routes = [
  {path:'aboutus',component:AboutUsHeaderImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }