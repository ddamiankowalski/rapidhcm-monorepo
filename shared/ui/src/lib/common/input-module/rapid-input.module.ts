import { NgModule } from '@angular/core';
import { RapidInputComponent } from './components/rapid-input/rapid-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RapidInputComponent
    ],
    exports: [
        RapidInputComponent
    ],
    imports: [
        FormsModule
    ]
})
export class RapidInputModule {}