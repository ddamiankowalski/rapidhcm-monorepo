import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapidButtonComponent } from './components/rapid-button/rapid-button.component';

@NgModule({
  declarations: [
    RapidButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RapidButtonComponent
  ]
})
export class RapidButtonsModule { }
