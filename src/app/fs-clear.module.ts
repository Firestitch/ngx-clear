import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsClearComponent } from './components/clear/clear.component';
import { FsClearElementComponent } from './components/clear-element/clear-element.component';
import { MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FsClearComponent,
    FsClearElementComponent
  ],
  declarations: [
    FsClearComponent,
    FsClearElementComponent
  ]
})
export class FsClearModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsClearModule
    };
  }
}
