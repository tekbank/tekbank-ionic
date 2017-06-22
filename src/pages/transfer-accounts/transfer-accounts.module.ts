import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferAccountsPage } from './transfer-accounts';
import { SharedModule } from './../../app/shared/shared.module';

@NgModule({
  declarations: [
    TransferAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferAccountsPage),
    SharedModule,
  ],
  exports: [
    TransferAccountsPage
  ]
})
export class TransferAccountsPageModule {}
