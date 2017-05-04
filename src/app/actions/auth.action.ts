import { LoginDetail, LoginResult } from './../models';
import { Action } from '@ngrx/store';

export const LOGIN = '[User] Login';
export const LOGOFF = '[User] LogOff';
export const LOGIN_SUCCESS_ACTION = '[User] Login Success Action';

export class LoginAction implements Action {
    readonly type = LOGIN;
    constructor(public payload: LoginDetail) { }
}

export class LogoffAction implements Action {
    readonly type = LOGOFF;
    constructor() { }
}

export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS_ACTION;
    constructor(public payload: LoginResult) { }
}

export type Actions
    = LoginAction
    | LoginSuccessAction
    | LogoffAction;

