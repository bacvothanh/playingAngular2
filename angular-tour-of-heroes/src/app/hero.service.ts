import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {Heroes} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService : MessageService) { }
  getHeroes():Observable<Hero[]>{
    this.messageService.success('HeroService : getHero()');
    return of(Heroes);
  }
}
