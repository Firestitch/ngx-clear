import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { FsMessage } from '@firestitch/message';

import { FsClearComponent } from '../../../../src/app/components/clear/clear.component';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, FormsModule, FsClearComponent, FormsModule],
})
export class ExampleComponent {

  public model: string | null = null;

  private _message = inject(FsMessage);

  public cleared() {
    this._message.success('Cleared');
  }

  public ngModelChange(event: any) {
    console.log('ngModelChange', event);
  }
}
