import { User, AccountsSummary } from './../models';
import { Action } from '@ngrx/store';

export const LOAD_ACCOUNT_LIST = '[Account] Load Account List';
export const LOAD_ACCOUNT_LIST_SUCCESS = '[Account] Load Account List Success';
export const LOAD_ACCOUNT = '[Account] Load Account';
export const LOAD_ACCOUNT_SUCCESS = '[Account] Load Account Success';

export class LoadAccountListAction implements Action {
  readonly type = LOAD_ACCOUNT_LIST;
}

export class LoadAccountListSuccessAction implements Action {
  readonly type = LOAD_ACCOUNT_LIST_SUCCESS;
  constructor(public payload: AccountsSummary) { }
}


export class LoadAccountAction implements Action {
  readonly type = LOAD_ACCOUNT;
  constructor(public payload: string) { }
}

export class LoadAccountSuccessAction implements Action {
  readonly type = LOAD_ACCOUNT_SUCCESS;
  constructor(public payload: Account) { }
}

export type Actions
    = LoadAccountListAction  
    | LoadAccountListSuccessAction
    | LoadAccountAction  
    | LoadAccountSuccessAction;