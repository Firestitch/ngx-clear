import { Input, Component, Output, EventEmitter, ElementRef } from '@angular/core';


@Component({
  selector: '[fsClear]',
  templateUrl: 'clear.component.html',
  styleUrls: [ 'clear.component.scss' ],
})
export class FsClearComponent {

  @Input() public ngModel: string | null = null;
  @Output() public ngModelChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  public clear() {
    this.ngModelChange.emit(null);
  }

}
