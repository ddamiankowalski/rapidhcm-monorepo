import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { RapidAuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class RapidAuthGuardService implements CanActivate {
    constructor(public auth: RapidAuthService, public router: Router) {}

    public canActivate(): boolean {
        return this.auth.isAuthenticated() ? this.isAuthenticated() : this.isNotAuthenticated();
    }

    private isAuthenticated(): boolean {
        return true;
    }

    private isNotAuthenticated(): boolean {
        this.router.navigate(['/auth']);
        return false;
    }
}