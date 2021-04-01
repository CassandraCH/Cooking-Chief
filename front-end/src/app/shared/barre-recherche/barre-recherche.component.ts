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
  private recettes: Recette[] = [];
  recetteSubscription: Subscription;
  isDisabled: boolean;

  constructor(private recettesService: RecettesService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();

  }

  initForm(){
    this.rechercheForm = this.formBuilder.group( { recherche: ['', Validators.required] } );
  }

  // Bloquer l'accès à plusieurs requêtes pendant 5 secondes
  onClick() {
    this.isDisabled = true;

    setTimeout(() => {
      this.isDisabled = false;
    }, 5000);
  }

  onRecherche(){


    // 2. Vérifier si la nouvelle recherche n'est pas la même que la précédente :
    // Si c'est la même : on fait en sorte de pas dupliquer les résultats
    // Si c'est pas la même : on vide le tableau et on met à jour avec les nouveaux résultats


    this.recettesService.getRecettes();

    // Recupération de la recherche
    const recherche = this.rechercheForm.get('recherche').value;

    // Vérification que l'utilisateur a saisi quelque chose
    if(recherche !== ''){
      console.log("Recherche : " + recherche);
      this.recettesService.setValRecherche(recherche);
      this.messageErreur = '';

      // A implementer => requete a l'api en fonction de la recherche

      // Si l'api a renvoyé 1 ou plusieurs résultats à la recherche
      if(this.recettesService.tabNonVide()){
        // redirection vers les resultats de la recherche
        this.router.navigate(['/']).then(
          () => { this.router.navigate(['/results', recherche]) }
        );
      }
      // cas où l'api ne fournit pas de resultat == tableau vide
      else {
        // redirection vers la page 'no-result'
        this.router.navigate(['/']).then(
          () => { this.router.navigate(['/results', 'no-result']) }
        );
      }


      this.initForm();
    }
    // Cas ou le champ de recherche est vide
    else{
      this.messageErreur = "Veuillez saisir quelque chose";
    }
  }

  ngOnDestroy(){
    // ne pas oublier => sinon, risque de bugs
    this.recetteSubscription.unsubscribe();
  }
}
