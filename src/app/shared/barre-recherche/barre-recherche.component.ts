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
    console.log("Recherche : " + recherche);
    this.recettesService.setValRecherche(recherche);


    // A implementer => requete a l'api en fonction de la recherche


    // redirection vers les resultats de la recherche
    this.router.navigate(['/results']);
  }

}
