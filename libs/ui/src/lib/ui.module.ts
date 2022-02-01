import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsDirective } from './assets.directive';
import { UiConfig } from './ui-config';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AssetsDirective
  ],
  exports: [
    AssetsDirective
  ]
})
export class UiModule {
  static forRoot(config: Type<UiConfig>) : ModuleWithProviders<UiModule>{
    return {
      ngModule: UiModule,
      providers: [
        { provide: UiConfig, useClass: config}
      ]
    }
  }
}
