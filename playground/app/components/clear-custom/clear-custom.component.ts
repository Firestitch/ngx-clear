import { Input, Component, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: '[clearCustom]',
  templateUrl: 'clear-custom.component.html',
  styleUrls: [ 'clear-custom.component.scss' ],
})
export class ClearCustomComponent {

  @Input() public ngModel: string | null = null;
  @Output() public ngModelChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  public clear() {
    this.ngModelChange.emit(null);
  }

}
