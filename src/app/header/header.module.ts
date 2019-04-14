import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSignedoutComponent } from './navbar-signedout/navbar-signedout.component';
import { NavbarSignedinComponent } from './navbar-signedin/navbar-signedin.component';

@NgModule({
  declarations: [NavbarSignedoutComponent, NavbarSignedinComponent],
  imports: [
    CommonModule
  ],
  exports:[NavbarSignedoutComponent,NavbarSignedinComponent]
})
export class HeaderModule { }
