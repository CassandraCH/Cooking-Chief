import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecettesService } from '../../services/recettes.service';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  constructor(private recettesService: RecettesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onRecherche(form: NgForm){
    // Recupération de la recherche
    const recherche = form.value['recherche'];
    console.log("Recherche : " + recherche);

    // A implementer => requete a l'api en fonction de la recherche

    // redirection vers les resultats de la recherche
    this.router.navigate(['results']);
  }

}
