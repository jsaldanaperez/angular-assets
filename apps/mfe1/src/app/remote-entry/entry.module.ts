import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { UiModule, UiConfig } from '@angular-assets/ui';

@Injectable()
export class Config extends UiConfig{
  url = 'http://localhost:4201';
}

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    UiModule.forRoot(Config),
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}


