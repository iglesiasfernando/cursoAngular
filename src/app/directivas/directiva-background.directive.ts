import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appItemClass]'
})
export class ItemClassDirective {

  constructor(
    private eleRef: ElementRef) {
      this.eleRef.nativeElement.classList.add('claseItemDefault');

     }
}
