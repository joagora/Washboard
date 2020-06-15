
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input() ratio : number = 1
  initialPosition : number = 0

  constructor(private eleRef : ElementRef) {
    this.initialPosition = this.eleRef.nativeElement.getBoundingClientRect().top

    
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(){
    console.log(this.initialPosition);
    this.eleRef.nativeElement.style.top = (this.initialPosition - (window.scrollY * this.ratio)) + 'px'
  }

}