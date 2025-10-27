import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ClearCustomComponent } from '../clear-custom/clear-custom.component';

@Component({
    selector: 'example2',
    templateUrl: 'example2.component.html',
    standalone: true,
    imports: [MatFormField, MatLabel, MatInput, FormsModule, ClearCustomComponent]
})
export class Example2Component {
  public model;
}
