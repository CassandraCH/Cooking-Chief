import { Injectable } from '@angular/core';
import { Recette } from '../models/Recette.models';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  valRecherche: string;
  constructor() { }

  setValRecherche(valeur: string){
    this.valRecherche = valeur;
  }

  getValRecherche(){
    return this.valRecherche;
  }
}
