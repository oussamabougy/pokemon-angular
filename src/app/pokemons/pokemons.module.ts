import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    PokemonEditComponent,
    SearchPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonsModule { }
