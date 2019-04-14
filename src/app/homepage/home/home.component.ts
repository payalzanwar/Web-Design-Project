import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function(){
      var $video = $('.backvideo');
      $video.show();
    });
    $("mutebtn").on("click", function(){
      var bool = $("#audioback").prop("muted");
        $("#audioback").prop("muted",!bool);
    });
  }

}
