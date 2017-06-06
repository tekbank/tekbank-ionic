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

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class Accounts {

  accountsSummary$: Observable<AccountsSummary>;
  isLoggedIn$: Observable<boolean>;
  newAccountForm: FormGroup;
  newAccountCurrency$: Observable<Currency>;

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
  }
  buildForm() {
    this.newAccountForm = this.fb.group({
      accountName: ['', Validators.required],
      currency: ['', Validators.required],
    });
  }
  createAccount() {

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
}
