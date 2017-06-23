import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { Amount } from "../app/models";

@Pipe({
  name: 'tkbcurrencysymbol',
})
export class TkbCurrencySymbolPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(currencyCode: string): string {
    if (currencyCode == null) return '';
    let currencyString = this.currencyPipe.transform(1, currencyCode, true);
    var re = /(\d*)[.,](\d*)/;
    return currencyString.replace(re,"");
  }
}
