import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PokemonEditComponent } from './pokemons/pokemon-edit/pokemon-edit.component';
import { SearchPokemonComponent } from './pokemons/search-pokemon/search-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: ListPokemonComponent },
  { path: 'pokemon/edit/:id', component: PokemonEditComponent },
  { path: 'pokemon/search', component: SearchPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
