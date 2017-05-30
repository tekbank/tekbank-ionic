import { NavController } from 'ionic-angular';
import { AccountService } from './../services/account.service';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, toPayload, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as accountsSummary from '../actions/account.action';

@Injectable()
export class AccountEffects {

    @Effect()
    loadAccountsSummary$: Observable<Action> = this.actions$
        .ofType(accountsSummary.LOAD_ACCOUNT_LIST)
        .do(() =>console.log('effect: load account list'))
        .switchMap(() => this.accountService.retrieveAccountsSummary())
        .map(data => new accountsSummary.LoadAccountListSuccessAction(data));
    //.catch(() => of(new error.HandleErrorAction([]))); /i/TODO: Implement error handler

@Effect()
    loadAccountDetails$: Observable<Action> = this.actions$
        .ofType(accountsSummary.LOAD_ACCOUNT)
        .do(() =>console.log('effect: load account'))
        .switchMap((action) => this.accountService.retrieveAccount(action.payload))
        .map(data => new accountsSummary.LoadAccountSuccessAction(data));
    //.catch(() => of(new error.HandleErrorAction([]))); /i/TODO: Implement error handler

    @Effect()
    loadTransactions$: Observable<Action> = this.actions$
        .ofType(accountsSummary.LOAD_TRANSACTION_LIST)
        .do(() =>console.log('effect: load transaction list'))
        .switchMap((action) => this.accountService.retrieveTransactions(action.payload))
        .map(data => new accountsSummary.LoadTransactionListSuccessAction(data));
    //.catch(() => of(new error.HandleErrorAction([]))); /i/TODO: Implement error handler


    constructor(
        private actions$: Actions,
        private accountService: AccountService) { }
}
