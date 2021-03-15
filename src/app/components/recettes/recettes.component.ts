import { Component, OnInit } from '@angular/core';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  constructor(private recettesService: RecettesService) { }

  ngOnInit(): void {
  }

}
