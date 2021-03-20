// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {HttpClientModule} from '@angular/common/http';

// Component principal
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { ReseauxSociauxComponent } from './components/reseaux-sociaux/reseaux-sociaux.component';
import { InstaFeedComponent } from './components/reseaux-sociaux/insta-feed/insta-feed.component';
import { InstaPostComponent } from './components/reseaux-sociaux/insta-feed/insta-post/insta-post.component';
import { TwitterFeedComponent } from './components/reseaux-sociaux/twitter-feed/twitter-feed.component';
import { TweetComponent } from './components/reseaux-sociaux/twitter-feed/tweet/tweet.component';

import { RecettesComponent } from './components/recettes/recettes.component';
import { RecetteComponent } from './components/recettes/recette/recette.component';
import { RecetteDescriptionComponent } from './components/recettes/recette-description/recette-description.component'
import { IngredientListeComponent } from './components/recettes/recette/ingredient-liste/ingredient-liste.component';
import { IngredientComponent } from './components/recettes/recette/ingredient-liste/ingredient/ingredient.component';

import { ErreurPageComponent } from './components/erreur-page/erreur-page.component';
import { NoResultComponent } from './components/no-result/no-result.component';

// Components partagés
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BarreRechercheComponent } from './shared/barre-recherche/barre-recherche.component';
import { HeaderComponent } from './shared/header/header.component';

import { RecettesService } from './services/recettes.service';
import { RecetteResolver } from './services/recette-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BarreRechercheComponent,
    HeaderComponent,
    ErreurPageComponent,
    HomeComponent,
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
    NoResultComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    RecettesService,
    RecetteResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
