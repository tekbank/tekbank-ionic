import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, PopoverOptions } from 'ionic-angular';
import { NgForm, FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
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
import { CurrencyConversionRequest, CurrencyConversion } from '../../app/models/currency';


@IonicPage()
@Component({
  selector: 'page-transfer-funds',
  templateUrl: 'transfer-funds.html',
})
export class TransferFundsPage {

  unsubscribe$: any = new Subject();

  accountsSummary$: Observable<AccountsSummary>;
  isLoggedIn$: Observable<boolean>;
  currentAccount$: Observable<Account>;
  currentAccount: Account;
  transferToAccount$: Observable<Account>;
  transferToAccount: Account;
  currencyConversion$: Observable<CurrencyConversion>;
  currencyConversion: CurrencyConversion;

  toAmountControl = new FormControl();
  fromAmountControl = new FormControl();

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>,
    private fb: FormBuilder) {

    this.accountsSummary$ = this.store.select(fromRoot.getAccountsSummary);
    this.isLoggedIn$ = this.store.select(fromRoot.getAuthIsLoggedIn);
    this.currentAccount$ = this.store.select(fromRoot.getCurrentAccount);
    this.transferToAccount$ = this.store.select(fromRoot.getTransferToAccount);
    this.currencyConversion$ = this.store.select(fromRoot.getCurrencyConversion);

  }


  ionViewCanEnter() {
    return this.isLoggedIn$;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferFundsPage');
    this.subscribeToUpdateCurrencyValue();
    this.subscribeToAmountFieldChanges();
    this.subscribeToUpdatedCurrencyRate();
  }

  gotoNewAccountPage() {
    this.navCtrl.push('NewAccountPage');
  }
  ionViewWillUnload() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  calculateToValue(fromValue: number): number {
    return fromValue * this.currencyConversion.amount;
  }
  calculateFromValue(toValue: number): number {
    return toValue / this.currencyConversion.amount ;
  }
  subscribeToAmountFieldChanges() {
    this.toAmountControl.valueChanges
      .takeUntil(this.unsubscribe$)
      .subscribe(data => {
        console.log('to Amount Form changes', data)
        let fromAmount = this.calculateFromValue(data);
        this.fromAmountControl.patchValue(fromAmount, { emitEvent: false });
      })

    this.fromAmountControl.valueChanges
      .takeUntil(this.unsubscribe$)
      .subscribe(data => {
        console.log('from Amount Form changes', data)
        let toAmount = this.calculateToValue(data);
        this.toAmountControl.patchValue(toAmount, { emitEvent: false });
      })
  }
  subscribeToUpdatedCurrencyRate(): any {
    this.currencyConversion$
      .takeUntil(this.unsubscribe$)
      .subscribe(conversion => this.currencyConversion = conversion);
  }
  subscribeToUpdateCurrencyValue() {

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

    Observable.combineLatest(
      this.currentAccount$,
      this.transferToAccount$,
      (fromAccount: Account, toAccount: Account) => {
        return { from: fromAccount.currencyCode, to: toAccount.currencyCode }
      }
    )
      .subscribe(conversionRequest =>
        this.store.dispatch(new currency.ConversionRateLoadAction(conversionRequest))
      );
  }

}
