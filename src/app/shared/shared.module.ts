import { NgModule } from '@angular/core';
import { TkbCurrencyPipe } from '../../pipes/tkb-currency-pipe';
import { TkbCountryCurrencyCodeToIsoCodePipe } from '../../pipes/tkb-iso-country-pipe';

@NgModule({
  declarations: [
    TkbCurrencyPipe,
    TkbCountryCurrencyCodeToIsoCodePipe,
  ],
  imports: [
  ],
  exports: [
    TkbCurrencyPipe,
    TkbCountryCurrencyCodeToIsoCodePipe,
  ],
})
export class SharedModule { }
