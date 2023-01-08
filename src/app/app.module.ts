import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RapidButtonsModule, RapidCardsModule, RapidIconsModule, SharedUiModule } from '@kowalskiddamian/rapid-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedUiModule,
    RapidButtonsModule,
    RapidIconsModule,
    RapidCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
