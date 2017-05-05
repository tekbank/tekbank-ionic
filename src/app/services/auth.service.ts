import { LoginDetail, LoginResult, RegisterDetail, RegisterResult } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    logIn(loginDetail: LoginDetail): Observable<LoginResult> {
        if (loginDetail.userName === 'admin' && loginDetail.password === 'admin') {
            return Observable.of({ success: true, user: { firstName: "admin" } } as LoginResult);
        }
        else {
            return Observable.of({ success: false, message: 'Username or password is incorrect' });
        }
    };

    register(registerDetail: RegisterDetail): Observable<RegisterResult> {
        return Observable.of(
            {
                success: true,
                user: { 
                        firstName: registerDetail.firstName,
                        lastName: registerDetail.lastName,
                        email: registerDetail.email,
                     }
            } as RegisterResult);
    };
}