import { HomePage } from './../../pages/home/home';
import { NavController } from 'ionic-angular';
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
        .map(toPayload)
        .switchMap(loginDetails => this.authService.logIn(loginDetails))
        .map(data => new auth.LoginSuccessAction(data));
    //.catch(() => of(new error.HandleErrorAction([]))); //TODO: Implement error handler

@Effect()
    register$: Observable<Action> = this.actions$
        .ofType(auth.REGISTER)
        .map(toPayload)
        .switchMap(registerDetails => this.authService.register(registerDetails))
        .map(data => new auth.RegisterSuccessAction(data));
    //.catch(() => of(new error.HandleErrorAction([]))); //TODO: Implement error handler


    constructor(
        private actions$: Actions,
        private authService: AuthService) { }

}
