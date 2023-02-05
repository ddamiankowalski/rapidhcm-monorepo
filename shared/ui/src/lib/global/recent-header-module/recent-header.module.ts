import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RapidRecentHeaderItemComponent } from "./components/rapid-recent-header-item/rapid-recent-header-item.component";
import { RapidRecentHeaderAddComponent } from "./components/rapid-header-add/rapid-recent-header-add.component";
import { RapidButtonsModule, RapidIconsModule } from "../../common";

@NgModule({
    imports: [
        CommonModule,
        RapidButtonsModule,
        RapidIconsModule
    ],
    exports: [
        RapidRecentHeaderItemComponent,
        RapidRecentHeaderAddComponent
    ],
    declarations: [
        RapidRecentHeaderItemComponent,
        RapidRecentHeaderAddComponent
    ]
})
export class RapidRecentHeaderModule {}