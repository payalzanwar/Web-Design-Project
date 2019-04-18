import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private serverUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBlogPosts(){
    return this.http.get(this.serverUrl + '/posts');
  }

  uploadPost(uploadData: any){
    return this.http.post(this.serverUrl + '/upload' , uploadData);
  }

  updateLikes(updatedData){
    return this.http.put(this.serverUrl + '/updateLikes', updatedData);
  }
}
