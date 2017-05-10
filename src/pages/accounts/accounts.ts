import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private store: Store<fromRoot.State>) {
    this.accountsSummary$ = this.store.select(fromRoot.getAccountsSummary);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Accounts');
    this.store.dispatch(new accounts.LoadAccountListAction())
  }

  goToAccountDetail(accountId: string) {
    this.navCtrl.push('AccountPage', { accountId: accountId });
  }
}
