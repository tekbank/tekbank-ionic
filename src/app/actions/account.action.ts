import { User, AccountsSummary, TransactionFilter, Transaction, Currency } from './../models';
import { Action } from '@ngrx/store';

export const LOAD_ACCOUNT_LIST = '[Account] Load Account List';
export const LOAD_ACCOUNT_LIST_SUCCESS = '[Account] Load Account List Success';
export const LOAD_ACCOUNT = '[Account] Load Account';
export const LOAD_ACCOUNT_SUCCESS = '[Account] Load Account Success';
export const LOAD_TRANSACTION_LIST = '[Account] Load Transaction List';
export const LOAD_TRANSACTION_LIST_SUCCESS = '[Account] Load Transaction List Success';
export const UPDATE_NEW_ACCOUNT_CURRENCY = '[Account] Update New Account Currency'
export const ADD_ACCOUNT = '[Account] Add Account'
export const SELECT_DEFAULT_ACCOUNT = '[Account] Select Default Account'
export const SELECT_TRANSFER_TO_ACCOUNT = '[Account] Select Transfer To Account'

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

export class UpdateNewAccountCurrencyAction implements Action {
  readonly type = UPDATE_NEW_ACCOUNT_CURRENCY;
  constructor(public payload: Currency) { }
}
export class AddAccountAction implements Action {
  readonly type = ADD_ACCOUNT;
  constructor(public payload: Account) { }
}
export class SelectAccountAction implements Action {
  readonly type = SELECT_DEFAULT_ACCOUNT;
  constructor(public payload: Account) { }
}
export class SelectTransferToAccountAction implements Action {
  readonly type = SELECT_TRANSFER_TO_ACCOUNT;
  constructor(public payload: Account) { }
}
export type Actions
  = LoadAccountListAction
  | LoadAccountListSuccessAction
  | LoadAccountAction
  | LoadAccountSuccessAction
  | LoadTransactionListAction
  | LoadTransactionListSuccessAction
  | UpdateNewAccountCurrencyAction
  | AddAccountAction
  | SelectAccountAction
  | SelectTransferToAccountAction;
