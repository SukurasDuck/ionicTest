import { Injectable } from "@angular/core";
import { Hero } from "../model/hero";
import { HEROES } from "../model/heros";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class HeroService {

    constructor() {
    }
    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }
    getHero(id:Number):Observable<Hero>{
        return of(HEROES.find(hero=>hero.id===id));
    }


}