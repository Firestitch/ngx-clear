import { Input, Component, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'fs-clear',
  templateUrl: 'clear-element.component.html',
  styleUrls: [ 'clear-element.component.scss' ],
})
export class FsClearElementComponent implements AfterViewInit {

  @Output() public clear = new EventEmitter<string>();
  @Input() public show = false;

  constructor(private el: ElementRef) {}

  public clearClick() {
    this.clear.emit(null);
  }

  ngAfterViewInit() {
    this.el.nativeElement.parentElement.parentElement.parentElement.appendChild(this.el.nativeElement.querySelector('.fs-clear-wrapper'));
  }

}
