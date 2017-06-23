import { Currency, CurrencyConversion, CurrencyConversionRequest } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

interface ICur {

  rate: number;
}

@Injectable()
export class CurrencyService {

  getCurrencyConversion(request: CurrencyConversionRequest): Observable<CurrencyConversion> {
    console.log('getCurrencyConversion: ', request);
    var rate = this.getCurrencyRate(request.from, request.to);
    return Observable.of({
      from: request.from,
      to: request.to,
      amount: rate,
      timestamp: new Date()
    } as CurrencyConversion);
  }

  getCurrencyRate(from: string, to: string): number {
    console.log('rates', from, to);
    var currency: { [code: string]: ICur; } = {};
    currency["AUD"] = { rate: 1 };
    currency["USD"] = { rate: 0.75680 };
    currency["EUR"] = { rate: 0.67775 };
    currency["GBP"] = { rate: 0.59450 };
    currency[""] = { rate: 1 };

    var fromCurrency = currency[from];
    var toCurrency = currency[to];

    if (toCurrency==null || fromCurrency==null) return 1;
    var calculatedRate = Math.round(toCurrency.rate / fromCurrency.rate * 100000) / 100000;
    return calculatedRate || 1;

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
