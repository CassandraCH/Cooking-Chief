import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { TweetComponent } from './tweet/tweet.component';
import { InstaPostComponent } from './insta-post/insta-post.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RecetteDescriptionComponent } from './recette-description/recette-description.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    TweetComponent,
    InstaPostComponent,
    MainContentComponent,
    RecetteDescriptionComponent,
    BarreRechercheComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
