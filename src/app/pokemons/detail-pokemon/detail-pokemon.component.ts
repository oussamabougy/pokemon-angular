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
    this.pokemonToDisplay = this.pokemonsService.getSinglePokemon(Number(id));
    console.log(this.pokemonToDisplay);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
