import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { Router } from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  types?: Array<string>;

  @Input() pokemon?: Pokemon;

  constructor(private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.types = this.pokemonsService.getPokemonTypes();
  }

  /**
   * Check if pokemon has types
   * @param type :string
   */
  hasType(type: string): boolean {
    const index = (this.pokemon && this.pokemon.types) ? this.pokemon.types.indexOf(type) : -1;
    return (index > -1);
  }

  /**
   * Add type when selected
   * @param $event :any
   * @param type :string
   */
  selectType($event: any, type: string): void {
    const checked = $event.target.checked;
    if (this.pokemon && this.pokemon.types){
      if (checked){
        this.pokemon?.types?.push(type);
      } else {
        const index = this.pokemon.types.indexOf(type);
        if (index > -1) {
          this.pokemon.types.splice(index, 1);
        }
      }
    }
  }

  onSubmit(): void {
    console.log('submitted');
    if (this.pokemon) {
      this.pokemonsService.updatePokemon(this.pokemon).subscribe(
        () => this.goBack()
      );
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon && this.pokemon.types) {
      if (this.pokemon.types.length === 1 && this.hasType(type)) {
        return false;
      }
      if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
        return false;
      }
    }
    return true;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
