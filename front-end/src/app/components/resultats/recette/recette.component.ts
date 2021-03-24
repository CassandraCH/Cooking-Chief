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
  constructor(private route: ActivatedRoute, private recetteService: RecettesService) { }

  ngOnInit(): void {
    const id = +(this.route.snapshot.params['id']);
    this.nom = this.route.snapshot.params['nom'];

   // this.recette = this.recetteService.getRecetteById(+id)!;

    // console.log('id : ' + this.id + ' - nom : ' + this.nom);

    this.route.queryParams.subscribe( params => {
      this.id = +(params['id']);
    });
    this.recette = this.recetteService.getRecetteById(+id);

    // Souscription à la donnée de l'URL (en fonction de la recette cliquée)
    // this.route.data.subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.recette = data.recette;
    //   }
    // );
  }

}
