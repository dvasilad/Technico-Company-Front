import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig =  {
  providers:
[
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(BrowserModule)
  ],
};