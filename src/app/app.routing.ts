import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { ErreurPageComponent } from './components/erreur-page/erreur-page.component';
import { RecettesComponent } from './components/recettes/recettes.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { IngredientListeComponent } from './components/ingredient-liste/ingredient-liste.component';

// Gestion du routing
const routes: Routes = [
    { path: 'home', component: HomeComponent }, // page d'acceuil
    { path: 'results', component: RecettesComponent }, // page des resultats de recherche
    { path: 'results/:nom', component: RecettesComponent},
    { path: 'details', component: IngredientListeComponent}, // page de la recette avec la liste des ingrédients
    { path: 'no-result', component: NoResultComponent }, // page quand la recherche n'a pas de résultats
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // par défaut
    { path: 'not-found', component: ErreurPageComponent }, // page d'erreur 404
    { path: '**', redirectTo: '/not-found'} // gestion des erreurs de saisie de l'url => page 404
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes,{
    //   useHash: true
    // })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
