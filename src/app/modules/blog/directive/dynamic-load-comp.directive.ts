import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicLoadComp]'
})
export class DynamicLoadCompDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
