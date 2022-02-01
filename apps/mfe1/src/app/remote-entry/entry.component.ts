import { Component } from '@angular/core';

@Component({
  selector: 'angular-assets-mfe1-entry',
  template: `<img src="assets/spain.png" height="300" width="400" />`,
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
