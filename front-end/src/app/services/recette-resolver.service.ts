import { Recette } from 'src/app/models/Recette.models';
import { RecettesService } from 'src/app/services/recettes.service';
import { Resolve } from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class RecetteResolver implements Resolve<Recette[]> {

    constructor(private recettes: RecettesService) {}

    resolve(): Observable<Recette[]>{
        return this.recettes.getRecettesUpdateListener();
    }
}
