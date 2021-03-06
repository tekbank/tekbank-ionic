import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromRoot from '../../app/reducers';
import * as accounts from './../../app/actions/account.action';
import { Account, AccountsSummary, TransactionFilter, Transaction } from "../../app/models/index";

interface TransactionSummary {
  date: Date;
  transactions: Transaction[];
}

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  accountId: string;
  account$: Observable<Account>;
  transactions$: Observable<Transaction[]>;
  transactionsSummary$: Observable<TransactionSummary[]>;

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>,
    private navParams: NavParams,
    public popoverCtrl: PopoverController) {
    this.account$ = this.store.select(fromRoot.getCurrentAccount);
    this.transactions$ = this.store.select(fromRoot.getTransactions);
    this.accountId = navParams.get('accountId');
  }
  presentPopover() {
    let popover = this.popoverCtrl.create('AccountsPopover', {});
    popover.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Account:', this.accountId);
    this.store.dispatch(new accounts.LoadAccountAction(this.accountId));

    let filter = { startDate: new Date(), endDate: new Date(), accountId: this.accountId } as TransactionFilter;
    this.store.dispatch(new accounts.LoadTransactionListAction(filter));
    console.log('asdf');
  }

}
