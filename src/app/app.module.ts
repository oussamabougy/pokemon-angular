import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { BorderCardDirective } from './shared/directives/border-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    BorderCardDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
