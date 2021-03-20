import { Recette } from 'src/app/models/Recette.models';
import { RecettesService } from 'src/app/services/recettes.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class RecetteResolver implements Resolve<Recette> {

    constructor(private recetteService: RecettesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Recette> | Promise<Recette> | Recette {
        return this.recetteService.getRecette(+route.params.id);
    }
}
