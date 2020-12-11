import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokemonsUrl = 'api/pokemons';
  constructor(private http: HttpClient, private router: Router) { }

  getListPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => console.log('fetched pokemon')),
      catchError(this.handleError('getListPokemons', []))
    );
  }

  getSinglePokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => console.log(`fetched pokemon id = ${id}`)),
      catchError(this.handleError(`get Pokemon id= ${id}`))
    );
  }

  getPokemonTypes(): string[] {
    return ['Feu', 'Eau', 'Plante', 'Insecte', 'Normal', 'Vol', 'Poison', 'Fée', 'Psy', 'Electrik', 'Combat', ];
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };

    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => console.log(`Updated pokemon id = ${pokemon.id}`)),
      catchError(this.handleError<any>(`Updated Pokemon id= ${pokemon.id}`))
    );
  }

  deletePokemon(id: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };

    const url = `${this.pokemonsUrl}/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => console.log(`Deleted pokemon id = ${id}`)),
      catchError(this.handleError<any>(`Deleted Pokemon id= ${id}`))
    );
  }

  searchPokemons(term: string): Observable<Pokemon[]>{
    if (!term.trim()){
      return of([]);
    }

    return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
      tap(_ => console.log('found pokemon')),
      catchError(this.handleError('searched pokemons', []))
    );
  }
}
