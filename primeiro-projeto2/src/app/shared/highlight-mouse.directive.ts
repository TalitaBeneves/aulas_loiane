import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
// Aula de diretivas  HostListener e HostBinding da Loiane: 34
// Usando o HostListener

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer2.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'yellow');*/
    this.backgroundColor = 'yellow';

  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer2.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'white');*/
    this.backgroundColor = 'white';
  }

  // Usando o HostBinding

  // Usando o HostBinding

  @HostBinding('style.backgroundColor')
  backgroundColor!: string;

  constructor(){ }
    // private _elementRef: ElementRef,
    // private _renderer2: Renderer2)

}
