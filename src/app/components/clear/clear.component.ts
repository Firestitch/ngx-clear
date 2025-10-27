import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FsClearElementComponent } from '../clear-element/clear-element.component';


@Component({
    selector: '[fsClear]',
    templateUrl: './clear.component.html',
    styleUrls: ['./clear.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsClearElementComponent],
})
export class FsClearComponent {

  @Input() public ngModel: any = null;
  @Input() public visible: boolean = null;
  @Input() public fsClear: string | boolean = true;

  @Output() public ngModelChange = new EventEmitter<any>();
  @Output() public cleared = new EventEmitter();

  public clear(event: MouseEvent) {
    this.ngModelChange.emit(null);
    this.cleared.emit(event);
  }

  public get isVisible() {
    if(typeof this.visible === 'boolean') {
      return this.visible;
    }

    return !!this.ngModel;
  }
}
