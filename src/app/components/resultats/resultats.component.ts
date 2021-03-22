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

  constructor(private recettesService: RecettesService) {
    console.log("Resultats component - début");
  }

  ngOnInit(): void {

    // On place un écouteur sur le service recette afin de récupérer le tableau
    // de recette
    this.recetteSubscription = this.recettesService.getRecettesUpdateListener().subscribe(
      // On récupère les recettes du service
      (data: any) => {
        console.log(data);
        this.recettes = data;
      }
    );

    // emitRecetteSubject n'emet pas mais récupère le tableau de recette
    this.recettesService.emitRecetteSubject();
    this.valRecherche = this.recettesService.getValRecherche();
  }

  // Désinscription de l'observable
  ngOnDestroy(){
    this.recetteSubscription.unsubscribe();
    console.log("Resultats component - fin");
  }
}
