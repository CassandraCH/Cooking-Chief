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
  recettes: any[] = [];
  recetteSubscription: Subscription;

  constructor(private recettesService: RecettesService,
              private formBuilder: FormBuilder,
              private router: Router)
  {
    this.recetteSubscription = this.recettesService.recettesSubject.subscribe(
      // On récupère les recettes du service
      (recettes: Recette[]) => {
        this.recettes = recettes;
      }
    );
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.rechercheForm = this.formBuilder.group(
      {
        recherche: ['', Validators.required]
      }
    );
  }

  onRecherche(){
    // Recupération de la recherche
    const recherche = this.rechercheForm.get('recherche').value;

    // Vérification que l'utilisateur a saisi quelque chose
    if(recherche !== ''){
      console.log("Recherche : " + recherche);
      this.recettesService.setValRecherche(recherche);
      this.messageErreur = '';

      this.recettesService.getRecettes();

      // A implementer => requete a l'api en fonction de la recherche

      // Si l'api a renvoyé 1 ou plusieurs résultats à la recherche
      if(this.recettes.length > 0){
        // redirection vers les resultats de la recherche
        this.router.navigate(['/']).then(
          () => { this.router.navigate(['/results', recherche]) }
        );
      }
      // cas où l'api ne fournit pas de resultat == tableau vide
      else {
        // redirection vers la page 'no-result'
        this.router.navigate(['/']).then(
          () => { this.router.navigate(['/no-result']) }
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
