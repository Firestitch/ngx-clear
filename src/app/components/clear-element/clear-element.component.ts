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
    const formFieldEl = this._getFormField(this._el.nativeElement);

    if(formFieldEl) {
      formFieldEl.classList.add('mat-mdc-form-field-has-icon-suffix');
      const formFieldFlexEl = formFieldEl.querySelector('.mat-mdc-form-field-flex');

      if(formFieldFlexEl) {
        const suffix = document.createElement('div');
        suffix.classList.add('mat-mdc-form-field-icon-suffix');

        formFieldFlexEl.appendChild(suffix);
        suffix.appendChild(this._el.nativeElement);
      }
    }
  }

  public clearClick(event: MouseEvent) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    this.clear.emit(event);
  }

  private _getFormField(el: Element): Element {
    if (el.classList.contains('mat-mdc-form-field')) {
      return el;
    }

    return el.parentElement ? this._getFormField(el.parentElement) : null;
  }

}
