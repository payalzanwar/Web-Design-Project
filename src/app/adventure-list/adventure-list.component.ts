import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import{AdventureService} from '../service/adventure.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-adventure-list',
  templateUrl: './adventure-list.component.html',
  styleUrls: ['./adventure-list.component.scss']
})
export class AdventureListComponent implements OnInit {
  adventureObject: any = [];
  adventureType :string ='';
  errorMsg: string = 'Unable to connect to server';
  constructor(private AdventureService: AdventureService, private router:Router) { }

  ngOnInit() {
    $(this).ready(function(){
      $(this).scrollTop(0);
      });
      $(window).scroll(function() {
        if ($(this).scrollTop() <= 450) {
            $('#wrapper').addClass('colorOne')
            .removeClass('colorTwo');
        } else if ($(this).scrollTop() <= 1100) {
            $('#wrapper').addClass('colorTwo')
            .removeClass('colorThree');
        } else if ($(this).scrollTop() <= 1720) {
            $('#wrapper').addClass('colorThree')
            .removeClass('colorFour');
        } else if ($(this).scrollTop() <=2300) {
            $('#wrapper').addClass('colorFour')
            .removeClass('colorFive');
        } 
    });


     this.adventureType = this.router.url.split('/')[1];
    console.log(this.adventureType);
    this.AdventureService.getAdvList(this.adventureType)
      .subscribe(data => {
        this.adventureObject = data;
        console.log(this.adventureObject);
      }, error => {
        
      });
  }

  

}
