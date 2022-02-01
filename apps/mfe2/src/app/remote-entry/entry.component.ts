import { Component } from '@angular/core';

@Component({
  selector: 'angular-assets-mfe2-entry',
  template: `<img src="assets/the-netherlands.png" height="300" width="400" />`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
