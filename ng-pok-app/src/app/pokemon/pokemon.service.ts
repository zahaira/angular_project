import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap,of,catchError } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient){}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('http://localhost:3000/api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handlError(error,[]))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`http://localhost:3000/api/pokemons/${pokemonId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handlError(error,undefined))
    );
  }

  // getPokemonById(pokemonId: number): Observable<Pokemon|undefined>{
  //   return this.http.get<Pokemon>(`http://localhost:3000/api/pokemons/${pokemonId}`).pipe(
  //     tap((response)=>this.log(response)),
  //     catchError((error: HttpErrorResponse ) => {
  //       if (error.status === 401) {
  //         alert('401');
  //       }
  //       return throwError(error);

  //     })
  //   );
  // }
  

  searchPokemonList(term: string):Observable<Pokemon[]>{
    if(term.length<=1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`http://localhost:3000/api/pokemons?name=${term}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handlError(error,[]))
    );
  }

  updatePokemon(pokemon: Pokemon):Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put(`http://localhost:3000/api/pokemons/${pokemon.id}`, pokemon, httpOptions).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handlError(error,null))
    );
  }

  addPokemon(pokemon: Pokemon):Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<Pokemon>('http://localhost:3000/api/pokemons', pokemon, httpOptions).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handlError(error,null))
    );
  }

  deletePokemonById(pokemonId:number):Observable<null>{
    return this.http.delete(`http://localhost:3000/api/pokemons/${pokemonId}`).pipe(
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
