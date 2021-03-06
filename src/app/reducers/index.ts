import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromAccounts from './account.reducer';
import * as fromAuth from './auth.reducer';
import * as fromCurrency from './currency.reducer';

export interface State {
  accounts: fromAccounts.State;
  auth: fromAuth.State;
  currency: fromCurrency.State;
}

const reducers = {
  auth: fromAuth.reducer,
  accounts: fromAccounts.reducer,
  currency: fromCurrency.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
//const productionReducer: ActionReducer<State> = combineReducers(reducers); //todo: implement environment variables

export function reducer(state: any, action: any) {
  return developmentReducer(state, action);
}

export const getAuthState = (state: State) => state.auth;
export const getAuthIsLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn);
export const getAuthMessage = createSelector(getAuthState, fromAuth.getMessage);

export const getAccountsState = (state: State) => state.accounts;
export const getAccountsSummary = createSelector(getAccountsState, fromAccounts.getAccountsSummary);
export const getCurrentAccount = createSelector(getAccountsState, fromAccounts.getCurrentAccount);
export const getTransactions = createSelector(getAccountsState, fromAccounts.getTransactions);
export const getNewAccountCurrency = createSelector(getAccountsState, fromAccounts.getNewAccountCurrency);
export const getTransferToAccount = createSelector(getAccountsState, fromAccounts.getTransferToAccount);

export const getCurrencyState = (state: State) => state.currency;
export const getCurrencyConversion = createSelector(getCurrencyState, fromCurrency.getConversionRate);


