import { NgModule } from '@angular/core';
import { RapidInputComponent } from './components/rapid-input/rapid-input.component';
import { FormsModule } from '@angular/forms';
import { RapidIconsModule } from '../icon-module/rapid-icons.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        RapidInputComponent
    ],
    exports: [
        RapidInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RapidIconsModule
    ]
})
export class RapidInputModule {}