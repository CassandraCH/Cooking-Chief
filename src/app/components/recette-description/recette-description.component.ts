import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../../services/recettes.service';
import { Resultat } from '../../models/Resultat.models';// modèle de données
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-description',
  templateUrl: './recette-description.component.html',
  styleUrls: ['./recette-description.component.css']
})
export class RecetteDescriptionComponent implements OnInit {

  constructor(private recettesService: RecettesService,
              private router: Router,) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['/']).then(
      () => {
        this.router.navigate(['/details']);
      }
    );
  }
}
