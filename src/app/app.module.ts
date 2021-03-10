import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { MainContentComponent } from './main-content/main-content.component';
import { RecetteDescriptionComponent } from './recette-description/recette-description.component';
import { BarreRechercheComponent } from './shared/barre-recherche/barre-recherche.component';
import { HeaderComponent } from './header/header.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { EtapeComponent } from './etape/etape.component';
import { EtapeListeComponent } from './etape-liste/etape-liste.component';
import { IngredientListeComponent } from './ingredient-liste/ingredient-liste.component';
import { RecetteComponent } from './recette/recette.component';
import { RecettesComponent } from './recettes/recettes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RecetteDescriptionComponent,
    BarreRechercheComponent,
    HeaderComponent,
    IngredientComponent,
    EtapeComponent,
    EtapeListeComponent,
    IngredientListeComponent,
    RecetteComponent,
    RecettesComponent,
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
