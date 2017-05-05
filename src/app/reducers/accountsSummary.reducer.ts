import { AccountsSummary, AccountDetails, TransactionDetails, AccountSummary } from './../models';
import * as accountsSummary from '../actions/accountsSummary.action';

export interface State {
    accounts: AccountDetails[];
    totalCredits: number;
    totalDebits: number;
    netPosition: number;
};

const initialState: AccountsSummary = {
    userId: null,
    accounts: null,
    totalCredits: 0,
    totalDebits: 0,
    netPosition: 0,
}


export function reducer(state = initialState, action: accountsSummary.Actions): State {
    switch (action.type) {
        case accountsSummary.LOAD_SUCCESS: {
            const accountsSummary = action.payload as AccountsSummary;
            return state = {
                userId: null,
                accounts: accountsSummary.accounts,
                totalCredits: 0,
                totalDebits: 0,
                netPosition: 0,
            }
        }
    }

    return initialState;
}

