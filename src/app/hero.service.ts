import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = this.httpClient.get<Hero[]> ('http://127.0.0.1:5000/heroes');
    this.messageService.add(`HeroService fetched heroes`);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = this.httpClient.get<Hero> ('http://127.0.0.1:5000/detail/'+ id.toString());
    this.messageService.add(`HeroService fetched hero with id of` + id.toString());
    return hero;
  }

  updateHero(hero:Hero):Observable<Hero>{
    return this.httpClient.post<Hero>('http://127.0.0.1:5000/update',hero)
  }

}
