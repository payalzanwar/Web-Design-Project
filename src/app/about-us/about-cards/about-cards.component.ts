import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-cards',
  templateUrl: './about-cards.component.html',
  styleUrls: ['./about-cards.component.css']
})
export class AboutCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

public status:boolean=false;
//order of these events matter
mouseleaveEvent(event){
  event.target.classList.remove('shadow');
}
 mouseenterEvent(event){
  event.target.classList.add('shadow');
}
mouseleaveEvent1(event){
  event.target.classList.remove('shadow1');
}
 mouseenterEvent1(event){
  event.target.classList.add('shadow1');
}
//

}
