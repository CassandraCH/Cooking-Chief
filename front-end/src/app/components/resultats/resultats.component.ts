import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recette } from 'src/app/models/Recette.models';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit, OnDestroy {

  valRecherche: string = '';
  recettes: Recette[] = [];
  recetteSubscription: Subscription;

  config: any;

  constructor(private recettesService: RecettesService) {
    // Configuration de la pagination
    this.config = {
      itemsPerPage: 4,                  // 4 recettes/page
      currentPage: 1,                   // page actuelle == 1
      totalItems: this.recettes.length  // nombre total de recettes == taille
    };
  }

  ngOnInit(): void {
    // On place un écouteur sur le service recette afin de récupérer le tableau de recettes
    this.recetteSubscription = this.recettesService.getRecettesUpdateListener().subscribe(
      // On récupère les recettes du service
      (data: Recette[]) => { this.recettes = data; }
    );

    // emitRecetteSubject n'emet pas mais récupère le tableau de recette
    this.recettesService.emitRecetteSubject();

    // Récupération du mot-clé cherché
    this.valRecherche = this.recettesService.getValRecherche();
  }

  // Changement de page ('précédent' ou 'suivant')
  pageChanged(event){ this.config.currentPage = event; }

  // Désinscription de l'observable
  ngOnDestroy(){ this.recetteSubscription.unsubscribe(); }
}
