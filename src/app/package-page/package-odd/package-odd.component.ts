import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-odd',
  templateUrl: './package-odd.component.html',
  styleUrls: ['./package-odd.component.css']
})
export class PackageOddComponent implements OnInit {

     title: string;
     deal: string;
     price: string;
     desc: string;
     cities: string;
     departureCity: string;
     departuteTime: string;
     returnTime: string;
     dressCode: string;
     included: string;
     notIncluded: string;
     days: string;
  constructor() { 
    this.title = "Santorini Island in Greece";
    this.deal="";
    this.price="2000" ;
    this.desc="If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut, deserunt culpa hic ea dolore! Necessitatibus temporibus velit ipsam animi dolore, architecto expedita beatae aperiam sit? Maxime minima accusantium error." ;
    this.cities="Boston, Albany, Nashua, White Mountains" ;
    this.departureCity="Boston";
    this.departuteTime="9.15 a.m.";
    this.returnTime="Approximately 8:30 PM.";
    this.dressCode="Casual, comfortable athletic clothing.";
    this.included="Amsterdam Fun, Entry Fees, Personal Guide";
    this.notIncluded="DepartureTaxes, Breakfast";
    this.days="10";

  }

  ngOnInit() {
  }

}
