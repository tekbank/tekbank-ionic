import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Accounts } from './accounts';
import {  AccountModule } from '../account/account.module';
import { SharedModule } from './../../app/shared/shared.module';

@NgModule({
  declarations: [
    Accounts,
  ],
  imports: [
    IonicPageModule.forChild(Accounts),
    AccountModule,
    SharedModule
  ],
  exports: [
    Accounts
  ]
})
export class AccountsModule {}
