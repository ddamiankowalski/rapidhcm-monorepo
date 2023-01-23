import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RapidIconsModule } from "../icon-module/rapid-icons.module";
import { RapidCheckboxComponent } from "./components/rapid-checkbox/rapid-checkbox.component";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RapidCheckboxComponent
    ],
    exports: [
        RapidCheckboxComponent
    ],
    imports: [
        RapidIconsModule,
        CommonModule,
        FormsModule
    ]
})
export class RapidCheckboxModule {}