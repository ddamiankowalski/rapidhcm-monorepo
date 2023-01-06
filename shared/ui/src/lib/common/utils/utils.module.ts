import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapidSpinnerComponent } from './components/rapid-spinner.component';

@NgModule({
  declarations: [
    RapidSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RapidSpinnerComponent
  ]
})
export class RapidUtilsModule { }
