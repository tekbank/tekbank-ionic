import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { Amount } from "../app/models";

@Pipe({
  name: 'tkbcurrency',
})
export class TkbCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: number, ...args: string[]): string {
    console.log('tkburrencypipe',value);
    console.log('tkburrencypipe args',args);
    if (value == null) return '';
     var currencyCode = args[0] || "AUD";
    return this.currencyPipe.transform(value, currencyCode, true);
  }
}
