import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FsClearElementComponent } from './components/clear-element/clear-element.component';
import { FsClearComponent } from './components/clear/clear.component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FsClearComponent,
    FsClearElementComponent,
  ],
  exports: [
    FsClearComponent,
    FsClearElementComponent,
  ],
})
export class FsClearModule {
  static forRoot(): ModuleWithProviders<FsClearModule> {
    return {
      ngModule: FsClearModule,
    };
  }
}
