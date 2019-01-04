import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(
    private alert:AlertController
    ) { 
   
  }

  ngOnInit() {
  }

  async simpleAlert1(){
    const alertCom=await this.alert.create({
      header:'测试1', //标题
      subHeader:'小测试1',//副标题
      message:'测试消息',//消息
      translucent:true,
      buttons:[{
        text:'确认',
        role:'cancel',
        handler:()=>{
          console.log("Alert1 close")
        }
      }] //按钮
    });
    await alertCom.present()
  }

  async simpleAlert2(){
    const alertCtrl=await this.alert.create({
      header:'测试2',
      message:'',
      backdropDismiss:false,
      translucent:false,
      inputs:[
        {
          type:'radio',
          name:'radio1',
          label:'选项1',
          value:'radio1',
          checked:true
        },
        {
          type:'radio',
          name:'radio1',
          label:'选项2',
          value:'radio2'
        }
      ],
      buttons:[
        {
          text:'确认',
          handler:(s)=>{
            console.log(s)
          }
        },
        {
          text:'取消',
          role:'cancel'
        }
      ]
    });
    await alertCtrl.present();
    
  }
}
