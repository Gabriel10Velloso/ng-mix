import {
  Injectable,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { BaseClassInjector } from 'projects/ng-mix/src/lib/models/BaseClassInjector';

export const LabelMixin = (superClass = BaseClassInjector) => {

  @Injectable()
  class Label extends superClass implements OnInit {
    @Input() label = '';
    @Output() labelEvent = new EventEmitter<any>();

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit.call(this);
      console.log(this.label);

      //Implementation here
    }		
  }

  return Label;
}