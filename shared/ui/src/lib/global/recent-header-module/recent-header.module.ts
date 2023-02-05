import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RapidRecentHeaderItemComponent } from "./components/rapid-recent-header-item/rapid-recent-header-item.component";
import { RapidRecentHeaderAddComponent } from "./components/rapid-header-add/rapid-header-add.component";

@NgModule({
    imports: [
        CommonModule
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