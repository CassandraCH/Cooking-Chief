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

	// mot-clé recherché
	valRecherche: string;

	// tableau avec les recettes de la recherche actuelle
	tabRecettes: Recette[] = [];

	// tableau avec toutes les données stockées de la bdd
	tableauBDD: any[] = [];

	// recette du jour
	recetteDuJour: Recette;

	// booleen qui permet de savoir si les données de bdd ont été chargées
	chargement: Boolean = false;

	private recettesSubject = new Subject<Recette[]>();

	emitRecetteSubject() {
		// destructuration du tableau pour travailler avec une copie et non l'original
		return this.recettesSubject.next([...this.tabRecettes]);
	}

	// Renvoi un observable sur le subject à observer => la liste des recettes
	getRecettesUpdateListener() : Observable<Recette[]> { return this.recettesSubject.asObservable(); }

	// Technique pas optimale mais seule solution trouvée pour avoir des résultats car
	// sans faire comme ça, nous avions des problèmes car les données arrivaient après la mise
	// à jour de l'afficahge, vu que les requêtes sont asynchones.
	// EXPLICATION DE L'IDEE : récupérer tout ce qu'il y a de stocké dans la bdd et en faire une
	// copie. Lors d'une recherche par l'utilisateur, on vérifie que ce qu'il cherche est
	// présent dans le tableau.
	// SI OUI : on remplit le tableau tabRecettes en conséquence
	// SINON : on fait appel à l'api
	// Cette technique permet d'éviter de faire trop d'appel à la bdd et trop de
	// requêtes à l'api (dont le nombre de requêtes est limité à 10/min et 10 000/mois)
	getRecettesFromBDD(){
		console.log("getRecettesFromBDD()");

		// RECUPERATION DES TOUTES LES DONNEES DANS LA BDD
		this.http.get<any>(this.url).toPromise().then(
			(response) =>  {
				this.tableauBDD = response; // copie des données de la bdd
				// console.log(this.tableauBDD);
				console.log("Recuperation des données de la bdd OK");

				// Suppression des doublons
				const tmp = Array.from(new Set(this.tableauBDD));
				this.tableauBDD = tmp;

				// génération aléatoire de la recette du jour
				this.recetteDuJour = this.genererRecetteAleatoire();

				console.log("Fin getRecettesFromBDD()");

				// Mise à jour du booleen de chargement
				this.chargement = true;
			},
			(err) => {
				console.log("Erreur getRecettesFromBDD() : "+err);
			}
		);
	}

	// Permet d'ajouter les recettes correspondantes à la recherche
	// dans le tableau temporaire (tabRecettes)
	ajouterDansTableau(res){
		// Vider le tableau pour mettre les nouvelles recettes
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
		let trouve;

		// toLowerCase permet d'éviter de se préoccuper de la casse
		motCle = motCle.toLowerCase();

		// On vérifie que les données de la bdd ont bien été récupérées
		if(this.chargement){

			// si on trouve le mot-clé dans le tableau => on remplit le tableau avec les données correspondantes
			this.tableauBDD.find( ({q, hits}) => {
				if(q == motCle) {
					console.log("J'ai trouvé pour "+motCle);
					this.ajouterDansTableau(hits);
					trouve = true;
					return trouve;
				}
				else{ trouve = false }
			});
			// Si on ne trouve pas dans la bdd => requete à l'api
			if(!trouve) {
				console.log("J'ai pas trouvé pour "+motCle+" ==> je demande à l'api");
				await this.recupererResultatViaAPI(motCle);
			}

		}
	}

	// Permet de récupérer le résultat de la requête à l'api
	async recupererResultatViaAPI(motCle: string){
		console.log("Appel de l'api en cours...");
		const data = await this.requeteApi(motCle);

		// Envoyer les données dans la base de données que si elles sont valides
		if(data != null){
			// Enregistrer le résultat de la requête dans la bdd
			this.enregistrerDansBDD(data);
			// Ajouter les recettes dans le tableau de recettes
			this.ajouterDansTableau(data['hits']);
		}
		else{ console.log("Pas de resultats via l'api"); }
	}

	// Methode qui permet de faire une requete à l'api
	async requeteApi(motCle: string){
		let APP_ID = "4c9755a7";
		let APP_KEY = "4f1e59bb1fddf09974a0bb3b33de90d8";

		// REQUETE A L'API
		return fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${motCle}`).then(response => {
			// Si la réponse est valide (=> renvoi 200) : la requête est transformée en json et retournée
			if ( response.status >= 200 && response.status < 300 ){
				return response.json();
			}
			// Sinon on lance une erreur
			else { return  new Error('Erreur durant le chargement - coté serveur'); }
		})
		.catch(error => { throw new Error('Erreur durant le chargement'); });
	}

	// Permet de faire un post dans la bdd (ajout d'une nouvelle donnée)
	enregistrerDansBDD(data){
		// Vérification que l'api a renvoyée des recettes (more : booleen que l'api fournit)
		if(data.more != false){
			this.http.post(this.url, data).subscribe(
				() => { console.log("Enregistrement dans la bdd OK"); },
				(err) =>  { console.log("Erreur de sauvegarde : "+err); }
			);
		}
		else{ console.log("Pas de résultat => pas d'enregistrement"); }

		// Mise à jour du tableau de la bdd
		this.getRecettesFromBDD();
	}


	// Renvoi une recette si elle est trouve (en fonction de l'id)
	getRecetteById(id: number){
		const recipe = this.tabRecettes.find(
			(r) => { return r.id === id;
		});
		return recipe;
	}

	// Permet de retourner une recette tirée aléatoirement dans la bdd
	genererRecetteAleatoire(){
		// Génération de 2 nombres aléatoires :
		// * nb1 : entre 0 et le nombre de mot-clés stockés dans la bdd
		// * nb2 : entre 0 et 10 (nombre max de recettes que fournit l'api)
		const nb1 = Math.floor(Math.random() * this.getTailleTableauBdd());
		const nb2 = Math.floor(Math.random() * 10);

		// On vérifie qu'on a bien récupérer les données de la bdd
		if(this.getTailleTableauBdd() != 0){
			// Sélection de l'index dans la bdd
			const tab = this.tableauBDD[nb1];

			// Sélection de la recette parmis les 10 proposées
			const tmp = tab['hits'][nb2];

			let rec: Recette = {
				id: -1,
				titre: tmp.recipe.label,
				image: tmp.recipe.image,
				nbPortions: tmp.recipe.yield,
				listeIngredients: tmp.recipe.ingredientLines,
				calories: tmp.recipe.calories,
				tempsPreparation: tmp.recipe.totalTime,
				auteur: tmp.recipe.source,
				url: tmp.recipe.url
			}
			return rec;
		}
	}

	// setter du mot-clé rechercher
	setValRecherche(valeur: string){ this.valRecherche = valeur; }

	// getter du mot-clé recherché
	getValRecherche(){ return this.valRecherche; }

	// getter de la taille du tableau des données de la bdd
	getTailleTableauBdd(){ return (this.tableauBDD.length);	}

	// getter de la recette du jour
	getRecetteDuJour(){ return this.recetteDuJour; }

	// permet de récupérer le tableau avec les recettes de la recherche
	getTabRecettes(): Recette[]{ return this.tabRecettes; }

	// Vérifie si le tableau de recettes est rempli
	tabNonVide() { return (this.tabRecettes.length > 0); }

	// Permet de vide le tableau de recettes (avec le mot-clé actuel)
	viderTableau(){	this.tabRecettes = []; }

	// permet de savoir si les données ont bien été chargées depuis la bdd
	chargementOK(): Boolean{ return this.chargement; }
}
