import { Component } from '@angular/core';

/**
 * Generated class for the NavButtons component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'nav-buttons',
  templateUrl: 'nav-buttons.html'
})
export class NavButtons {

  text: string;

  constructor() {
    console.log('Hello NavButtons Component');
    this.text = 'Hello World';
  }

}
