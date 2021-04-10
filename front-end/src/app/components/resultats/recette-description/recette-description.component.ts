import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from 'src/app/models/Recette.models';

@Component({
  selector: 'app-recette-description',
  templateUrl: './recette-description.component.html',
  styleUrls: ['./recette-description.component.css']
})
export class RecetteDescriptionComponent implements OnInit {
  @Input() recette: Recette;
  nom: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void { this.nom = this.route.snapshot.params['nom']; }
}
