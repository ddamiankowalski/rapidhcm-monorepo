import { NgModule } from '@angular/core';
import { RapidInputComponent } from './components/rapid-input/rapid-input.component';
import { FormsModule } from '@angular/forms';
import { RapidIconsModule } from '../icon-module/rapid-icons.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RapidInputIconComponent } from './components/rapid-input-icon/rapid-input-icon.component';

@NgModule({
    declarations: [
        RapidInputComponent,
        RapidInputIconComponent
    ],
    exports: [
        RapidInputComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RapidIconsModule
    ]
})
export class RapidInputModule {}