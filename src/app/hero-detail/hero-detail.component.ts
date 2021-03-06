import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [
  ]
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(private heroService:HeroService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.getThatHero();
  }

  getThatHero(): void{
    const id =+this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBackwardsBoi(): void{
    this.location.back();
  }
}
