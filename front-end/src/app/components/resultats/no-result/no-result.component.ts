import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../../../services/recettes.service';

@Component({
  selector: 'app-no-result',
  templateUrl: './no-result.component.html',
  styleUrls: ['./no-result.component.css']
})
export class NoResultComponent implements OnInit {
  valRecherche: string;

  constructor(private recetteService: RecettesService) { }

  // Récupération du mot-clé recherché
  ngOnInit(): void { this.valRecherche = this.recetteService.getValRecherche(); }
}
