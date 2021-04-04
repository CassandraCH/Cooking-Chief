import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Recette } from '../models/Recette.models';
import { HttpClient } from '@angular/common/http';
// import { arrayShuffle } from 'array-shuffle';
import arrayShuffle from "array-shuffle";




@Injectable({
  providedIn: 'root'
})
export class RecettesService {

	constructor(private http: HttpClient){ }

	// url vers la bdd (en local pour le moment)
	url = 'http://localhost:5500/';

	// mot-clé recherché
	valRecherche: string;

	// tableau avec les recettes de la recherche actuelle
	tabRecettes: Recette[] = [];

	// tableau avec toutes les données stockées de la bdd
	tableauBDD: any[] = [];

	private recettesSubject = new Subject<Recette[]>();

	emitRecetteSubject() {
		// je fais un ... afin de destructurer le tableau
		// renvoyés une copie et non l'original
		return this.recettesSubject.next([...this.tabRecettes]);
	}

	// Renvoi un observable sur le subject à observer
	// dans le cas présent : la liste des recettes
	getRecettesUpdateListener() : Observable<Recette[]> { return this.recettesSubject.asObservable(); }

	// permet de récupérer le tableau avec les recettes de la recherche
	getTabRecettes(): Recette[]{ return this.tabRecettes; }


	// Technique pas optimale mais seule solution trouvée pour avoir des résultats car
	// sans faire comme ça, nous avions des problèmes car les données arrivaient après la mise
	// à jour de l'afficahge, vu que les requêtes sont asynchones.
	// IDEE : récupérer tout ce qu'il y a de stocké sur la bdd et en faire une
	// copie. Lors d'une recherche par l'utilisateur, on vérifie que ce qu'il cherché est
	// présent dans le tableau.
	// SI OUI : on remplit le tableau tabRecettes en conséquence
	// SINON : on fait appel à l'api
	// Cette technique permet d'éviter de faire trop d'appel à la bdd et trop de
	// requêtes à l'api (dont le nombre de requêtes est limité)
	getRecettesFromBDD(){
		this.viderTableauBDD();
		// RECUPERATION DES TOUTES LES DONNEES DANS LA BDD
		this.http.get<any>(this.url).subscribe(
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

		// Ajout des recettes dans le tableau selon le modèle
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
	// si le mot-clé recherche est present dans la bdd : on récupère les recettes
	// sinon : on fait une requête à l'api
	async rechercher(motCle: string){
		let trouve = false;

		// toLowerCase permet d'éviter de se préoccuper de la casse
		motCle = motCle.toLowerCase();

		// si on trouve le mot-clé dans le tableau => on remplit le tableau avec les données correspondantes
		this.tableauBDD.find( ({q, hits}) => {
			if(q == motCle) {
				console.log("J'ai trouvé pour "+motCle);
				this.ajouterDansTableau(hits);
				trouve = true;
			}
		});

		// Si on ne trouve pas dans la bdd => requete à l'api
		if(!trouve) {
			console.log("J'ai pas trouvé pour "+motCle+" ==> je demande à l'api");
			await this.recupererResultatViaAPI(motCle);
		}
	}

	// Permet de récupérer le résultat de la requête à l'api
	async recupererResultatViaAPI(motCle: string){
		console.log("Appel de l'api en cours...");
		const data = await this.requeteApi(motCle);
		// console.log(data);

		// Envoyer les données dans la base de données
		this.enregistrerDansBDD(data);

		// Ajouter les recettes dans le tableau de recettes
		this.ajouterDansTableau(data['hits']);
	}

	// Methode qui permet de faire une requete à l'api
	async requeteApi(motCle: string){
		let APP_ID = "4c9755a7";
		let APP_KEY = "4f1e59bb1fddf09974a0bb3b33de90d8";

		return fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${motCle}`).then(response => {
			// Si la réponse est valide (=> renvoi 200) : la requête est transformée en json et retournée
			if ( response.status >= 200 && response.status < 300 ){
				return response.json();
			}
			// Sinon on lance une erreur
			else {
				return  new Error('Erreur durant le chargement - coté serveur');
			}
		})
		.catch(error => {
			// alert(error);
			throw new Error('Erreur durant le chargement');
		});
	}

	// Permet de faire un post dans la bdd (ajout d'une nouvelle donnée)
	enregistrerDansBDD(data){
		this.http.post(this.url, data).subscribe(
			() => { console.log("Enregistrement dans la bdd OK"); },
			(err) =>  { console.log("Erreur de sauvegarde : "+err); }
		);

		// Mise à jour du tableau de la bdd
		this.getRecettesFromBDD();
		// this.emitRecetteSubject();
	}


	// Renvoi une recette si elle est trouve (en fonction de l'id)
	getRecetteById(id: number){
		const recipe = this.tabRecettes.find(
			(r) => { return r.id === id;
		});
		return recipe;
	}

	genererRecetteAleatoire(){
		const shuffled = arrayShuffle(this.tableauBDD);
		console.log("genererRecetteAleatoire()");
		console.log(shuffled);
	}

	// Vérifie si le tableau de recettes est rempli
	tabNonVide() { return (this.tabRecettes.length > 0); }

	// Permet de vide le tableau de recettes (avec le mot-clé actuel)
	viderTableau(){	this.tabRecettes = []; }

	viderTableauBDD(){ this.tableauBDD = []; }

	setValRecherche(valeur: string){ this.valRecherche = valeur; }

	getValRecherche(){ return this.valRecherche; }
}
function arrayShuffle(tableauBDD: any[]) {
	throw new Error('Function not implemented.');
}
