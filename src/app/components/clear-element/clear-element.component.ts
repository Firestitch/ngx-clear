import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'fs-clear',
  templateUrl: 'clear-element.component.html',
  styleUrls: [ 'clear-element.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsClearElementComponent implements AfterViewInit {

  @Output() public clear = new EventEmitter<MouseEvent>();
  @Input() public show = false;

  constructor(private el: ElementRef) {}

  public ngAfterViewInit() {
    this.el.nativeElement.parentElement.parentElement.parentElement
      .appendChild(this.el.nativeElement.querySelector('.fs-clear-wrapper'));
  }

  public clearClick(event) {
    this.clear.emit(event);
  }

}
