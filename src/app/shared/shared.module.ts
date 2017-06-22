import { NgModule } from '@angular/core';
import { TkbCurrencyPipe } from '../../pipes/tkb-currency-pipe';
import { TkbCurrencySymbolPipe } from '../../pipes/tkb-currency-symbol-pipe';
import { TkbCountryCurrencyCodeToIsoCodePipe } from '../../pipes/tkb-iso-country-pipe';

@NgModule({
  declarations: [
    TkbCurrencyPipe,
    TkbCurrencySymbolPipe,
    TkbCountryCurrencyCodeToIsoCodePipe,
  ],
  imports: [
  ],
  exports: [
    TkbCurrencyPipe,
    TkbCurrencySymbolPipe,
    TkbCountryCurrencyCodeToIsoCodePipe,
  ],
})
export class SharedModule { }
