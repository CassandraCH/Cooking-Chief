import { Injectable } from '@angular/core';

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
