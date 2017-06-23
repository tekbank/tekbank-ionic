import * as account from '../actions/account.action';
import { AccountsSummary, Account, Transaction, TransactionFilter, Currency } from './../models';
import { Observable } from 'rxjs/Observable';

export interface State {
  accountsSummary: AccountsSummary;
  currentAccount: Account;
  transferToAccount: Account;
  currentTransactions: Transaction[];
  transactionFilter: TransactionFilter;
  newAccountCurrency: Currency;
};

const initialState: State = {
  accountsSummary: {} as AccountsSummary,
  currentAccount: {} as Account,
  transferToAccount: {} as Account,
  currentTransactions: null,
  transactionFilter: {} as TransactionFilter,
  newAccountCurrency: { code: "AUD", name: "Australian Dollars" }
}

export function reducer(state = initialState, action: account.Actions): State {
  switch (action.type) {
    case account.LOAD_ACCOUNT_SUCCESS:
      return {
        ...state,
        currentAccount: action.payload as Account
      };
    case account.LOAD_ACCOUNT_LIST_SUCCESS:
      return {
        ...state,
        accountsSummary: action.payload as AccountsSummary,
      };
    case account.LOAD_TRANSACTION_LIST:
      return {
        ...state,
        currentTransactions: null,
      };
    case account.LOAD_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        currentTransactions: action.payload as Transaction[],
      };
    case account.UPDATE_NEW_ACCOUNT_CURRENCY:
      return {
        ...state,
        newAccountCurrency: action.payload as Currency
      };
    case account.SELECT_TRANSFER_TO_ACCOUNT:
      return {
        ...state,
        transferToAccount: action.payload as Account
      };
    case account.ADD_ACCOUNT:
      var newAccountSummary = {
        accounts: [...state.accountsSummary.accounts, action.payload as Account],
        totalCredits: state.accountsSummary.totalCredits,
        totalDebits: state.accountsSummary.totalDebits,
        netPosition: state.accountsSummary.netPosition,
        currencyCode: state.accountsSummary.currencyCode
      }

      return {
        ...state,
        accountsSummary: newAccountSummary,
      };
    case account.SELECT_DEFAULT_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload as Account
      };
    default:
      return state;
  }
}

export const getAccountsSummary = (state: State) => state.accountsSummary;
export const getCurrentAccount = (state: State) => state.currentAccount;
export const getTransferToAccount = (state: State) => state.transferToAccount;
export const getTransactions = (state: State) => state.currentTransactions;
export const getNewAccountCurrency = (state: State) => state.newAccountCurrency;

