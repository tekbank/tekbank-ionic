import { User, AccountsSummary, TransactionFilter, Transaction } from './../models';
import { Action } from '@ngrx/store';

export const LOAD_ACCOUNT_LIST = '[Account] Load Account List';
export const LOAD_ACCOUNT_LIST_SUCCESS = '[Account] Load Account List Success';
export const LOAD_ACCOUNT = '[Account] Load Account';
export const LOAD_ACCOUNT_SUCCESS = '[Account] Load Account Success';
export const LOAD_TRANSACTION_LIST = '[Account] Load Transaction List';
export const LOAD_TRANSACTION_LIST_SUCCESS = '[Account] Load Transaction List Success';

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

export class LoadTransactionListAction implements Action {
  readonly type = LOAD_TRANSACTION_LIST;
  constructor(public payload: TransactionFilter) { }
}

export class LoadTransactionListSuccessAction implements Action {
  readonly type = LOAD_TRANSACTION_LIST_SUCCESS;
  constructor(public payload: Transaction[]) { }
}

export type Actions
    = LoadAccountListAction  
    | LoadAccountListSuccessAction
    | LoadAccountAction  
    | LoadAccountSuccessAction
    | LoadTransactionListAction  
    | LoadTransactionListSuccessAction;