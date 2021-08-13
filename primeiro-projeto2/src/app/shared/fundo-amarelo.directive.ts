import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

// aula de diretivas de atributo (aula da Loiane: 33)

  constructor(
    private _ElementRef: ElementRef,
    private _Renderer2: Renderer2
    ) {
    // console.log(this._ElementRef);
    // this._ElementRef.nativeElement.style.backgroundColor = 'yellow';
      this._Renderer2.setStyle(this._ElementRef.nativeElement,'background-color', 'yellow')
   }

}
