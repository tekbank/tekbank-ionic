import { User } from './../models/user';
import * as auth from '../actions/auth.action';

export interface State {
    isLoggedIn: boolean;
    user: User;
    //   ids: string[];
    //   entities: { [id: string]: Auth };
    //   selectedBookId: string | null;
};

const initialState: State = {
    isLoggedIn: null,
    user: null
};

export function reducer(state = initialState, action: auth.Actions): State {
    return initialState;
}

export const getLoggedIn = (state: State) => state.isLoggedIn;
