import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  @ViewChild('content') public templateref: TemplateRef<any>;

  msg: string = '';
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

  creteUser() {
    this.userService.create(this.model)
      .subscribe(
        data => {
          //this.router.navigate(['/']);
          this.model.firstName = '';
          this.model.lastName = '';
          this.model.userName = '';
          this.model.password = '';

          this.msg = 'User created successfully';
          this.modalService.open(this.templateref, { centered: true });
        }, error => {
          this.msg = error.error.message;
          this.modalService.open(this.templateref, { centered: true });
        });
  }

}
