import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { TimelineMax } from 'gsap/TweenMax';
import * as ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { TweenMax } from 'gsap';
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
 
ScrollMagicPluginIndicator(ScrollMagic);
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  controller: ScrollMagic.Controller;
  bounds;
  @ViewChild('mainPhoto') mainPhoto: ElementRef;
  @ViewChild('container') container: ElementRef;

  constructor(private readonly renderer: Renderer) {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.setUpMainPhotoAnimation();
  }

  setUpMainPhotoAnimation() {
    const scaleRatio = 0.5;
    const tl  = new TimelineMax();
    tl.from(this.mainPhoto.nativeElement, 0, { scale: 1 })
      .to(this.mainPhoto.nativeElement, 1.0, { scale: scaleRatio})
      .to(this.mainPhoto.nativeElement, 1.0, { 
        x: this.getTargetPosition(this.container.nativeElement, this.mainPhoto.nativeElement, scaleRatio, 'right')
      }, "=-0.5");
    this.controller = new ScrollMagic.Controller()
    const scene: ScrollMagic.Scene = new ScrollMagic.Scene({
      duration: 1000,
      triggerElement: this.mainPhoto.nativeElement,
      triggerHook: 0.07
    })
    .addIndicators()
    .setTween(tl)
    .setPin(this.mainPhoto.nativeElement)
    .addTo(this.controller)
  }

  getTargetPosition(containerElement, element, scaleRatio: number, direction: string) {
    const bounds = containerElement.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    
    return (bounds[direction] - bounds[direction] * scaleRatio) / 2;
  }
}
