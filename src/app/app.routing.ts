import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { ErreurPageComponent } from './components/erreur-page/erreur-page.component';

// Gestion du routing
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // par défaut
    { path: 'not-found', component: ErreurPageComponent },
    { path: '**', redirectTo: '/not-found'} // gestion des erreurs de saisie de l'url => page 404
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
