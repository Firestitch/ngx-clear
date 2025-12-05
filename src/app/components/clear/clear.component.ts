import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
  signal,
} from '@angular/core';
import { NgModel } from '@angular/forms';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FsClearElementComponent } from '../clear-element/clear-element.component';


@Component({
  selector: '[fsClear]',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FsClearElementComponent],
})
export class FsClearComponent implements OnInit {

  @Input() public visible: boolean = null;
  @Input() public fsClear: string | boolean = true;

  @Output() public cleared = new EventEmitter();
  
  public isVisible = signal<boolean>(false);

  private _ngModel = inject(NgModel);
  private _destroyRef = inject(DestroyRef);

  public ngOnInit() {
    this._ngModel
      .valueChanges
      .pipe(
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe((value) => {
        if(typeof this.visible === 'boolean') {
          return this.isVisible.set(this.visible);
        } 
        this.isVisible.set(value !== null && value !== undefined);
      });
  }
  
  public clear(event: MouseEvent) {
    this._ngModel.control.setValue(null);
    this.cleared.emit(event);
  }
}
