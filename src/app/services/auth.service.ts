import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class RapidAuthService {
    private jwtHelper: JwtHelperService;

    constructor() {
        this.jwtHelper = new JwtHelperService();
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('rapidAccessToken');
        return !this.jwtHelper.isTokenExpired(token);
    }
}