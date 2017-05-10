import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Accounts } from './accounts';
import {  AccountModule } from '../account/account.module';

@NgModule({
  declarations: [
    Accounts,
  ],
  imports: [
    IonicPageModule.forChild(Accounts),
    AccountModule,
  ],
  exports: [
    Accounts
  ]
})
export class AccountsModule {}
