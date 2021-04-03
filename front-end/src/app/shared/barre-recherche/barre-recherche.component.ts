import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecettesService } from '../../services/recettes.service';
import { Recette } from '../../models/Recette.models';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit, OnDestroy{

  rechercheForm: FormGroup;
  messageErreur: string;
  recetteSubscription: Subscription;
  isDisabled: boolean;

  constructor(private recettesService: RecettesService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    // Récupération des données stockées dans la bdd
    this.recettesService.getRecettesFromBDD();
    this.initForm();
  }

  // Initialisation du formulaire
  initForm(){
    this.rechercheForm = this.formBuilder.group( { recherche: ['', Validators.required] } );
     // Récupération des données stockées dans la bdd
    this.recettesService.getRecettesFromBDD();
  }

  // Méthode exécutée lors du clic sur le bouton de la barre de recherche
  onRecherche(){
    // Recupération de la recherche
    const recherche = this.rechercheForm.get('recherche').value;

    // Vérification que l'utilisateur a saisi quelque chose
    if(recherche !== ''){
      console.log("Recherche : " + recherche);
      this.recettesService.setValRecherche(recherche);

      // Recherche
      this.recettesService.rechercher(recherche);

      this.messageErreur = '';

      // Si au moins un resultat est obtenu (== tableau non vide)
      if(this.recettesService.tabNonVide()){
        // redirection vers les resultats de la recherche
        this.router.navigate(['/']).then(
          () => { this.router.navigate(['/results', recherche]) }
        );
      }
      // cas ou pas de résultat (== tableau vide)
      else {
        // redirection vers la page 'no-result'
        this.router.navigate(['/']).then(
          () => { this.router.navigate(['/results', 'no-result']) }
        );
      }

      this.initForm();

      // On bloque le bouton
      this.onClick();
    }
    // Cas ou le champ de recherche est vide => affichage du message d'erreur
    else{
      this.messageErreur = "Veuillez saisir quelque chose";
    }

  }

  // Bloquer l'accès à plusieurs requêtes pendant 5 secondes
  onClick() {
    this.isDisabled = true;

    setTimeout(() => {
      this.isDisabled = false;
    }, 5000);
  }

  ngOnDestroy(){
    // ne pas oublier => sinon, risque de bugs
    this.recetteSubscription.unsubscribe();
  }
}
