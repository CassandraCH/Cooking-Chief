import { Component, Input, OnInit } from '@angular/core';
// import { RecettesService } from '../../services/recettes.service';
// import { Resultat } from '../../models/Resultat.models';// modèle de données
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recette-description',
  templateUrl: './recette-description.component.html',
  styleUrls: ['./recette-description.component.css']
})
export class RecetteDescriptionComponent implements OnInit {
  @Input() indexRecette: number;
  @Input() recetteImage: string;
  @Input() recetteTitre: string;
  @Input() recetteAuteur: string;
  @Input() recetteNbPortions: number;
  @Input() recetteCalories: number;
  @Input() recetteTags: string[];
  @Input() recherche: string;
  @Input() id: number;


  constructor(//private recettesService: RecettesService,
              private router: Router,
              private route: ActivatedRoute) {
    this.indexRecette = 0;
    this.recetteImage = "";
    this.recetteTitre = "";
    this.recetteAuteur = "";
    this.recetteNbPortions = 0;
    this.recetteCalories = 0;
    this.recetteTags = [];
    this.recherche = "";
    this.id = 0;
  }

  ngOnInit(): void {
  }

  onClick(){
    const nom = this.route.snapshot.params['nom'];
    // Redirection
    this.router.navigate(['/results', nom , this.id]);
  }
}
