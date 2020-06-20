import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  stupidName: string;
  imaginaryHero: Hero;

  heroes: Hero[];

  selectedHero: Hero ;

  flag: boolean = true;

  onSelect(hero: Hero): void {
    if (this.flag === false){
      this.selectedHero = hero;
      this.messageService.add(`Damn Son ${this.selectedHero.id}`);
      this.flag = !this.flag;
    } else if ( this.selectedHero === hero) {
      this.selectedHero = null;
      this.flag = !this.flag;
    } else {
      this.selectedHero = hero;
      this.messageService.add(`KEKW ${this.selectedHero.id}`);
    }
    
  }

  getHeroes():void{
    this.heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  findByTheDarnName(stupidName:string): void{
    this.heroService.findByName(stupidName)
    .subscribe(theName => this.imaginaryHero = theName);
  } //commenting here ;)
}
