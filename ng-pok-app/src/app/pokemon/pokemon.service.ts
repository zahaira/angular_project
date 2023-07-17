import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap,of,catchError } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient){}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handlError(error,[]))
    );
  }
  
  getPokemonById(pokemonId: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handlError(error,undefined))
    );
  }

  updatePokemon(pokemon: Pokemon):Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handlError(error,null))
    );
  }

  private log(response: any){
    console.table(response);
  }
  private handlError(error:Error, errorValue:any){
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList():string[]{
    return ['Plante',
    'Poison',
    'Feu',
    'Eau',
    'Insecte',
    'Normal',
    'Electrik',
    'Carapuce',
    'Vol',
    'Fée',
    'Combat'

    ];
  }
}
