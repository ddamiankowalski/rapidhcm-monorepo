import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RapidDashboardComponent } from "./components/dashboard-component/dashboard.component";
import { routes } from "./routes/dashboard.routes";

@NgModule({
    declarations: [
        RapidDashboardComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [],
    providers: []
})
export class DashboardModule {}