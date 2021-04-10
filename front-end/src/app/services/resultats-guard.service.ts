import { Injectable } from '@angular/core';
import { RecettesService} from './recettes.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ResultatsGuard implements CanActivate {

    constructor(private recetteService: RecettesService,
                private router: Router) { }

    // Méthode à chaque deamande d'accès à la route 'results/:nom/:id'
    // Elle permet de vérifier que la route existe bien
    // Si c'est pas le cas => l'utilisateur est renvoyé sur la page 'pas de résultat'
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const id = route.params['id'];

        return new Promise(
            (resolve) => {
                const recette = this.recetteService.getRecetteById(+id);

                // Si la route n'est pas valide (== pas de recette) => redirection vers la page 'no-result'
                if (recette === undefined) {
                    this.router.navigate(['/results', 'no-result']);
                    resolve(false);
                // Sinon
                } else {
                    resolve(true);
                }
            }
        );
    }
}
