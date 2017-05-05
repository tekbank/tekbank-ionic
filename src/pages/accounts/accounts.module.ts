import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Accounts } from './accounts';

@NgModule({
  declarations: [
    Accounts,
  ],
  imports: [
    IonicPageModule.forChild(Accounts),
  ],
  exports: [
    Accounts
  ]
})
export class AccountsModule {}
