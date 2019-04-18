import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { BookService } from '../service/Book.service';
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

export class BooknowComponent implements OnInit{

  displayedColumns: string[] = ['date', 'time', 'available', 'price'];
  // dataSource = ELEMENT_DATA;
  dateEntered : String;
  month:String;
  year:String;
  day:String;
  dateObject : any =[];
 
  constructor(private BookService : BookService){
    
  }
 
  myFunc(){

    $('#tbl').show();
        this.dateEntered = $('#InputDate').val();
        console.log("Date Entered"+ this.dateEntered);
        if(this.dateEntered){
    
         this.month= this.dateEntered.split('/')[0];
         this.day=this.dateEntered.split('/')[1];
        this.year=this.dateEntered.split('/')[2];
        }
         console.log("Month"+ this.month);
         
         this.dateEntered=this.month+"-"+this.day+"-"+this.year;  
        
         this.BookService.getBooking(this.dateEntered)
        .subscribe(data => {
          console.log("Date before booking"+ this.dateEntered);
        this.dateObject = data;
        console.log(this.dateObject);
      }, error => {
      
      });
    
      }
   
  ngOnInit() {
  }  
   
}
