import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemon-component',
  templateUrl: './detail-pokemon-component.component.html',
  styles: [
  ]
})
export class DetailPokemonComponentComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  constructor(private route: ActivatedRoute,
     private router: Router,
     private pokemonService :PokemonService){}
  
  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon=>this.pokemon = pokemon);
    }
  }
  goBack(){
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon:Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
