import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../../services/recettes.service';

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
