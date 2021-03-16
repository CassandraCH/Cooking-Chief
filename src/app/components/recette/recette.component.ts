import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../../services/recettes.service';
import { Recette } from '../../models/Recette.models'; //modèle de données

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  constructor(private recettesService : RecettesService) { }

  ngOnInit(): void {
  }

}
