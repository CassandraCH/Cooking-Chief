import { Component, OnInit } from '@angular/core';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  valRecherche: string = '';
  constructor(private recettesService: RecettesService) { }

  ngOnInit(): void {
    // récupération de la recherche
    this.valRecherche = this.recettesService.getValRecherche();
  }


}
