import { Component, OnInit } from '@angular/core';
import { Heroes } from '../mock-heroes';
import {Hero} from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService : HeroService) { 

  }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero: Hero;
  heroes : Hero[];
  onSelect(hero:Hero) :void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(response=>this.heroes = response);
  }

}
