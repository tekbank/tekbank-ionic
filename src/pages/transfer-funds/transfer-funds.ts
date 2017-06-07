import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, PopoverOptions } from 'ionic-angular';
import { NgForm, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromRoot from '../../app/reducers';
import * as accounts from './../../app/actions/account.action';
import { AccountsSummary, Currency } from "../../app/models/index";
import { CurrencySelectorPage } from '../currency-selector/currency-selector';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-transfer-funds',
  templateUrl: 'transfer-funds.html',
})
export class TransferFundsPage {

  accountsSummary$: Observable<AccountsSummary>;
  isLoggedIn$: Observable<boolean>;
  currentAccount$: Observable<Account>;
  currentAccount: Account;
  subscriptions = [] as Subscription[];

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>) {
    this.accountsSummary$ = this.store.select(fromRoot.getAccountsSummary);
    this.isLoggedIn$ = this.store.select(fromRoot.getAuthIsLoggedIn);
    this.currentAccount$ = this.store.select(fromRoot.getCurrentAccount);
  }


  ionViewCanEnter() {
    return this.isLoggedIn$;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsPage');
    this.store.dispatch(new accounts.LoadAccountListAction())
    this.subscriptions.push(this.currentAccount$.subscribe(
      account => this.currentAccount = account
    ));

  }
  

  ionViewWillUnload() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
