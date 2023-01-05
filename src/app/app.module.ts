import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RapidButtonsModule, SharedUiModule } from '@kowalskiddamian/rapid-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedUiModule,
    RapidButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
