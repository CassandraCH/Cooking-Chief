import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recette } from 'src/app/models/Recette.models';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit, OnDestroy {

  valRecherche: string = '';
  recettes: Recette[] = [];
  recetteSubscription: Subscription;

  constructor(private recettesService: RecettesService) {
    console.log("RecetteComponent");
  }

  ngOnInit(): void {

    // On place un ecouteur sur le service recette afin de récupérer le tableau
    // de recette
    this.recetteSubscription = this.recettesService.getRecettesUpdateListener().subscribe(
      // On récupère les recettes du service
      (data: any) => {
        console.log(data);
        this.recettes = data;
      }
    );

    // emitRecette n'emet pas mais récupère le tableau de recette
    this.recettesService.emitRecette();

    this.valRecherche = this.recettesService.getValRecherche();
  }


  // Désinscription de l'observable
  ngOnDestroy(){
    this.recetteSubscription.unsubscribe();
  }
}
