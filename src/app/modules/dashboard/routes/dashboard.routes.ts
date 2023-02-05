import { Routes } from "@angular/router";
import { RapidDashboardComponent } from "../components/dashboard-component/dashboard.component";
import { RapidNewsComponent } from "../content/news-component/rapid-news.component";

export const routes: Routes = [
    {
        path: '',
        component: RapidDashboardComponent,
        children: [
            {
                path: 'news',
                component: RapidNewsComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];