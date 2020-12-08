import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from '../shared/directives/border-card.directive';



@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonsModule { }
