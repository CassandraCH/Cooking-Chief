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

  constructor(private recettesService: RecettesService) { }

  ngOnInit(): void {
    // récupération de la recherche
    this.valRecherche = this.recettesService.getValRecherche();
    this.recetteSubscription = this.recettesService.recettesSubject.subscribe(
      // On récupère les recettes du service
      (recettes: Recette[]) => {
        this.recettes = recettes;
      }
    );
    console.log("avant : recettes-component : ");
    console.log(this.recettes);
    this.recettesService.emitRecette();
    console.log("apres : recettes-component : ");
    console.log(object);
  }

  ngOnDestroy(){
    this.recetteSubscription.unsubscribe();
  }
}
