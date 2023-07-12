import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  ngOnInit(){
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[1]);
  }
  selectPokemon(pokemonName: Pokemon){
    console.log(`vous avez cliquez sur ${pokemonName.name}`);
  }
}
