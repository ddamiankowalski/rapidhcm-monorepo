import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RapidAppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from './modules/auth/auth.module';
import { routes } from './routing/routes';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RapidInterceptor } from './interceptors/rapid.interceptor';
import { RapidErrorInterceptor } from './interceptors/rapid-error.interceptor';
import { RapidToastModule } from '@kowalskiddamian/rapid-ui';
@NgModule({
  declarations: [RapidAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    RapidToastModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RapidErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RapidInterceptor, multi: true }
  ],
  bootstrap: [RapidAppComponent],
})
export class RapidAppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
} 
