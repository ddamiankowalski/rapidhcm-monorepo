import { NgModule } from '@angular/core';
import { RapidInputComponent } from './components/rapid-input/rapid-input.component';
import { FormsModule } from '@angular/forms';
import { RapidIconsModule } from '../icon-module/rapid-icons.module';
import { CommonModule } from '@angular/common';
import { RapidInputIconComponent } from './components/rapid-input-icon/rapid-input-icon.component';
import { RapidInputMessageComponent } from './components/rapid-input-message/rapid-input-message.component';
import { TranslateModule } from '@ngx-translate/core';
import { RapidErrorMessagePipe } from './pipes/error-message.pipe';
import { RapidSelectComponent } from './components/rapid-select/rapid-select.component';

@NgModule({
    declarations: [
        RapidInputComponent,
        RapidInputIconComponent,
        RapidInputMessageComponent,
        RapidErrorMessagePipe,
        RapidSelectComponent
    ],
    exports: [
        RapidInputComponent,
        RapidSelectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RapidIconsModule,
        TranslateModule
    ]
})
export class RapidInputModule {}