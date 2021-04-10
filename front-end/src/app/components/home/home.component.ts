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

    // booleen qui indique si la recette du jour a été générée
    recetteChargee: Boolean = false;

    // messages d'attentes qui s'affichent tant que la recette du jour n'a pas été créée
    messages: Array<string> = [
        "Nos chef sont en train de concocter la recette",
        "Patience, ils ne vont plus tarder",
        "Nos chefs vont arriver d'une seconde à l'autre pour nous apporter la recette du jour :)"
    ];

    // index du message à afficher
    indice: number = 0;

    // message d'attente courant
    messageChargement: String;

    constructor(private recettesService: RecettesService) { }

    ngOnInit() { console.log("Debut home component"); }

    // Récupération de la recette du jour
    chargerRecette(){
        this.recetteDuJour = this.recettesService.getRecetteDuJour();
        this.recetteChargee = (this.recetteDuJour != undefined);
    }

    // Action a effectuer lors du clic sur le bouton
    onClick(){
        // Récupération du bouton et du container
        let btn = document.querySelector('.btnChargement');
        let recette = document.querySelector(".container");

        // Si la recette a été générée
        if(this.recettesService.chargement){
            // Masquer le bouton
            btn.className = "cacher";
            // Afficher la recette
            recette.className = "afficher";
            this.chargerRecette();

            this.messageChargement = "";
        }
        // Sinon : afficher le message d'attente (le changer s'il y en a déjà un)
        else{
            console.log("Recette pas encore chargee");
            this.messageChargement = this.messages[this.indice];
            this.indice = (this.indice+1)%3;
        }
    }
}
