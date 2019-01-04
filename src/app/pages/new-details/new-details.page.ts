import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/seveice/heros.serveice';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.page.html',
  styleUrls: ['./new-details.page.scss'],
})
export class NewDetailsPage implements OnInit {
  hero:Hero
  constructor(
    private route:ActivatedRoute,
    private service:HeroService,
    private location:NavController
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    let id:Number=+this.route.snapshot.paramMap.get('id');
    console.log(id);
   this.service.getHero(id).subscribe(hero=>this.hero=hero);
   console.log(this.hero);
  }
  goBack(): void {
    this.location.goBack()
  }

}
