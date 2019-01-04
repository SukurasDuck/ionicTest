import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  private username:string
  private password:string
  constructor(private http:HTTP){
   
  }
  ngOnInit(){
    
  }

  login(form:NgForm){
    console.log(form.valid)
    if(form.valid){
      this.http.get(`http://192.168.3.232:804/api/Login?user_name=${this.username}&user_pwd=${this.password}?`,{},{})
        .then(data=>{
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
