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

    messageChargement: String = "";

    constructor(private recettesService: RecettesService) { }

    ngOnInit() {
        console.log("Debut home component");
    }

    chargerRecette(){

        this.recetteDuJour = this.recettesService.getRecetteDuJour();


    }

    onClick(){
        let btn = document.querySelector('.btnChargement');
        let recette = document.querySelector(".container");


        if(this.recettesService.chargement){
            btn.className = "cacher";
            recette.className = "afficher";
            this.chargerRecette();

            this.recetteChargee = true;
            this.messageChargement = ""
        }else{
            console.log("Recette pas encore chargee");
            this.messageChargement = "Nous chargons la recette :)"
        }
    }
}
