import { Currency, CurrencyConversion, CurrencyConversionRequest } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {

  getCurrencyConversion(request: CurrencyConversionRequest) : Observable< CurrencyConversion> {
    console.log('getCurrencyConversion: ', request);
    return Observable.of( {
      from: request.from,
      to: request.to,
      amount: 1.2345,
      timestamp: new Date()
    } as CurrencyConversion );
  }

  getPopularCurrencies(): Currency[] {
    return [
      { code: "AUD", name: "Australian Dollar" },
      { code: "EUR", name: "Euro" },
      { code: "GBP", name: "Pound Sterling" },
      { code: "USD", name: "US Dollar" },
    ]
  }

  getCurrencies() {
    return [
      { code: "AUD", name: "Australian Dollar" },
      { code: "BGN", name: "Bulgarian Lev" },
      { code: "BRL", name: "Brazilian Real" },
      { code: "CAD", name: "Canadian Dollar" },
      { code: "CHF", name: "Swiss Franc" },
      { code: "CZK", name: "Czech Koruna" },
      { code: "DKK", name: "Danish Krone" },
      { code: "EUR", name: "Euro" },
      { code: "GBP", name: "Pound Sterling" },
      { code: "HRK", name: "Kuna" },
      { code: "HUF", name: "Forint" },
      { code: "JPY", name: "Yen" },
      { code: "NOK", name: "Norwegian Krone" },
      { code: "NZD", name: "New Zealand Dollar" },
      { code: "PLN", name: "Zloty" },
      { code: "RON", name: "Romanian Leu" },
      { code: "SEK", name: "Swedish Krona" },
      { code: "SGD", name: "Singapore Dollar" },
      { code: "USD", name: "US Dollar" },
    ]
  }


}
