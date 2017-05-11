import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromRoot from '../../app/reducers';
import * as accounts from './../../app/actions/account.action';
import { Account, AccountsSummary, TransactionFilter, Transaction } from "../../app/models/index";

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  accountId: string;
  account$: Observable<Account>;
  transactions$: Observable<Transaction[]>;

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>,
    private navParams: NavParams) {
    this.account$ = this.store.select(fromRoot.getAccount);
    this.transactions$ = this.store.select(fromRoot.getTransactions);
    this.accountId = navParams.get('accountId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Account:', this.accountId);
    this.store.dispatch(new accounts.LoadAccountAction(this.accountId));

    let filter = {startDate: new Date(), endDate: new Date(), accountId: this.accountId  } as TransactionFilter;
    this.store.dispatch(new accounts.LoadTransactionListAction(filter));

  }

}
