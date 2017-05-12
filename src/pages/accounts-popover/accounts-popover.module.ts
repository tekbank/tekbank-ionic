import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountsPopover } from './accounts-popover';

@NgModule({
  declarations: [
    AccountsPopover,
  ],
  imports: [
    IonicPageModule.forChild(AccountsPopover),
  ],
  exports: [
    AccountsPopover
  ]
})
export class AccountsPopoverModule {}
