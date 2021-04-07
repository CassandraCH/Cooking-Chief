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

    constructor(private recettesService: RecettesService) { }

    ngOnInit() {
        console.log("Debut home component");
        this.chercherRecetteAleatoire();
    }

    chercherRecetteAleatoire(){
        this.recetteDuJour = this.recettesService.getRecetteDuJour();
    }
}
