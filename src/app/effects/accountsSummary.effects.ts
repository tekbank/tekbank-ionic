import { HomePage } from './../../pages/home/home';
import { NavController } from 'ionic-angular';
import { AccountService } from './../services/account.service';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, toPayload, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as accountsSummary from '../actions/accountsSummary.action';

@Injectable()
export class AccountEffects {

    @Effect()
    loadAccountsSummary$: Observable<Action> = this.actions$
        .ofType(accountsSummary.LOAD)
        .do(() =>console.log('effect load account'))
        .switchMap(() => this.accountService.retrieveAccountsSummary())
        .map(data => new accountsSummary.LoadSuccessAction(data));
    //.catch(() => of(new error.HandleErrorAction([]))); /i/TODO: Implement error handler

    constructor(
        private actions$: Actions,
        private accountService: AccountService) { }
}
