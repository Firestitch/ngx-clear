import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { FsClearComponent } from './components/clear/clear.component';
import { FsClearElementComponent } from './components/clear-element/clear-element.component';


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
  static forRoot(): ModuleWithProviders<FsClearModule> {
    return {
      ngModule: FsClearModule
    };
  }
}
