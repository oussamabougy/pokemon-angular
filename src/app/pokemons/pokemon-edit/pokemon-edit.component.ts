import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../pokemon';
import {ActivatedRoute} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {

  singlePokemon?: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    const id = index ? +index : -1;
    this.singlePokemon = this.pokemonsService.getSinglePokemon(id);
  }

}
