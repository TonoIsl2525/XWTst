import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onmouseover(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px'); // 4
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px'); // 22 feat 3, camb en rem
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
  }
  @HostListener('mouseleave') onmouseout(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px'); // con f
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s'); // Un elem
  }
}
