import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencySelectorPage } from './currency-selector';

@NgModule({
  declarations: [
    CurrencySelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrencySelectorPage),
  ],
  exports: [
    CurrencySelectorPage
  ]
})
export class CurrencySelectorPageModule {}
