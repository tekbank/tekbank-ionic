import { Pipe, PipeTransform } from '@angular/core';
import { Country } from "../app/models";

@Pipe({
    name: 'tkbcurrencycodetoiso',
})
export class TkbCountryCurrencyCodeToIsoCodePipe implements PipeTransform {

    constructor() { }

    transform(currencyCode: string, ...args): string {
        if (currencyCode == null) return '';
        //as per ISO 4217 the 3 letter currency code is comprised of 
        // the 2 letter country code followed by
        // a 1 letter currency code
        // https://www.iso.org/iso-4217-currency-codes.html
        // e.g. Mexican Peso MXN, Mexican Unidad de Inversion (UDI) MXV - Country code is MX
        let selectedCountry = currencyCode.substr(0,2).toLowerCase();
        return  selectedCountry;
    }
}

