import { Component, OnInit } from '@angular/core';

export interface BookingElement {
  time: string;
  date: number;
  available: number;
  price: number;
  booknow: number;
}

const ELEMENT_DATA: BookingElement[] = [
  {date: 2, time: 'H', available: 6, price: 1, booknow: 2},
  {date: 1, time: 'H', available: 9, price: 1, booknow: 2},
  {date: 3, time: 'H', available: 6, price: 1, booknow: 2},
  {date: 4, time: 'H', available: 9, price: 1, booknow: 2},
  {date: 5, time: 'H', available: 1, price: 1, booknow: 2},

];

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent{

  displayedColumns: string[] = ['date', 'time', 'available', 'price', 'booknow'];
  dataSource = ELEMENT_DATA;
  
}
