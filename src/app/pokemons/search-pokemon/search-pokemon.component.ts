import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../../pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject();
  pokemons$?: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: any) => this.pokemonsService.searchPokemons(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  /**
   * Redirect the page the show the given pokemon
   * @param pokemon :Pokemon
   */
  gotoDetail(pokemon: Pokemon): void {
    const link = ['/pokemon/', pokemon.id];
    this.router.navigate(link);
  }
}
