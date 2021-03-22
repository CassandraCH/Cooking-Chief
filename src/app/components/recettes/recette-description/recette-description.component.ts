import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from 'src/app/models/Recette.models';

@Component({
  selector: 'app-recette-description',
  templateUrl: './recette-description.component.html',
  styleUrls: ['./recette-description.component.css']
})
export class RecetteDescriptionComponent implements OnInit {
  @Input() recette: Recette;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  /**
   * Probablement à modifier , il faudrait s'orienter vers
   * des routes enfants plutôt que des routes mères si vous avez le temps ;)
   */
  // onClick(){
  //   const nom = this.route.snapshot.params['nom'];
  //   // Redirection
  //   this.router.navigate(['/results', nom , this.recette.id ]);
  // }


}
