import { Component, OnInit } from '@angular/core';
import { Heroes } from '../mock-heroes';
import {Hero} from '../Hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedHero: Hero;
  heroes =  Heroes;
  onSelect(hero:Hero) :void {
    console.log(hero);
    this.selectedHero = hero;
  }

}
