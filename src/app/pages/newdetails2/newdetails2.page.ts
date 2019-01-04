import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Route } from '@angular/router';



@Component({
  selector: 'newdetails2',
  templateUrl: './newdetails2.page.html',
  styleUrls: ['./newdetails2.page.scss'],
})
export class Newdetails2Page implements OnInit {
  constructor(
    private actionsheet:ActionSheetController
    ) { }

  ngOnInit() {
    
  }
  async presentActionSheet(){
    const actionsheet=await this.actionsheet.create({
      header:'标题',
      buttons:[
        {
          text:"第一个按钮",
          role:"destructive",
          icon:"trash",
          handler:()=>{
            console.log("第一");
          }
        },
        {
          text:"关闭",
          role:"cancel",
          icon:"close",
          handler:()=>{
            console.log("close");
          }
        }
      ]
    });
    await actionsheet.present();
  }



  

}
