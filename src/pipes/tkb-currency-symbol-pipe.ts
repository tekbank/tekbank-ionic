import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { Amount } from "../app/models";

@Pipe({
  name: 'tkbcurrencysymbol',
})
export class TkbCurrencySymbolPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: Amount, ...args): string {
    if (value == null) return '';
    let currencyString = this.currencyPipe.transform(1, value.currency, true);
    var re = /(\d*)[.,](\d*)/;
    return currencyString.replace(re,"");
  }
}
