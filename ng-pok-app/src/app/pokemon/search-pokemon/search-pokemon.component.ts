import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit{
  //{..."a".."ab".."abz".."ab"...."abc"..}
  searchTerms = new Subject<string>();
  //{...pokemonList(a)...pokemonList(ab)....}
  pokemons$: Observable<Pokemon[]>;

  constructor(private router:Router,
    private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
        //{..."a"."ab"..."abz"."ab"....."abc".}
        debounceTime(300),
        //{..."ab"..."ab"...."abc"...}
        distinctUntilChanged(),
        //{..."ab"...."abc"..}
        switchMap((term)=>this.pokemonService.searchPokemonList(term)),
        //{...pokemonList("ab")....pokemonList("abc")..}
    );
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  gotoDetail(pokemon:Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
