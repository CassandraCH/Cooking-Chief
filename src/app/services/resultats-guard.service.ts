import { Injectable } from '@angular/core';
import { RecettesService} from './recettes.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ResultatsGuard implements CanActivate {

    constructor(private recetteService: RecettesService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const id = route.params['id'];
        return new Promise(
            (resolve) => {
                const recette = this.recetteService.getRecetteById(+id);
                if (recette) {
                    resolve(true);
                } else {
                    this.router.navigate(['/results', 'no-result']);
                    resolve(false);
                }
            }
        );

        // const id = route.params['id'];
        // if (this.recetteService.getRecetteById(+id) === undefined) {
        //     this.router.navigate([`/not-found`]);
        //     return false;
        // } else {
        //     return true;
        // }
    }
}
