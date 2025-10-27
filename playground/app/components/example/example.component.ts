import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FsClearComponent } from '../../../../src/app/components/clear/clear.component';

@Component({
    selector: 'example',
    templateUrl: 'example.component.html',
    standalone: true,
    imports: [MatFormField, MatLabel, MatInput, FormsModule, FsClearComponent]
})
export class ExampleComponent {
  public model;

  cleared() {
    console.log('Cleared');
  }
}
