import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferFundsPage } from './transfer-funds';
import { SharedModule } from './../../app/shared/shared.module';

@NgModule({
  declarations: [
    TransferFundsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferFundsPage),
    SharedModule,
  ],
  exports: [
    TransferFundsPage
  ]
})
export class TransferFundsPageModule {}
