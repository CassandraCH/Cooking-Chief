import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../../services/recettes.service';
import { Resultat } from '../../models/Resultat.models';// modèle de données

@Component({
  selector: 'app-recette-description',
  templateUrl: './recette-description.component.html',
  styleUrls: ['./recette-description.component.css']
})
export class RecetteDescriptionComponent implements OnInit {

  constructor(private recettesService: RecettesService) { }

  ngOnInit(): void {
  }

}
