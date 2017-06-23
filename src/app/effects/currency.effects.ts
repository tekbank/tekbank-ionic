import { NavController } from 'ionic-angular';
import { CurrencyService } from './../services/currency.service';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, toPayload, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as currency from '../actions/currency.action';

@Injectable()
export class CurrencyEffects {

  @Effect()
  loadCurrencysSummary$: Observable<Action> = this.actions$
    .ofType(currency.CONVERSION_RATE_LOAD)
    .do(() => console.log('effect: load currency conversion'))
    .do((action) => console.log('effect: load currency conversion,', action.payload))
    //.switchMap((action) => this.currencyService.getCurrencyConversion(action.payload))
    //.map(data => new currency.ConversionRateLoadSuccessAction(data));

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService) { }
}
