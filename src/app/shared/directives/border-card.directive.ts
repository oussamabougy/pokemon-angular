import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  COLOR_GREY = 'grey';
  COLOR_GREEN = 'green';

  constructor(private element: ElementRef) {
    this.setBorder(this.COLOR_GREY);
    // this.setHeight(180);
  }

  private setBorder(color: string): void {
    const border = 'solid 2px ' + color;
    this.element.nativeElement.style.border = border;
  }

  private setHeight(height: number): void {
    this.element.nativeElement.style.height = height + 'px';
  }

  @Input('appBorderCard') borderColor: string = this.COLOR_GREEN;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setBorder(this.borderColor || this.COLOR_GREEN);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBorder(this.COLOR_GREY);
  }
}
