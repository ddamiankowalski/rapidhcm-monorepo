import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RapidIconsModule } from "../icon-module/rapid-icons.module";
import { RapidStepperComponent } from "./components/rapid-stepper/rapid-stepper.component";

@NgModule({
    declarations: [
        RapidStepperComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RapidIconsModule
    ],
    exports: [
        RapidStepperComponent
    ]
})
export class RapidStepperModule {}