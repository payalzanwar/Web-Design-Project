import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageOddComponent } from './package-odd/package-odd.component';
import { PackageEvenComponent } from './package-even/package-even.component';
import { ShowPackagesComponent } from './show-packages/show-packages.component';

@NgModule({
  declarations: [PackageOddComponent, PackageEvenComponent, ShowPackagesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PackageOddComponent,
    PackageEvenComponent,
    ShowPackagesComponent
  ]
})
export class PackagePageModule { }
