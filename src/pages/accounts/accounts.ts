import { TransferComponent } from './../../components/transfer/transfer';
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

  transfertab: any;
  activitytab: any;

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>,
    public popoverCtrl: PopoverController) {
    this.accountsSummary$ = this.store.select(fromRoot.getAccountsSummary);
     this.transfertab = TransferComponent;
     this.activitytab = TransferComponent;
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
}
