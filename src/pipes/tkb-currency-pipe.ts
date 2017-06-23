import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { Amount } from "../app/models";

@Pipe({
  name: 'tkbcurrency',
})
export class TkbCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: number, ...args): string {
    if (value == null) return '';
    console.log("tkbcurrency", ...args);
    var currencyCode = args[0] || "AUD";
    return this.currencyPipe.transform(value, currencyCode, true);
  }
}
