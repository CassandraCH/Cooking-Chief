import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Recette } from 'src/app/models/Recette.models';
import { RecettesService } from '../../services/recettes.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    recetteDuJour: Recette;

    chargement: Boolean = false;

    constructor(private recettesService: RecettesService) { }

    ngOnInit() {
        console.log("Debut home component");
    }

    chargerRecette(){
        let btn = document.querySelector('.btnChargement');
        let recette = document.querySelector(".container");

        btn.className = "cacher";
        recette.className = "afficher";

        this.chargement = true;
        this.recetteDuJour = this.recettesService.getRecetteDuJour();
    }
}
