import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }
  getPokemonById(pokemonId: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
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
