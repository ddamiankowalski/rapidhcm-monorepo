import { Routes } from "@angular/router";
import { AuthComponent } from "../components/auth-component/auth.component";
import { RapidLoginComponent } from "../components/login-component/login.component";
import { RapidRemindPasswordComponent } from "../components/remind-password-component/remind-password.component";
import { RapidSignUpComponent } from "../components/sign-up-component/sign-up.component";

export const authRoutes: Routes = [
    { 
        path: 'auth', component: AuthComponent,
        children: [
            { path: 'login', component: RapidLoginComponent, data: { animation: 'LoginView' } },
            { path: 'remind', component: RapidRemindPasswordComponent, data: { animation: 'RemindView' } },
            { path: 'signup', component: RapidSignUpComponent, data: { animation: 'SignUpView' } },
            { path: '', component: RapidLoginComponent }
        ] 
    },
    {
        path: '**',
        redirectTo: 'auth/login'
    }
];