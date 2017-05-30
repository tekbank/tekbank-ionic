import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferComponent } from './transfer';

@NgModule({
  declarations: [
    TransferComponent,
  ],
  imports: [
    IonicPageModule.forChild(TransferComponent),
  ],
  exports: [
    TransferComponent
  ]
})
export class TransferComponentModule {}
