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
    this._el.nativeElement.parentElement.parentElement.parentElement
      .appendChild(this._el.nativeElement.querySelector('.fs-clear-wrapper'));
  }

  public clearClick(event) {
    this.clear.emit(event);
  }

}
