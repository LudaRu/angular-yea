import {Directive, ElementRef, Inject, Input, PLATFORM_ID, SimpleChanges} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Directive({
  selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective {
  @Input() appScrollIntoView: boolean | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public elementRef: ElementRef
  ) {}

  ngOnChanges(simpleChange: SimpleChanges) {
    if (isPlatformBrowser(this.platformId)) {
      if ((this.appScrollIntoView)) {
        setTimeout(() => {
          (this.elementRef.nativeElement as HTMLInputElement).scrollIntoView({
            behavior: 'smooth'
          });
        }, 500)
      }
    }
  }

}
