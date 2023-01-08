import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RapidIconsModule } from "../icon-module/rapid-icons.module";
import { RapidCardComponent } from "./components/rapid-card/rapid-card.component";
import { RapidCardHeaderFavComponent } from "./components/rapid-cardheader-fav/rapid-cardheader-fav.component";
import { RapidCardHeaderIconComponent } from "./components/rapid-cardheader-icon/rapid-cardheader-icon.component";
import { RapidCardHeaderComponent } from "./components/rapid-cardheader/rapid-cardheader.component";

@NgModule({
    imports: [
        CommonModule,
        RapidIconsModule
    ],
    declarations: [
        RapidCardComponent,
        RapidCardHeaderComponent,
        RapidCardHeaderFavComponent,
        RapidCardHeaderIconComponent
    ],
    exports: [
        RapidCardComponent,
        RapidCardHeaderComponent
    ]
})
export class RapidCardsModule {}