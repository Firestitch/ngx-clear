import { Component } from '@angular/core';

@Component({
  selector: 'example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {
  public model;

  cleared() {
    console.log('Cleared');
  }
}
