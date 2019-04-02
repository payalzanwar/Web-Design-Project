import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Adventure Planet';

  constructor(private router: Router) { }

  ngOnInit(){
    $(document).ready(function(){
      $(window).on('load', function () {
        var $preloader = $('.wrapper');
        var $spinner   = $preloader.find('.loader');
        $spinner.delay(3000).fadeOut('slow');
        $preloader.delay(3000).fadeOut('slow');
      });
    });
    setTimeout(() => {
      this.router.navigate(['/home']);
  }, 4000);
  }
}
