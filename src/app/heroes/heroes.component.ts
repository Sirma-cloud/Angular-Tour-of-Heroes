import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  //template: "<h1>Hello Again<h1>",
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes=> (this.heroes = heroes));
  }
}
// export class HeroesComponent implements OnInit {

//   heroes : Hero  [] = [];
//   // selectedHero?: Hero;

//   // heroService: any;

//   // value = 1.23;
//   // hero: Hero= {
//   //   id:1,
//   //   name: 'Arthur the Hulk'
//   // };

//   constructor(private heroService: HeroService){ } //private messageService: MessageService) //

//   ngOnInit(): void {
//     this.getHeroes();
//   }

// // getHeroes(): void{
// //   this.heroes = this.heroservice.getHeroes();

// getHeroes(): void {
//   this.heroService.getHeroes()
//       .subscribe(heroes => {
//         this.heroes = heroes;
//         console.log(heroes);
//       })
// }

//   // adding event binding handler
//   // onSelected(hero: Hero): void{
//   //   this.selectedHero = hero;
//   //   this.messageService.add(`You selected Hero with id of ${hero.id} and name ${hero.name}`);
//   //   console.log(hero);
//   // }

// }
