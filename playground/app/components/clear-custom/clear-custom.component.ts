import { Input, Component, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { FsClearElementComponent } from '../../../../src/app/components/clear-element/clear-element.component';

@Component({
    selector: '[clearCustom]',
    templateUrl: 'clear-custom.component.html',
    styleUrls: ['clear-custom.component.scss'],
    standalone: true,
    imports: [FsClearElementComponent],
})
export class ClearCustomComponent {

  @Input() public ngModel: string | null = null;
  @Output() public ngModelChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  public clear() {
    this.ngModelChange.emit(null);
  }

}
