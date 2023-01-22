import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RapidAppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { routes } from './routing/routes';

@NgModule({
  declarations: [RapidAppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RapidAppComponent],
})
export class RapidAppModule {}
