import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from "@angular/router";
import { LocalStorageService } from "./local-stroage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth: LocalStorageService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.auth.getItem("isVerified")) {
            return true;
        } else {
            this.router.navigate(["login"], {
                queryParams: {
                    redirect: state.url,
                },
            });
            return false;
        }
    }
}
