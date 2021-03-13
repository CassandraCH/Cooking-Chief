import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { ReseauxSociauxComponent } from '../reseaux-sociaux/reseaux-sociaux.component';
import { InstaFeedComponent } from '../insta-feed/insta-feed.component';
import { InstaPostComponent } from '../insta-post/insta-post.component';
import { TwitterFeedComponent } from '../twitter-feed/twitter-feed.component';
import { TweetComponent } from '../tweet/tweet.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { RecetteComponent } from '../recette/recette.component';
import { RecetteDescriptionComponent } from '../recette-description/recette-description.component';
import { RecettesComponent } from '../recettes/recettes.component';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { IngredientListeComponent } from '../ingredient-liste/ingredient-liste.component';
import { EtapeComponent } from '../etape/etape.component';
import { EtapeListeComponent } from '../etape-liste/etape-liste.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [
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
        EtapeListeComponent,
        EtapeComponent,
     ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
