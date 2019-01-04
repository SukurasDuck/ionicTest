import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
@ViewChild (IonInfiniteScroll)infiniteScroll:IonInfiniteScroll
data:Array<string>

  constructor() {
   }

  ngOnInit() {
      this.addData();
  }
  loadData(event){
    setTimeout(() => {
     this.addData();
      event.target.complete();
      if(this.data.length>100){
        event.target.disabled = true;
      }
    }, 1000);

  }
  addData(){
    console.log(this.data==undefined);
    if(this.data==undefined){
      this.data=new Array<string>();
    }
    let length=this.data.length;
    for (let index = this.data.length; index < length+10; index++) {
      this.data.push(""+index)
    }
  }

}
