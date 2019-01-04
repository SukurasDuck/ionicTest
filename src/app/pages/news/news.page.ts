import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';



@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  hero:Hero
  constructor() { 
    
  }

  ngOnInit() {

  }

  getchildhero(thishero:Hero)
  {
    this.hero=thishero;
  }
 

}
