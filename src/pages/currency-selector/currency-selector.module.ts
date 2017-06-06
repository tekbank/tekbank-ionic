import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencySelectorPage } from './currency-selector';
import { CurrencyService } from '../../app/services/currency.service';
import { SharedModule } from './../../app/shared/shared.module';

@NgModule({
  declarations: [
    CurrencySelectorPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(CurrencySelectorPage),
  ],
  exports: [
    CurrencySelectorPage
  ],
  providers:[
    CurrencyService
  ]
})
export class CurrencySelectorPageModule {}
