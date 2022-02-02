import { Directive, ElementRef } from '@angular/core'; 
import { UiConfig } from './ui-config';
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[src]'
})
export class AssetsDirective {

  constructor(uiConfig: UiConfig , elementRef: ElementRef) {
    const sourceValue = <string>elementRef.nativeElement.src;
    const index = sourceValue.indexOf('assets');
    elementRef.nativeElement.src = uiConfig.url + '/' + sourceValue.substring(index);
   }

}
