import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemonToDisplay?: Pokemon = {};

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getSinglePokemon(Number(id)).subscribe(
      pokemon => this.pokemonToDisplay = pokemon
    );
    console.log(this.pokemonToDisplay);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  /**
   * Edit a given pokemon
   * @param pokemonToEdit :Pokemon
   */
  editerPokemon(pokemonToEdit: Pokemon): void {
    const link = ['/pokemon/edit', pokemonToEdit.id];
    this.router.navigate(link);
  }

}
