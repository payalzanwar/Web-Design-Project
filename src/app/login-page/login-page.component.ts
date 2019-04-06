import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('content') public templateref: TemplateRef<any>;

  errorMsg: string = 'Unable to connect to server';
  model: any = {};

  constructor(private userService: UserService, private router: Router, private modalService: NgbModal, private modalConfig: NgbModalConfig) {
    modalConfig.backdrop = 'static';
    modalConfig.keyboard = false;
   }

  ngOnInit() {
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['/home']);
    } 
 }

  checkUserExist() {
    this.userService.checkUserExist(this.model.userName, this.model.password)
      .subscribe(data => {
        console.log(data);
        this.userService.saveLoggedInUser(data);
        this.router.navigate(['/transportTypes']);
      }, error => {
        this.errorMsg = error.error.message;
        this.modalService.open(this.templateref, { centered: true });
      });
  }

}
