import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsClearModule } from '@firestitch/clear';

import { AppMaterialModule } from './material.module';
import {
  ClearCustomComponent,
  Example2Component,
  ExampleComponent,
  ExamplesComponent
} from './components';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsClearModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  entryComponents: [],
  declarations: [
    ClearCustomComponent,
    AppComponent,
    ExamplesComponent,
    ExampleComponent,
    Example2Component
  ],
  providers: [],
})
export class PlaygroundModule {
}
