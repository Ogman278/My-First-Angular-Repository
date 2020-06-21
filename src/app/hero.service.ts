import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add("hello boomer");
    return of(HEROES);
  }

  findByName( imaginaryName : string ): Observable<Hero>{
    let imaginaryHero: Hero = HEROES.find(imaginaryHero => imaginaryHero.name == imaginaryName);
    return of(imaginaryHero);
  }

  getHero(id: number): Observable<Hero>{
    let hero: Hero = HEROES.find(hero => hero.id === id);
    this.messageService.add("gottem");
    return of(hero);
  }

}





