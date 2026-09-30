import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { companyContextInterceptor } from './services/interceptor/company-context.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CommonModule), // ✅ Fix #2: add CommonModule for ngIf/ngFor/ngIfElse
    provideHttpClient(withFetch(), withInterceptors([companyContextInterceptor])), // ✅ Fix #1: enable fetch
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ],  
};
