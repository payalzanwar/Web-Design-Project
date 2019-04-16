import { Component, OnInit } from '@angular/core';
import { AccomodationService } from '../service/accomodation.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {

  accomodationSites: any;

  constructor(private accomService: AccomodationService) { }

  ngOnInit() {
    this.accomService.getAccomodationSites().subscribe(data => {
      this.accomodationSites = data;
    }, error => {

    })
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

}
