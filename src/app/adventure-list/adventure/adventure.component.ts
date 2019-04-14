import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  constructor() { }

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
  }
}
