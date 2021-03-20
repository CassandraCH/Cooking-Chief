import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recette } from '../models/Recette.models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  tempUrl = '../../assets/test_api/pizza.json';

  valRecherche: string;
  recettes: any[] = [];
  tabRecettes: Recette[] = [];
  recettesSubject = new Subject<any[]>();

  constructor(private http: HttpClient){ }

  emitRecette(){
    return this.recettesSubject.next(this.recettes.slice());
  }

  getRecettes(){
    // RECUPERATION DES RECETTES RENVOYEES PAR L'API
    // (pour le moment par le fichier json pour les tests)
    this.http.get<Recette[]>(this.tempUrl)
      .subscribe( (response) =>  {
        this.recettes = response["hits"];
        //   je fais un ... afin de destructurer le tableau et
        // renvoyés une copie et non l'original ;)
        this.recettesSubject.next([...this.recettes]);

        this.recettes.forEach( (value) => {
          let rec: Recette = {
            titre: value.recipe.label,
            image: value.recipe.image,
            nbPortions: value.recipe.yield,
            tags: value.recipe.healthLabels,
            listeIngredients: value.recipe.ingredientLines,
            calories: value.recipe.calories,
            tempsPreparation: value.recipe.totalTime,
            auteur: value.recipe.source,
            url: value.recipe.url
          }

          this.tabRecettes.push(rec);
        })

        console.log("recettes : ");
        console.log(this.tabRecettes);
      })
  }

  getUneRecette(nom: string){
    // En l'état cela nécéssite que getRecettes à au moins appelé était une fois
    // Sinon le tableau recettes sera vide ;)
    return this.recettes.find((val) => val.label == nom);
  }

  setValRecherche(valeur: string){
    this.valRecherche = valeur;
  }

  getValRecherche(){
    return this.valRecherche;
  }
}
