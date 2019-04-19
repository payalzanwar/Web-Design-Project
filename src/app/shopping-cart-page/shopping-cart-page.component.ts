import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/Book.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {

  userEmail: String;
  cartItems: any;
  total: number = 0;


  constructor(private BookService: BookService, private UserService:UserService) { }

  ngOnInit() {
    const userObject = this.UserService.getLoggedInUser();
    
    if(userObject)
      this.userEmail = userObject.email;
    
    this.getCardItems();
  }

  getCardItems(){
    this.BookService.getCardItems(this.userEmail)
    .subscribe(data => {
      this.cartItems = data;
      this.cartItems.forEach(cart => {
        this.total = this.total + parseInt(cart.packageDetails.price);
        
      });
      console.log(data);
      }, error => {
        
    });
  }

  deleteFromCart(id){
    this.BookService.deleteFromCart(id)
    .subscribe(data => {
      console.log(data);
      this.total = 0;
      this.getCardItems();
      }, error => {
        
    });
  }
}
