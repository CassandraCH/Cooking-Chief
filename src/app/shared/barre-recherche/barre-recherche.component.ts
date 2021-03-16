import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecettesService } from '../../services/recettes.service';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  rechercheForm: FormGroup;
  messageErreur: string;

  constructor(private recettesService: RecettesService,
              private formBuilder: FormBuilder,
              private router: Router) { }

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

      // A implementer => requete a l'api en fonction de la recherche


      // redirection vers les resultats de la recherche
      this.router.navigate(['/']).then(
        () => {
          this.router.navigate(['/results', recherche]);
        }
      );
      this.initForm();
    }
    // cas où l'api ne fournit pas de resultat
    // else if(){
    //   // redirection vers la page 'no-result'
    //   this.router.navigate(['/']).then(
    //     () => {
    //       this.router.navigate(['/results']);
    //     }
    //   );
    // }
    // Cas ou le champ de recherche est vide
    else{
      this.messageErreur = "Veuillez saisir quelque chose";
    }

  }

}
