import * as accountsSummary from '../actions/accountsSummary.action';
import { AccountsSummary, Account, Transaction } from './../models';
import { Observable } from 'rxjs/Observable';


export interface State {
    accounts: Account[];
    totalCredits: number;
    totalDebits: number;
    netPosition: number;
};

const initialState: State = {
    accounts: null,
    totalCredits: 0,
    totalDebits: 0,
    netPosition: 0,
}


export function reducer(state = initialState, action: accountsSummary.Actions): State {
    switch (action.type) {
        case accountsSummary.LOAD_SUCCESS:
            return state = action.payload as AccountsSummary;
        default:
            return state;
    }
}

export const getAccountsSummary = (state: State) => state;
