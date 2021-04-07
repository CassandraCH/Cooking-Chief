import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../../services/recettes.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    constructor(private recettesService: RecettesService) { }

    ngOnInit() {
        this.recettesService.getRecettesFromBDD();
    }

    chercherRecetteAleatoire(){
        this.recettesService.genererRecetteAleatoire();
    }
}
