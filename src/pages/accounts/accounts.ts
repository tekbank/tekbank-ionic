import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, PopoverOptions } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromRoot from '../../app/reducers';
import * as accounts from './../../app/actions/account.action';
import { AccountsSummary } from "../../app/models/index";

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class Accounts {

  accountsSummary$: Observable<AccountsSummary>;

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>,
    public popoverCtrl: PopoverController) {
    this.accountsSummary$ = this.store.select(fromRoot.getAccountsSummary);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Accounts');
    this.store.dispatch(new accounts.LoadAccountListAction())
  }
  presentPopover() {
    let popover = this.popoverCtrl.create('AccountsPopover', {}, {} as PopoverOptions);
    popover.present();
  }
  goToAccountDetail(accountId: string) {
    this.navCtrl.push('AccountPage', { accountId: accountId });
  }
  gotoAddMoney() {
    this.navCtrl.push('AddMoneyPage');
  }

  gotoTransferFunds() {
    this.navCtrl.push('TransferFundsPage');
  }
}
