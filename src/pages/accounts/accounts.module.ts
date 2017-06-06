import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Accounts } from './accounts';
import { AccountModule } from '../account/account.module';
import { SharedModule } from './../../app/shared/shared.module';
import { CurrencySelectorPageModule } from './../../pages/currency-selector/currency-selector.module';


@NgModule({
  declarations: [
    Accounts,
    CurrencySelectorPageModule,
  ],
  entryComponents: [
    Accounts,
    CurrencySelectorPageModule,
  ],
  imports: [
    IonicPageModule.forChild(Accounts),
    AccountModule,
    SharedModule,
    CurrencySelectorPageModule
  ],
  exports: [
    Accounts
  ]
})
export class AccountsModule { }
