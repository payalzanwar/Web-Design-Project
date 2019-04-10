import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router'

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
  }, 3000);
  }

}
