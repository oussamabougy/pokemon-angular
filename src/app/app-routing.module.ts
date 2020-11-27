import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
