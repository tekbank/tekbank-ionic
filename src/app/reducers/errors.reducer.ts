import * as errors from '../actions/errors.action';
import { Error } from '../models';

export interface State {
    errors: Error[]
};

const initialState: State = {
    errors: []
}

export function reducer(state = initialState, action: errors.Actions): State {
    switch (action.type) {
        case errors.LOAD_ERRORS:
            return state = {
                errors: [...state.errors, action.payload]
            }
        case errors.CLEAR_ERRORS:
            return state = {
                errors: [] as Error[]
            }
        default:
            return state;
    }
}

