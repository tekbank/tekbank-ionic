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
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
})
export class NewAccountPage {
  isLoggedIn$: Observable<boolean>;
  newAccountForm: FormGroup;
  newAccountCurrency$: Observable<Currency>;
  newAccountCurrency: Currency;
  subscriptions = [] as Subscription[];

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>,
    public popoverCtrl: PopoverController,
    private fb: FormBuilder,
    public modalCtrl: ModalController) {
    this.isLoggedIn$ = this.store.select(fromRoot.getAuthIsLoggedIn);
    this.newAccountCurrency$ = this.store.select(fromRoot.getNewAccountCurrency);

    this.buildForm();
  }

  ionViewCanEnter() {
    return this.isLoggedIn$;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAccountPage');

    this.subscriptions.push(this.newAccountCurrency$.subscribe(
      currency => this.newAccountCurrency = currency
    ));

  }
  buildForm() {
    this.newAccountForm = this.fb.group({
      accountName: ['', Validators.required]
    });
  }

  createAccount() {
    let formaccountname = this.newAccountForm.value.accountName;
    let account = {
      accountId: "",
      accountNumber: "0000-0000",
      accountName: formaccountname,
      currencyCode: this.newAccountCurrency.code,
      balanceAmount: 0,
      creditAmount: 0,
      debitAmount: 0,
      availableAmount: 0,
    } as Account;
    this.store.dispatch(new accounts.AddAccountAction(account))
    this.navCtrl.pop();

  }
  selectCurrency() {
    let modal = this.modalCtrl.create('CurrencySelectorPage', {});
    modal.present();
  }

  ionViewWillUnload() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
