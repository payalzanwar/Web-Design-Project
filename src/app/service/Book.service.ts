import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private serverUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getBooking(DateEntered :String){
    return this.http.get(this.serverUrl + '/booking/date='+DateEntered);
  }

  addCartItem(cartData){
    return this.http.post(this.serverUrl + '/addCartItem' , cartData);
  }

  getCardItems(email){
    return this.http.get(this.serverUrl + '/getCardItems/email=' + email);
  }

  deleteFromCart(id){
    return this.http.delete(this.serverUrl+'/deleteFromCart/id='+ id);
  }

 
}
