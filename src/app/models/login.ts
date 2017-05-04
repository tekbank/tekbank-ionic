import { User } from './user';

export interface LoginDetail {
    userName: string;
    password: string;
}

export interface LoginResult {
    success: boolean;
    message: string;
    user: User;
}
