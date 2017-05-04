import { User } from './user';

export interface RegisterDetail {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

export interface RegisterResult {
    success: boolean;
    message: string;
    user: User;
}
