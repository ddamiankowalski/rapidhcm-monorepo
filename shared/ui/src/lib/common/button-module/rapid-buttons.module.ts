import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapidButtonComponent } from './components/rapid-button/rapid-button.component';
import { RapidUtilsModule } from '../utils-module/utils.module';
import { RapidIconButtonComponent } from './components/icon-button/rapid-iconbutton.component';

@NgModule({
  declarations: [
    RapidButtonComponent,
    RapidIconButtonComponent,
  ],
  imports: [
    CommonModule,
    RapidUtilsModule
  ],
  exports: [
    RapidButtonComponent,
    RapidIconButtonComponent
  ]
})
export class RapidButtonsModule { }
