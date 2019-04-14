import { Component, OnInit ,TemplateRef,ViewChild} from '@angular/core';
import { PackageService } from '../../Service/package.service';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-package-even',
  templateUrl: './package-even.component.html',
  styleUrls: ['./package-even.component.css']
})
export class PackageEvenComponent implements OnInit {

  @ViewChild('content') public templateref: TemplateRef<any>;

  errorMsg: string = 'Unable to connect to server';
  // model: any = {};

     title: string ='';
     img:any={data:'',contentType:'',name:''};
     price: string='';
     desc: string='';
     cities: string='';
     departureCity: string='';
     departuteTime: string='';
     returnTime: string='';
     dressCode: string='';
     included: string='';
     notIncluded: string='';
     days: string='';


  packageObject: any = {};
  constructor(private PackageService: PackageService) {
   
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
   
  
   }
  ngOnInit() {
  }

}
