import { Component, OnInit ,TemplateRef,ViewChild} from '@angular/core';
import { PackageService } from '../../Service/package.service';
import { NgForOf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSrcModule } from 'ng-src';
@Component({
  selector: 'app-package-even',
  templateUrl: './package-even.component.html',
  styleUrls: ['./package-even.component.css']
})
export class PackageEvenComponent implements OnInit {

  @ViewChild('content') public templateref: TemplateRef<any>;
 
  errorMsg: string = 'Unable to connect to server';
  
  ImgUrl: any = {};

  packageObject: any = {};
  
  constructor(private PackageService: PackageService,public _DomSanitizer: DomSanitizer) {
   
    // this.packageObject = this.PackageService.getPackageList();
    // alert(this.packageObject.title);
    this.PackageService.getPackageList()
    .subscribe(data => {
     console.log(data);
      
     this.PackageService.savePackage(data);
    
    }, error => {
      this.errorMsg = error.error.message;
     
    });
  
    this.packageObject = this.PackageService.getsavedPackage();
   console.log(this.packageObject.length);
   

  
    //console.log(this.packageObject[3].img.data.data);
   }
  
   getImgData(img){
    var binary = '';
    var bytes = new Uint8Array( img.data.data );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return 'data:image/png;base64,' + window.btoa( binary );
  }
  ngOnInit() {
  }

}
