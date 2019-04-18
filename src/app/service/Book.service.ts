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

 
}
