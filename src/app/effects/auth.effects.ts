import { AuthService } from './../services/auth.service';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, toPayload, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as auth from '../actions/auth.action';

@Injectable()
export class AuthEffects {

    @Effect()
    logIn$: Observable<Action> = this.actions$
        .ofType(auth.LOGIN)
        .do(console.log)
        .map(toPayload)
        .do(console.log)

        .switchMap(loginDetails => this.authService.logIn(loginDetails))
        .map(data => new auth.LoginSuccessAction(data));
    //.catch(() => of(new error.HandleErrorAction([]))); //TODO: Implement error handler

    constructor(private actions$: Actions, private authService: AuthService) { }

}
