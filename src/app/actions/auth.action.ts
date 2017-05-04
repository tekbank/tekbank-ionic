import { LoginDetail, LoginResult, RegisterDetail, RegisterResult } from './../models';
import { Action } from '@ngrx/store';

export const LOGIN = '[User] Login';
export const LOGIN_SUCCESS_ACTION = '[User] Login Success Action';
export const LOGOFF = '[User] LogOff';
export const REGISTER = '[User] Register';
export const REGISTER_SUCCESS_ACTION = '[User] Register Success Action';

export class LoginAction implements Action {
    readonly type = LOGIN;
    constructor(public payload: LoginDetail) { }
}

export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS_ACTION;
    constructor(public payload: LoginResult) { }
}

export class LogoffAction implements Action {
    readonly type = LOGOFF;
    constructor() { }
}

export class RegisterAction implements Action {
    readonly type = REGISTER;
    constructor(public payload: RegisterDetail) { }
}

export class RegisterSuccessAction implements Action {
    readonly type = REGISTER_SUCCESS_ACTION;
    constructor(public payload: RegisterResult) { }
    
}


export type Actions
    = LoginAction
    | LoginSuccessAction
    | LogoffAction
    | RegisterAction
    | RegisterSuccessAction;

