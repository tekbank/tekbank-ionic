import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export interface State {
    auth: fromAuth.State;
}

const reducers = {
    auth: fromAuth.reducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
//const productionReducer: ActionReducer<State> = combineReducers(reducers); //todo: implement environment variables

export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}

export const getAuthState = (state: State) => state.auth;
export const getAuthIsLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn);