import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RapidTileComponent } from "./rapid-tile-component/rapid-tile.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RapidTileComponent
    ],
    exports: [
        RapidTileComponent
    ]
})
export class RapidTileModule {}