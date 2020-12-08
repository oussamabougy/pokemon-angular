import { Injectable } from '@angular/core';
import {Pokemon} from '../pokemon';
import {POKEMONS} from '../shared/list.pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getListPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getSinglePokemon(id: number): Pokemon|undefined {
    let pokemon;
    const listPokemons = this.getListPokemons();
    const size = listPokemons.length;
    let i = 0;
    let found = false;
    while (i < size && !found){
      if (listPokemons[i].id === id){
        found = true;
        pokemon = listPokemons[i];
      }
      i++;
    }
    return pokemon;
  }
}
