import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export const appConfig =  {
  providers:
[
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(BrowserModule),
    CommonModule,
    provideZoneChangeDetection({ eventCoalescing: true })
  ],
};
