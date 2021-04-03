import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Recette } from '../models/Recette.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

	constructor(private http: HttpClient){ }

	// url vers la bdd (en local pour le moment)
	url = 'http://localhost:5500/';

	valRecherche: string;

	// tableau avec les recettes de la recherche actuelle
	tabRecettes: Recette[] = [];

	// tableau avec toutes les données stockées de la bdd
	tableauBDD: any[] = [];

	private recettesSubject = new Subject<Recette[]>();

	emitRecetteSubject() {
		//   je fais un ... afin de destructurer le tableau
		// renvoyés une copie et non l'original
		return this.recettesSubject.next([...this.tabRecettes]);
	}

	// Renvoi un observable sur le subject à observer
	// dans le cas présent : la liste des recettes
	getRecettesUpdateListener() : Observable<Recette[]> { return this.recettesSubject.asObservable(); }

	// permet de récupérer le tableau avec les recettes de la recherche
	getTabRecettes(): Recette[]{ return this.tabRecettes; }

	// Technique pas optimale mais seule solution trouvée pouravoir des résultats car
	// sans faire comme ça, nous avions des problèmes car les données arrivaient trop tard
	// vu que les requêtes sont asynchones.
	// IDEE : récupérer tout ce qu'il y a de stocké sur la bdd et en faire une
	// copie. Lors d'une recherche par l'utilisateur, on vérifie que ce qu'il cherché est
	// présent dans le tableau.
	// SI OUI : on remplit le tableau tabRecettes en conséquence
	// SINON : on fait appel à l'api
	// Cette technique permet d'éviter de faire trop d'appel à la bdd et trop de
	// requêtes à l'api (dont le nombre de requêtes est limité)
	getRecettesFromBDD(){
	// RECUPERATION DES TOUTES LES DONNEES DANS LA BDD
		return this.http.get<any>(this.url).subscribe(
			(response) =>  {
				this.tableauBDD = response; // copie des données de la bdd
				console.log(this.tableauBDD);
				console.log("Recuperation des données de la bdd OK");
		});
	}

	// Permet d'ajouter les recettes correspondantes à la recherche
	// dans le tableau temporaire (tabRecettes)
	ajouterDansTableau(res){
		this.viderTableau();
		let id = 1;

		res.forEach( (value) => {
			let rec: Recette = {
				id: id,
				titre: value.recipe.label,
				image: value.recipe.image,
				nbPortions: value.recipe.yield,
				listeIngredients: value.recipe.ingredientLines,
				calories: value.recipe.calories,
				tempsPreparation: value.recipe.totalTime,
				auteur: value.recipe.source,
				url: value.recipe.url
			}
			id+= 1;
			this.tabRecettes.push(rec);

		});
	}

	// Recherche dans le tableau avec toutes les données de la bdd
	// si le mot-clé recherche
	rechercher(motCle: string){
		let trouve = false;

		// si on trouve le mot-clé dans le tableau => on remplit le tableau
		const res = this.tableauBDD.find( ({q, hits}) => {
			// toLowerCase permet d'éviter de se préoccuper de la casse
			if(q == motCle.toLowerCase()) {
				console.log("j'ai trouvé pour "+motCle);
				this.ajouterDansTableau(hits);
				trouve = true;
			}
		});

		// Sinon, on vide le tableau (au cas où, il avait déjà été rempli dans une recherche précédente)
		if(!trouve) {
			console.log("j'ai pas trouvé pour "+motCle);
			this.viderTableau();
		}
	}

	// Renvoi une recette si elle est trouve
	getRecetteById(id: number){
		const recipe = this.tabRecettes.find(
			(r) => { return r.id === id;
		});
		return recipe;
	}


	// Vérifie si le tableau de recettes est rempli
	tabNonVide() { return (this.tabRecettes.length > 0); }

	// Permet de vide le tableau de recettes (avec le mot-clé actuel)
	viderTableau(){	this.tabRecettes = []; }

	setValRecherche(valeur: string){ this.valRecherche = valeur; }

	getValRecherche(){ return this.valRecherche; }
}
