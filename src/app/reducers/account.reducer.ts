import * as account from '../actions/account.action';
import { AccountsSummary, Account, Transaction, TransactionFilter, Currency } from './../models';
import { Observable } from 'rxjs/Observable';

export interface State {
    accountsSummary: AccountsSummary;
    currentAccount: Account;
    currentTransactions: Transaction[];
    transactionFilter: TransactionFilter;
    newAccountCurrency: Currency;
};

const initialState: State = {
    accountsSummary: {} as AccountsSummary,
    currentAccount: {} as Account,
    currentTransactions: null,
    transactionFilter: {} as TransactionFilter,
    newAccountCurrency: { code: "AUD", name: "Australian Dollars" }
}

export function reducer(state = initialState, action: account.Actions): State {
    switch (action.type) {
        case account.LOAD_ACCOUNT_SUCCESS:
            return state =
                {
                    accountsSummary: state.accountsSummary,
                    currentAccount: action.payload as Account,
                    currentTransactions: state.currentTransactions,
                    transactionFilter: state.transactionFilter,
                    newAccountCurrency: state.newAccountCurrency
                };
        case account.LOAD_ACCOUNT_LIST_SUCCESS:
            return state =
                {
                    accountsSummary: action.payload as AccountsSummary,
                    currentAccount: state.currentAccount,
                    currentTransactions: state.currentTransactions,
                    transactionFilter: state.transactionFilter,
                    newAccountCurrency: state.newAccountCurrency
                };
        case account.LOAD_TRANSACTION_LIST:
            return state =
                {
                    accountsSummary: state.accountsSummary,
                    currentAccount: state.currentAccount,
                    currentTransactions: null,
                    transactionFilter: action.payload as TransactionFilter,
                    newAccountCurrency: state.newAccountCurrency
                };
        case account.LOAD_TRANSACTION_LIST_SUCCESS:
            return state =
                {
                    accountsSummary: state.accountsSummary,
                    currentAccount: state.currentAccount,
                    currentTransactions: action.payload as Transaction[],
                    transactionFilter: state.transactionFilter,
                    newAccountCurrency: state.newAccountCurrency
                };
        case account.UPDATE_NEW_ACCOUNT_CURRENCY:
            return state =
                {
                    accountsSummary: state.accountsSummary,
                    currentAccount: state.currentAccount,
                    currentTransactions: state.currentTransactions,
                    transactionFilter: state.transactionFilter,
                    newAccountCurrency: action.payload as Currency
                };
        default:
            return state;
    }
}

export const getAccountsSummary = (state: State) => state.accountsSummary;
export const getAccount = (state: State) => state.currentAccount;
export const getTransactions = (state: State) => state.currentTransactions;
export const getNewAccountCurrency = (state: State) => state.newAccountCurrency;

