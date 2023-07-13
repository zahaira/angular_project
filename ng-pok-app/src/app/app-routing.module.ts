import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponentComponent } from './detail-pokemon-component/detail-pokemon-component.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 { path: 'pokemons', component: ListPokemonComponent},
 { path: 'pokemon/:id', component: DetailPokemonComponentComponent},
 { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
 {path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
