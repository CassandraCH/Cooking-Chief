// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

// Component principal
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';

import { ReseauxSociauxComponent } from './components/reseaux-sociaux/reseaux-sociaux.component';
import { InstaFeedComponent } from './components/reseaux-sociaux/insta-feed/insta-feed.component';
import { InstaPostComponent } from './components/reseaux-sociaux/insta-feed/insta-post/insta-post.component';
import { TwitterFeedComponent } from './components/reseaux-sociaux/twitter-feed/twitter-feed.component';
import { TweetComponent } from './components/reseaux-sociaux/twitter-feed/tweet/tweet.component';

import { ResultatsComponent } from './components/resultats/resultats.component';
import { RecetteComponent} from './components/resultats/recette/recette.component';
import { RecetteDescriptionComponent } from './components/resultats/recette-description/recette-description.component'
import { NoResultComponent } from './components/resultats/no-result/no-result.component';

import { ErreurPageComponent } from './components/erreur-page/erreur-page.component';

// Components partagés
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BarreRechercheComponent } from './shared/barre-recherche/barre-recherche.component';
import { HeaderComponent } from './shared/header/header.component';

// Services
import { RecettesService } from './services/recettes.service';
import { RecetteResolver } from './services/recette-resolver.service';
import { ResultatsGuard } from './services/resultats-guard.service';

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
    ResultatsComponent,
    RecetteComponent,
    RecetteDescriptionComponent,
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
    NgxPaginationModule,
  ],
  providers: [
    RecettesService,
    RecetteResolver,
    ResultatsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
