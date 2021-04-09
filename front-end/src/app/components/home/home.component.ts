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

    recetteChargee: Boolean = false;

    messages: Array<string> = [
        "Nos chef sont en train de concocter la recette",
        "Patience, ils ne vont plus tarder",
        "Nos chefs vont arriver d'une seconde à l'autre pour nous apporter la recette du jour :)"
    ];

    indice: number = 0;

    messageChargement: String;

    constructor(private recettesService: RecettesService) { }

    ngOnInit() { console.log("Debut home component"); }

    // Récupération de la recette du jour
    chargerRecette(){
        this.recetteDuJour = this.recettesService.getRecetteDuJour();
        this.recetteChargee = (this.recettesService.getRecetteDuJour() != undefined);
    }

    // Action a effectuer lors du clic sur le bouton
    onClick(){
        let btn = document.querySelector('.btnChargement');
        let recette = document.querySelector(".container");


        if(this.recettesService.chargement){
            // Masquer le bouton
            btn.className = "cacher";
            // Afficher la recette
            recette.className = "afficher";
            this.chargerRecette();

            this.messageChargement = "";
        }else{
            console.log("Recette pas encore chargee");
            this.messageChargement = this.messages[this.indice];
            this.indice = (this.indice+1)%3;
        }
    }
}
