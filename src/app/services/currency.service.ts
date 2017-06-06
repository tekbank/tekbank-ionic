import { Currency } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {

    getPopularCurrencies(): Currency[] {
        return [
            { code: "AUD", name: "Australian Dollar" },            
            { code: "EUR", name: "Euro" },
            { code: "GBP", name: "Pound Sterling" },        
            { code: "USD", name: "US Dollar" },
        ]
    }

    getAllCurrencies() {
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
