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
    //.map(() =>  new currency.EmptyAction("rwar"));
    .map(() => new currency.ConversionRateLoadSuccessAction(null));

//  @Effect()
//     loadAccountsSummary$: Observable<Action> = this.actions$
//         .ofType(accountsSummary.LOAD_ACCOUNT_LIST)
//         .do(() =>console.log('effect: load account list'))
//         .switchMap(() => this.accountService.retrieveAccountsSummary())
//         .map(data => new accountsSummary.LoadAccountListSuccessAction(data));

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService) { }
}
