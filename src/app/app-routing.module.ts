import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsHeaderImageComponent } from './about-us/about-us-header-image/about-us-header-image.component';
import { ContactUsComponent } from './contact-us/contact-us/contact-us.component';
import { AboutUsPageComponent } from './about-us/about-us-page/about-us-page.component';

const routes: Routes = [
  {path:'aboutus',component:AboutUsPageComponent},
  {path:'contactus',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }