import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adventurelist',
  templateUrl: './adventurelist.component.html',
  styleUrls: ['./adventurelist.component.css']
})
export class AdventurelistComponent implements OnInit {

  constructor(private router: Router) { }
  


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
      } else if ($(this).scrollTop() <= 1900) {
          $('#wrapper').addClass('colorThree')
          .removeClass('colorFour');
      } else if ($(this).scrollTop() <=2300) {
          $('#wrapper').addClass('colorFour')
          .removeClass('colorFive');
      } 
  });
  }

}
