import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RapidButtonsModule, RapidCardsModule, RapidHeaderModule, RapidIconsModule, RapidRecentHeaderModule, RapidSidenavModule, RapidTileModule } from "@kowalskiddamian/rapid-ui";
import { RapidDashboardComponent } from "./components/dashboard-component/dashboard.component";
import { RapidRecentHeaderComponent } from "./components/recent-header-component/recent-header.component";
import { routes } from "./routes/dashboard.routes";
import { RapidNewsComponent } from "./content/news-component/rapid-news.component";

@NgModule({
    declarations: [
        RapidDashboardComponent,
        RapidRecentHeaderComponent,
        RapidNewsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        RapidSidenavModule,
        RapidHeaderModule,
        RapidRecentHeaderModule,
        RapidCardsModule,
        RapidTileModule,
        RapidButtonsModule,
        RapidIconsModule
    ],
    exports: [],
    providers: []
})
export class DashboardModule {}