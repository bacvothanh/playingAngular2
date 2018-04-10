import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  topHeroes : Hero[];
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getTopHeroes();
  }

  getTopHeroes() : void{
    this.heroService.getHeroes().subscribe(response=>{
      this.topHeroes = response.slice(1,5);
    });
  }
}
