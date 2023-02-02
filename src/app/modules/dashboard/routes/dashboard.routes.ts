import { Routes } from "@angular/router";
import { RapidDashboardComponent } from "../components/dashboard-component/dashboard.component";

export const routes: Routes = [
    {
        path: '**',
        component: RapidDashboardComponent
    }
];