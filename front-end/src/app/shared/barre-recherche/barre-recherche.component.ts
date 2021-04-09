import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecettesService } from '../../services/recettes.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit, OnDestroy{
	// formulaire (input de la barre de recherche)
	rechercheForm: FormGroup;

	// Message d'erreur (lorsque l'utilisateur clique sur le bouton sans n'avoir rien saisi)
	messageErreur: string;
	recetteSubscription: Subscription;

	// booleen qui permet de bloquer le bouton
	isDisabled: boolean;

	// mot-clé rechercher
	recherche: string = "";

	constructor(private recettesService: RecettesService,
				private formBuilder: FormBuilder,
				private router: Router) { }

	ngOnInit(): void { this.initForm(); }

	// Initialisation du formulaire
	initForm(){ this.rechercheForm = this.formBuilder.group( { recherche: ['', Validators.required] } ); }

	// Méthode exécutée lors du clic sur le bouton de la barre de recherche
	onRecherche(){
		// Recupération de la recherche
		this.recherche = this.rechercheForm.get('recherche').value;

		// Vérification que l'utilisateur a saisi quelque chose
		if(this.recherche !== ''){
			// console.log("Recherche : " + this.recherche);
			this.recettesService.setValRecherche(this.recherche);

			this.messageErreur = "";

			// Recherche dans la bdd ou requete via api si pas de résultat dans la bdd
			this.recettesService.rechercher(this.recherche).then(
			() => {
				// redirection de l'utilisateur sur la bonne page
				this.rediriger(this.recettesService.tabNonVide());
			}, (err) => {
				console.log("Erreur dans la recherche : "+err);
			});

			// Réinitialisation de la barre de recherche
			this.initForm();

			// On bloque le bouton
			this.onClick();
		}
		// Cas ou le champ de recherche est vide => affichage du message d'erreur
		else{ this.messageErreur = "Veuillez saisir quelque chose"; }
	}

	// Permet de rédiger l'utilisateur soit vers la page de résultats, soit vers la page
	// 'no-result'
	rediriger(val: boolean){
		if(val){
			// redirection vers les resultats de la recherche
			this.router.navigate(['/']).then( () => { this.router.navigate(['/results', this.recherche]) } );
			// console.log("redirection OK");
		}
		else{
			// redirection vers la page 'no-result'
			this.router.navigate(['/']).then( () => { this.router.navigate(['/results', 'no-result']) } );
			// console.log("redirection 'no-result' OK");
		}

	}

	// Bloquer l'accès à plusieurs requêtes pendant 5 secondes
	// Permet de limiter les requêtes à l'api et à la bdd
	onClick() {
		this.isDisabled = true;
		setTimeout( () => { this.isDisabled = false; }, 5000);
	}

	// ne pas oublier => sinon, risque de bugs
	ngOnDestroy(){ this.recetteSubscription.unsubscribe(); }
}
