import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/seveice/heros.serveice';

@Component({
  selector: 'newdetails',
  templateUrl: './newdetails.component.html',
  styleUrls: ['./newdetails.component.scss']
})
export class NewdetailsComponent implements OnInit {
  heroes:Hero[];
  @Output() changeNumber: EventEmitter<Hero> = new EventEmitter();
  constructor(private heroservice:HeroService) { }

  ngOnInit() {
    this.getHeros();
  }
  getHeros(){
    this.heroservice.getHeroes().subscribe(heroeslist=>this.heroes=heroeslist);
  }
  getSelect(selectHero:Hero){
    this.changeNumber.emit(selectHero);
  }

}
