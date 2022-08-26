import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ApprovalStatus } from '../models/blog-model';
// 属性型指令
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() public appHighlight!: string;

  constructor(
    private el: ElementRef
  ) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  

}
