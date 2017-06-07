import { Component, ViewChild } from '@angular/core';
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
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class Accounts {
  @ViewChild(Slides) slides: Slides;
  accountsSummary$: Observable<AccountsSummary>;
  accountsSummary: AccountsSummary;
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
    this.accountsSummary$ = this.store.select(fromRoot.getAccountsSummary);
    this.isLoggedIn$ = this.store.select(fromRoot.getAuthIsLoggedIn);
    this.newAccountCurrency$ = this.store.select(fromRoot.getNewAccountCurrency);

    this.buildForm();
  }


  ionViewCanEnter() {
    return this.isLoggedIn$;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Accounts');
    this.store.dispatch(new accounts.LoadAccountListAction())
    this.subscriptions.push(this.newAccountCurrency$.subscribe(
      currency => this.newAccountCurrency = currency
    ));
    this.subscriptions.push(this.accountsSummary$.subscribe(
      (summary) => {
        this.accountsSummary = summary;
        this.setSelectedAccount();
      }

    ));

  }
  buildForm() {
    this.newAccountForm = this.fb.group({
      accountName: ['', Validators.required]
    });
  }
  slideChanged() {
    this.setSelectedAccount();
  }
  setSelectedAccount() {
    let currentIndex = this.slides.getActiveIndex() || 0;    
    let selectedAccount = this.accountsSummary.accounts[currentIndex];
    if (selectedAccount==null) return;
    this.store.dispatch(new accounts.SelectAccountAction(selectedAccount))
    console.log('selected Account', selectedAccount);
  }
  createAccount() {
    let formaccountname = this.newAccountForm.value.accountName;
    let account = {
      accountId: "",
      accountNumber: "0000-0000",
      accountName: formaccountname,
      balanceAmount: { amount: 0, currency: this.newAccountCurrency.code },
      creditAmount: { amount: 0, currency: this.newAccountCurrency.code },
      debitAmount: { currency: this.newAccountCurrency },
      availableAmount: { amount: 0, currency: this.newAccountCurrency.code },
    } as Account;
    this.store.dispatch(new accounts.AddAccountAction(account))
  }
  selectCurrency() {
    let modal = this.modalCtrl.create('CurrencySelectorPage', {});
    modal.present();
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
  ionViewWillUnload() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
