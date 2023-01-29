import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RapidStepperComponent } from "./components/rapid-stepper/rapid-stepper.component";

@NgModule({
    declarations: [
        RapidStepperComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RapidStepperComponent
    ]
})
export class RapidStepperModule {}