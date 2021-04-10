import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from '../app/components/home/home.component';
import { ErreurPageComponent } from './components/erreur-page/erreur-page.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { NoResultComponent } from './components/resultats/no-result/no-result.component';
import { RecetteComponent } from './components/resultats/recette/recette.component';

// Guard
import { ResultatsGuard } from './services/resultats-guard.service';

// Gestion du routing
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // par défaut
    { path: 'home', component: HomeComponent }, // page d'acceuil
    { path: 'results/no-result', component: NoResultComponent }, // page quand la recherche n'a pas de résultats
    { path: 'results/:nom', component: ResultatsComponent },// page des resultats de recherche
    { path: 'results/:nom/:id', component: RecetteComponent, canActivate: [ResultatsGuard] }, // page de la recette avec la liste des ingrédients
    { path: 'not-found', component: ErreurPageComponent }, // page d'erreur 404
    { path: '**', redirectTo: '/not-found' } // gestion des erreurs de saisie de l'url => page 404
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
