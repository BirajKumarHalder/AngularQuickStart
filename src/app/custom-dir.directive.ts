import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  @Input("inputDate") value: number;
  result: number = 0;
  element: ElementRef;

  constructor(Element: ElementRef) {
    this.element = Element;
    this.element.nativeElement.innerText = "Text is coming from custom directive";
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.value} is ${this.result}`);
    this.result = this.value * this.value;
    this.element.nativeElement.innerText = `square of ${this.value} is ${this.result}`;
  }

}
