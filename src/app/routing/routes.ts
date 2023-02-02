import { Routes } from "@angular/router";
import { RapidAuthGuardService } from "../guards/auth-guard.service";

export const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [ RapidAuthGuardService ]
    },
    {
        path: 'auth',
        loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];