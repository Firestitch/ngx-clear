import { enableProdMode, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { FsClearModule } from '@firestitch/clear';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { ExamplesComponent } from './app/components';
import { environment } from './environments/environment';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FsClearModule, FormsModule, FsExampleModule.forRoot(), FsMessageModule.forRoot()),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    provideAnimations(),
    provideRouter(routes),
  ],
})
  .catch((err) => console.error(err));

