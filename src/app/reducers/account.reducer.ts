import * as account from '../actions/account.action';
import { AccountsSummary, Account, Transaction } from './../models';
import { Observable } from 'rxjs/Observable';

export interface State {
    accountsSummary: AccountsSummary;
    currentAccount: Account;
};

const initialState: State = {
    accountsSummary: {} as AccountsSummary,
    currentAccount: {} as Account,
}

export function reducer(state = initialState, action: account.Actions): State {
    switch (action.type) {
        case account.LOAD_ACCOUNT_SUCCESS:
            return state =
                {
                    accountsSummary: state.accountsSummary,
                    currentAccount: action.payload as Account
                };
        case account.LOAD_ACCOUNT_LIST_SUCCESS:
            return state =
                {
                    accountsSummary: action.payload as AccountsSummary,
                    currentAccount: state.currentAccount
                };
        default:
            return state;
    }
}

export const getAccountsSummary = (state: State) => state.accountsSummary;
export const getAccount = (state: State) => state.currentAccount;
