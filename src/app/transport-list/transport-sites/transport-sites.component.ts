import { Component, OnInit } from '@angular/core';
import { TransportSiteService } from '../../service/transport.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-transport-sites',
  templateUrl: './transport-sites.component.html',
  styleUrls: ['./transport-sites.component.scss']
})
export class TransportSitesComponent implements OnInit {

  transportSites: any = [];
  
  constructor(private transportService: TransportSiteService, private router: Router) { }

  ngOnInit() {
    const transportType = this.router.url.split('/')[2];
    this.transportService.getTransportSites(transportType)
      .subscribe(data => {
        this.transportSites = data;
      }, error => {
        
      });
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
