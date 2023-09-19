import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';


@Component({
  selector: '[fsClear]',
  templateUrl: 'clear.component.html',
  styleUrls: ['clear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsClearComponent {

  @Input() public ngModel: any = null;
  @Input() public fsClear: string | boolean = true;

  @Output() public ngModelChange = new EventEmitter<any>();
  @Output() public cleared = new EventEmitter();

  public clear() {
    this.ngModelChange.emit(null);
    this.cleared.emit();
  }
}
