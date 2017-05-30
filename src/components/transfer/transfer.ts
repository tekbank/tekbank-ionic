import { Component } from '@angular/core';

/**
 * Generated class for the TransferComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'transfer',
  templateUrl: 'transfer.html'
})
export class TransferComponent {

  text: string;

  constructor() {
    console.log('Hello TransferComponent Component');
    this.text = 'Transfer Moolah';
  }

}
