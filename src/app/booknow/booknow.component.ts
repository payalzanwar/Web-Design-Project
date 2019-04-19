import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { BookService } from '../service/Book.service';
import { UserService } from '../service/user.service';
import { timeInterval } from 'rxjs/operators';
import { Router } from '@angular/router';
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
  cartData: any;
  userEmail: String;
  adventureType :String;
  msg:String='';
  constructor(private BookService : BookService, private userService: UserService,private router:Router){
    
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
         this.adventureType = this.router.url.split('/')[2];
         
         console.log("adventureType"+this.adventureType);
         this.BookService.getBooking(this.dateEntered,this.adventureType)
        .subscribe(data => {
          console.log("Date before booking"+ this.dateEntered);
        this.dateObject = data;
        if(this.dateObject.length==0)
        {
         this.msg="No Bookings Available for this date";
        }
        console.log(this.dateObject);
      }, error => {
      
      });
    
      }
   
  ngOnInit() {
    const userObject = this.userService.getLoggedInUser();
    
    if(userObject)
      this.userEmail = userObject.email;

  }  

  addToCart(booking){
    
    this.cartData = {
      email: this.userEmail,
      packageDetails: {
        title: 'Charming California',
        date: booking.Date,
        time: booking.Time,
        price: booking.price
      }
    }
    this.BookService.addCartItem(this.cartData)
      .subscribe(data => {
        console.log(data);
      }, error => {
        
    });
  }
   
}
