import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAccountPage } from './new-account';
import { AccountModule } from '../account/account.module';
import { SharedModule } from './../../app/shared/shared.module';
import { CurrencySelectorPageModule } from './../../pages/currency-selector/currency-selector.module';

@NgModule({
  declarations: [
    NewAccountPage,
  ],
  entryComponents: [
    NewAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAccountPage),
    AccountModule,
    SharedModule,
    CurrencySelectorPageModule
  ],
  exports: [
    NewAccountPage
  ]
})
export class NewAccountPageModule {}
