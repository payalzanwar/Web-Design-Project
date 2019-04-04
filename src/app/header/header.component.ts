import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userObject: any = {};

  currentUser: string = '';
  constructor(private userService: UserService, private router: Router) { 

    this.userObject = this.userService.getLoggedInUser();
    console.log(this.userObject);
    if(this.userObject)
      this.currentUser = this.userObject.firstName + ' ' + this.userObject.lastName;
  }

  ngOnInit() {
    
  }

  logout(){
    this.userService.deleteLoggedInUser();
    
    if(this.router.url == '/home' || this.router.url == ''){
      window.location.reload();
    }
    else{
      this.router.navigate(['/home']);
    }
    
  }
}
