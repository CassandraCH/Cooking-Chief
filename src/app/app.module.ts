// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

// Component principal
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { ReseauxSociauxComponent } from './components/reseaux-sociaux/reseaux-sociaux.component';
import { InstaFeedComponent } from './components/insta-feed/insta-feed.component';
import { InstaPostComponent } from './components/insta-post/insta-post.component';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RecetteComponent } from './components/recette/recette.component';
import { RecetteDescriptionComponent } from './components/recette-description/recette-description.component';
import { RecettesComponent } from './components/recettes/recettes.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { IngredientListeComponent } from './components/ingredient-liste/ingredient-liste.component';
import { EtapeComponent } from './components/etape/etape.component';
import { EtapeListeComponent } from './components/etape-liste/etape-liste.component';
import { ErreurPageComponent } from './components/erreur-page/erreur-page.component';

// Components partagés
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BarreRechercheComponent } from './shared/barre-recherche/barre-recherche.component';
import { HeaderComponent } from './shared/header/header.component';


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
    EtapeListeComponent,
    EtapeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
