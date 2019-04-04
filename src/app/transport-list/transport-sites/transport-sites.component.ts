import { Component, OnInit } from '@angular/core';
import { TransportSite } from './transportSite.model';

@Component({
  selector: 'app-transport-sites',
  templateUrl: './transport-sites.component.html',
  styleUrls: ['./transport-sites.component.scss']
})
export class TransportSitesComponent implements OnInit {

  transportSites: TransportSite[] = [
    new TransportSite('RentalCars', 'Cheap Car Rentals, Best Prices Guaranteed', 'https://www.rentalcars.com/us', 
                      '5', '$6', 'rentalcars@gmail.com', '866-966-3620', 'https://cdn2.rcstatic.com/images/rclogo/blue/2x/wordmark-rclogo_194x30.png'),
    new TransportSite('GetAround', 'Rent A Car | Lowest Rates', 'https://www.getaround.com', 
                      '5', '$5', 'getaround@gmail.com', '866-966-3620', 'http://blog.getaround.com/wp-content/uploads/2018/03/Getaround_BlogHero-with-logo-720x411.jpg'),
    new TransportSite('HotWire', 'Cheap Car Rentals, Find cheap rental car deals and save', 'https://www.hotwire.com/car-rentals/?gccid=-1', 
                      '5', '$11.99', 'partners@hotwire.com', '1-866-381-3981', 'https://www.hotwire.com/content/sites/default/files/hotwire-logo-large_0.png'),
    new TransportSite('Kayak', 'The easiest way to find your Car Renatal', 'https://www.kayak.com', 
                      '5', '$49', 'kayak@gmail.com', '866-966-3620', 'https://a1.r9cdn.net/rimg/provider-logos/common/socialmedia/kayak-logo.png?width=440&height=220&crop=false'),
    new TransportSite('Expedia', 'Cheap Airpirt Car Rentals & Rental Car Deals', 'https://www.expedia.com/Cars', 
                      '5', '$23', 'expedia@gmail.com', '866-966-3620', 'https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&test=b2p-yellow-header'),
    new TransportSite('CarRentals', 'Cheap Car Rentals, Save on Rental Cars at CarRentals.com', 'https://www.carrentals.com/', 
                      '5', '$38', 'carrentals@gmail.com', '866-966-3620', 'http://cr-cms-prod.s3.amazonaws.com/production/cms/assets/cr-logo-571ebd53ad3f7f5a66f25d8dfbd4c9707387a277bc5df0ae1a150627d643515d.png')

  ];

  constructor() { }

  ngOnInit() {
  }

}
