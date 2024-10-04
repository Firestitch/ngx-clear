import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';


@Component({
  selector: 'fs-clear',
  templateUrl: './clear-element.component.html',
  styleUrls: ['./clear-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsClearElementComponent implements AfterViewInit {

  @Input() public show = false;
  @Input() public visible = false;

  @Output() public clear = new EventEmitter<MouseEvent>();

  constructor(
    private _el: ElementRef,
  ) { }

  public ngAfterViewInit() {

    const el = this._getFormFieldFlex(this._el.nativeElement);

    const suffix = document.createElement('div');
    suffix.classList.add('mat-mdc-form-field-icon-suffix');

    el.appendChild(suffix);

    suffix.appendChild(this._el.nativeElement);
  }

  public clearClick(event) {
    this.clear.emit(event);
  }

  private _getFormFieldFlex(el: Element) {
    if (el.classList.contains('mat-mdc-form-field-flex')) {
      return el;
    }

    return el.parentElement ? this._getFormFieldFlex(el.parentElement) : null;
  }

}
