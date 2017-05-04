import { LoginResult } from './../models/login';
import { User } from './../models';
import * as auth from '../actions/auth.action';

export interface State {
    isLoggedIn: boolean;
    user: User;
};

const initialState: State = {
    isLoggedIn: null,
    user: null
};

export function reducer(state = initialState, action: auth.Actions): State {
    switch (action.type) {
        case auth.LOGIN_SUCCESS_ACTION: {
            const loginResult = action.payload as LoginResult;
            return state = {
                isLoggedIn: loginResult.success,
                user: loginResult.user
            }
        }
        case auth.LOGOFF: {
            return state = {
                isLoggedIn: false,
                user: null
            }
        }
        case auth.REGISTER_SUCCESS_ACTION: {
            debugger;
            const registerResult = action.payload as LoginResult;
            return state = {
                isLoggedIn: registerResult.success,
                user: registerResult.user
            }
        }
    }

    return initialState;
}

export const getLoggedIn = (state: State) => state.isLoggedIn;
