import { Component } from '@angular/core';
import { Accounts } from "../../pages/accounts/accounts";

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
  accountsPage: Accounts;

  constructor() {
    console.log('Hello NavButtons Component');
    this.text = 'Hello World';
  }

}
