import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../../../models/Recette.models';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  recette: Recette;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Souscription à la donnée de l'URL (en fonction de la recette cliquée)
    this.route.data.subscribe(
      (data) => {
        console.log(data);
        this.recette = data.recette;
      }
    );
  }

}
