import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapidButtonComponent } from './components/rapid-button/rapid-button.component';
import { RapidUtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    RapidButtonComponent
  ],
  imports: [
    CommonModule,
    RapidUtilsModule
  ],
  exports: [
    RapidButtonComponent
  ]
})
export class RapidButtonsModule { }
