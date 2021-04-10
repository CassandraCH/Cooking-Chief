import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecettesService } from 'src/app/services/recettes.service';
import { Recette } from 'src/app/models/Recette.models';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  recette: Recette;
  id: number;
  nom : string;

  // Mot-clé de la recherche
  valRecherche: string;

  constructor(private route: ActivatedRoute, private recetteService: RecettesService) { }

  ngOnInit(): void {
    // Récupération de l'id de la recette
    const id = +(this.route.snapshot.params['id']);

    // Récupération du nom (pour le routage => routerLink)
    this.nom = this.route.snapshot.params['nom'];

    // Récupération mot-clé recherché
    this.valRecherche = this.recetteService.getValRecherche();

    this.route.queryParams.subscribe( params => {
      this.id = +(params['id']);
    });

    // Récupération de la bonne recette
    this.recette = this.recetteService.getRecetteById(+id);
  }
}
