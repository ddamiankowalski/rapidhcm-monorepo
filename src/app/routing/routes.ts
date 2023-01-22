import { Routes } from "@angular/router";
import { AuthComponent } from "../modules/auth/components/auth-component/auth.component";

export const routes: Routes = [
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: '',
        component: AuthComponent
    }
];