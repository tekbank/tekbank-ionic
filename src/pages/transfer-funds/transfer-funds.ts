import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, PopoverOptions } from 'ionic-angular';
import { NgForm, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromRoot from '../../app/reducers';
import * as accounts from './../../app/actions/account.action';
import * as currency from './../../app/actions/currency.action';
import { Account, AccountsSummary, Currency } from "../../app/models/index";
import { CurrencySelectorPage } from '../currency-selector/currency-selector';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from "rxjs/Subject";
import { CurrencyConversionRequest } from '../../app/models/currency';

@IonicPage()
@Component({
  selector: 'page-transfer-funds',
  templateUrl: 'transfer-funds.html',
})
export class TransferFundsPage {
  unsubscribe$ = new Subject();

  accountsSummary$: Observable<AccountsSummary>;
  isLoggedIn$: Observable<boolean>;
  currentAccount$: Observable<Account>;
  currentAccount: Account;
  transferToAccount$: Observable<Account>;
  transferToAccount: Account;


  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>) {
    this.accountsSummary$ = this.store.select(fromRoot.getAccountsSummary);
    this.isLoggedIn$ = this.store.select(fromRoot.getAuthIsLoggedIn);
    this.currentAccount$ = this.store.select(fromRoot.getCurrentAccount);
    this.transferToAccount$ = this.store.select(fromRoot.getTransferToAccount);
  }


  ionViewCanEnter() {
    return this.isLoggedIn$;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsPage');

    this.currentAccount$
      .takeUntil(this.unsubscribe$)
      .subscribe(
          account => this.currentAccount = account
      )

    this.transferToAccount$
    .takeUntil(this.unsubscribe$)
    .subscribe(
      account => this.transferToAccount = account
    );

    let conversionRequest = {
      from:this.currentAccount.currencyCode,
      to:this.transferToAccount.currencyCode,
    } as CurrencyConversionRequest;

    console.log('conversion request', conversionRequest);
    //this.store.dispatch(new currency.ConversionRateLoadAction(conversionRequest))
  }


  gotoNewAccountPage() {
    this.navCtrl.push('NewAccountPage');
  }
  ionViewWillUnload() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
