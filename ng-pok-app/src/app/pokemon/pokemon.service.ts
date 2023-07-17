import { HttpClient } from '@angular/common/http';
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
  private log(response: Pokemon[]|Pokemon|undefined){
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