import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RapidRecentHeaderItemComponent } from "./components/rapid-recent-header-item/rapid-recent-header-item.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        RapidRecentHeaderItemComponent
    ],
    declarations: [
        RapidRecentHeaderItemComponent
    ]
})
export class RapidRecentHeaderModule {}