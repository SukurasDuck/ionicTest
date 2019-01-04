import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { NavController} from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  private hero: Hero
  constructor(
    private nav:NavController
  ) {
   
  }
  ngOnInit() {

  }
  getSelect(hero: Hero) {
    this.hero = hero;
  }
  func(){
    this.nav.navigateForward("tabs/tab3/newdetails2")
  }
  func2(){
    this.nav.navigateForward("tabs/tab3/alert");
  }
  func3(){
    this.nav.navigateForward("tabs/tab3/anthor");
  }
  func4(){
    this.nav.navigateForward("tabs/tab3/badge");
  }
  func5(){
    this.nav.navigateForward("tabs/tab3/datetime");
  }
  func6(){
    this.nav.navigateForward("tabs/tab3/infinite-scroll");
  }
  func7(){
    this.nav.navigateForward("tabs/tab3/loading");
  }



}
