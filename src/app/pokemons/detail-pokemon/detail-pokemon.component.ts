import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../pokemon';
import {ActivatedRoute, Router} from '@angular/router';
import {POKEMONS} from '../../shared/list.pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  listOfPokemons: Pokemon[] = POKEMONS;
  pokemonToDisplay: Pokemon = {};

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonToDisplay = this.getPokemon(Number(id));
    console.log(this.pokemonToDisplay);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getPokemon(id: number): any {
    let pokemon = null;
    const size = this.listOfPokemons.length;
    let i = 0;
    let found = false;
    while (i < size && !found){
      if (this.listOfPokemons[i].id === id){
        found = true;
        pokemon = this.listOfPokemons[i];
      }
      i++;
    }
    return pokemon;
  }

}
