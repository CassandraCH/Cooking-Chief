import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { SectionsComponent } from './sections.component';

import { ReseauxSociauxComponent } from '../components/reseaux-sociaux/reseaux-sociaux.component';
import { InstaFeedComponent } from '../components/insta-feed/insta-feed.component';
import { InstaPostComponent } from '../components/insta-post/insta-post.component';
import { TwitterFeedComponent } from '../components/twitter-feed/twitter-feed.component';
import { TweetComponent } from '../components/tweet/tweet.component';

import { MainContentComponent } from '../components/main-content/main-content.component';
import { RecetteComponent } from '../components/recette/recette.component';
import { RecetteDescriptionComponent } from '../components/recette-description/recette-description.component';
import { RecettesComponent } from '../components/recettes/recettes.component';
import { IngredientComponent } from '../components/ingredient/ingredient.component';
import { IngredientListeComponent } from '../components/ingredient-liste/ingredient-liste.component';
import { EtapeComponent } from '../components/etape/etape.component';
import { EtapeListeComponent } from '../components/etape-liste/etape-liste.component';



@NgModule({
  declarations: [
    SectionsComponent,
    ReseauxSociauxComponent,
    InstaFeedComponent,
    InstaPostComponent,
    TwitterFeedComponent,
    TweetComponent,
    MainContentComponent,
    RecetteComponent,
    RecettesComponent,
    RecetteDescriptionComponent,
    IngredientListeComponent,
    IngredientComponent,
    EtapeListeComponent,
    EtapeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
  ],
  exports:[ SectionsComponent ]
})
export class SectionsModule { }
