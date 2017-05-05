import { LoginResult } from './../models/login';
import { User } from './../models';
import * as auth from '../actions/auth.action';

export interface State {
    isLoggedIn: boolean;
    message: string;
    user: User;
};

const initialState: State = {
    isLoggedIn: null,
    message: null,
    user: null
};

export function reducer(state = initialState, action: auth.Actions): State {
    switch (action.type) {
        case auth.LOGIN_SUCCESS_ACTION: {
            const loginResult = action.payload as LoginResult;
            return state = {
                message: loginResult.message,
                isLoggedIn: loginResult.success,
                user: loginResult.user
            }
        }
        case auth.LOGOFF: {
            return state = {
                message: null,
                isLoggedIn: false,
                user: null
            }
        }
        case auth.REGISTER_SUCCESS_ACTION: {
            const registerResult = action.payload as LoginResult;
            return state = {
                message: registerResult.message,
                isLoggedIn: registerResult.success,
                user: registerResult.user
            }
        }
    }

    return initialState;
}

export const getLoggedIn = (state: State) => state.isLoggedIn;
export const getMessage = (state: State) => state.message;
