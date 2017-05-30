import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferFundsPage } from './transfer-funds';

@NgModule({
  declarations: [
    TransferFundsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferFundsPage),
  ],
  exports: [
    TransferFundsPage
  ]
})
export class TransferFundsPageModule {}
