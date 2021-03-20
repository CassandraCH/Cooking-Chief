import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-liste',
  templateUrl: './ingredient-liste.component.html',
  styleUrls: ['./ingredient-liste.component.css']
})
export class IngredientListeComponent implements OnInit {
  @Input() liste: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
