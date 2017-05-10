import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { Amount } from "../app/models";

@Pipe({
  name: 'tkbcurrency',
})
export class TkbCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: Amount, ...args): string {
    if (value == null) return '';
    return this.currencyPipe.transform(value.amount, value.currency, true);
  }
}
