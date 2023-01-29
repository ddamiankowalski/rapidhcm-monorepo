import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RapidStepperComponent } from "./components/rapid-stepper/rapid-stepper.component";

@NgModule({
    declarations: [
        RapidStepperComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        RapidStepperComponent
    ]
})
export class RapidStepperModule {}