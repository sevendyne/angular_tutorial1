// change-background-color.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('yellow'); // Change background color to yellow on mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null); // Remove background color on mouse leave
  }

  private changeColor(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
