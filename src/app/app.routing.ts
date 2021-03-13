import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { ErreurPageComponent } from './components/erreur-page/erreur-page.component';
import { RecettesComponent } from './components/recettes/recettes.component';

// Gestion du routing
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'results', component: RecettesComponent },
    { path: 'results/:id', component: RecettesComponent},
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
