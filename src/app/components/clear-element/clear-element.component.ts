import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';

import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'fs-clear',
  templateUrl: './clear-element.component.html',
  styleUrls: ['./clear-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatIconButton,
    NgClass,
    MatIcon,
  ],
})
export class FsClearElementComponent implements AfterViewInit {

  @Input() public show = false;
  @Input() public visible = false;

  @Output() public clear = new EventEmitter<MouseEvent>();

  private _formFieldEl: Element;
  private _el = inject(ElementRef);

  public ngAfterViewInit() {
    this._formFieldEl = this._getFormField(this._el.nativeElement);
    this._formFieldEl?.classList.add('mat-mdc-form-field-has-icon-suffix');
    
    if(this._formFieldEl) {
      const formFieldFlexEl = this._formFieldEl.querySelector('.mat-mdc-form-field-flex');

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
