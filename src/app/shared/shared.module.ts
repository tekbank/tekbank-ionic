import { NgModule } from '@angular/core';
import { TkbCurrencyPipe } from '../../pipes/tkb-currency-pipe';

@NgModule({
  declarations: [
    TkbCurrencyPipe,   
  ],
  imports: [
  ],
  exports: [
    TkbCurrencyPipe,
  ]
})
export class SharedModule {}
