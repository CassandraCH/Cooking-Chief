import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../../services/recettes.service';
import { Resultat } from '../../models/Resultat.models';// modèle de données
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recette-description',
  templateUrl: './recette-description.component.html',
  styleUrls: ['./recette-description.component.css']
})
export class RecetteDescriptionComponent implements OnInit {

  constructor(private recettesService: RecettesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick(){
    const nom = this.route.snapshot.params['nom'];
    // Redirection
    this.router.navigate(['/results', nom ,'details']);
  }
}
