import * as accountsSummary from '../actions/accountsSummary.action';
import { AccountsSummary, AccountDetails, TransactionDetails, AccountSummary } from './../models';

export interface State {
    userId: null,
    accounts: AccountSummary;
    totalCredits: number;
    totalDebits: number;
    netPosition: number;
};

const initialState: State = {
    userId: null,
    accounts: null,
    totalCredits: 0,
    totalDebits: 0,
    netPosition: 0,
}


export function reducer(state = initialState, action: accountsSummary.Actions): State {
    switch (action.type) {
        case accountsSummary.LOAD_SUCCESS: 
            // const accountsSummary = action.payload as AccountsSummary;
            return state = {
                userId: null,
                accounts: action.payload as any,
                totalCredits: 0,
                totalDebits: 0,
                netPosition: 0,
            }
        default: 
            return state;
    }
}

