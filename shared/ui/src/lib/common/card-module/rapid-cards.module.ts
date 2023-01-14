import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RapidIconsModule } from "../icon-module/rapid-icons.module";
import { RapidCardComponent } from "./components/rapid-card/rapid-card.component";
import { RapidCardFooterComponent } from "./components/rapid-cardfooter/rapid-cardfooter.component";
import { RapidCardHeaderFavComponent } from "./components/rapid-cardheader-fav/rapid-cardheader-fav.component";
import { RapidCardHeaderIconComponent } from "./components/rapid-cardheader-icon/rapid-cardheader-icon.component";
import { RapidCardHeaderComponent } from "./components/rapid-cardheader/rapid-cardheader.component";
import { RapidCardHeaderNewsComponent } from "./components/rapid-cardheadernews/rapid-cardheadernews.component";

@NgModule({
    imports: [
        CommonModule,
        RapidIconsModule
    ],
    declarations: [
        RapidCardComponent,
        RapidCardHeaderComponent,
        RapidCardHeaderFavComponent,
        RapidCardHeaderIconComponent,
        RapidCardHeaderNewsComponent,
        RapidCardFooterComponent
    ],
    exports: [
        RapidCardComponent,
        RapidCardHeaderComponent,
        RapidCardHeaderNewsComponent,
        RapidCardFooterComponent
    ]
})
export class RapidCardsModule {}