import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recette } from '../models/Recette.models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {


  constructor(private http: HttpClient ){

  }

  tempUrl = '../../assets/test_api/pizza.json';

  valRecherche: string;
  // recettes: Recette[] = [];
  recettes: any[] = [];
  // recettesSubject = new Subject<Recette[]>();
  recettesSubject = new Subject<any[]>();

  emitRecette(){
    return this.recettesSubject.next(this.recettes);
  }
  /*
    Dans le component où tu récupères les recettes
    tu fais dans un premier temps
    recetteService.getRecettes()
    puis il te faut un objet Subscription
    tel que recetteSubscription: Subscription
    this.recetteSubscription=  this.recetteService.subscribe( (result) => {
    console.log(result);
      this.taList = result;
    })

    Il faut implémenter le OnDestroy dans ton component
    et implémenter
    ngOnDestroy() {
      this.recetteSubscription.unsubscribe();
    }
    Quand on souscrit à un Observable il faut absolument de désinscrire afin
  d'éviter toute fuite mémoire
  */
  getRecettes(){
    // RECUPERATION DES RECETTES RENVOYEES PAR L'API
    this.http.get<Recette[]>(this.tempUrl)
    .subscribe( (response) =>  {
      this.recettes = response.hits;
      //   je vais un ... afin de destructurer le tableau et
      // renvoyés une copie et non l'original ;)
      this.recettesSubject.next([...this.recettes]);
      console.log(this.recettes);
    })
  }

  getUneRecette(nom: string){
    // En l'état cela nécéssite que getRecettes à au moins appelé était une fois
    // Sinon le tableau recettes sera vide ;)
    // J'ai pas testé à vérifié
    return this.recettes.find((val) => val.label == nom);
  }


  setValRecherche(valeur: string){
    this.valRecherche = valeur;
  }

  getValRecherche(){
    return this.valRecherche;
  }
}
