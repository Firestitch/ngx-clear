import { Input, Component, Output, EventEmitter, ElementRef, AfterViewInit, inject } from '@angular/core';
import { FsClearElementComponent } from '../../../../src/app/components/clear-element/clear-element.component';

@Component({
    selector: '[clearCustom]',
    templateUrl: 'clear-custom.component.html',
    styleUrls: ['clear-custom.component.scss'],
    standalone: true,
    imports: [FsClearElementComponent],
})
export class ClearCustomComponent {
  private el = inject(ElementRef);


  @Input() public ngModel: string | null = null;
  @Output() public ngModelChange = new EventEmitter<string>();

  public clear() {
    this.ngModelChange.emit(null);
  }

}
