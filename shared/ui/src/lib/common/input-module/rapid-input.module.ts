import { NgModule } from '@angular/core';
import { RapidInputComponent } from './components/rapid-input/rapid-input.component';
import { FormsModule } from '@angular/forms';
import { RapidIconsModule } from '../icon-module/rapid-icons.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RapidInputIconComponent } from './components/rapid-input-icon/rapid-input-icon.component';
import { RapidInputMessageComponent } from './components/rapid-input-message/rapid-input-message.component';
import { TranslateModule } from '@ngx-translate/core';
import { RapidErrorMessagePipe } from './pipes/error-message.pipe';

@NgModule({
    declarations: [
        RapidInputComponent,
        RapidInputIconComponent,
        RapidInputMessageComponent,
        RapidErrorMessagePipe
    ],
    exports: [
        RapidInputComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RapidIconsModule,
        TranslateModule
    ]
})
export class RapidInputModule {}