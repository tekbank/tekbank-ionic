import { LoginDetail, LoginResult } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    logIn(loginDetail: LoginDetail): Observable<LoginResult> {
        if (loginDetail.userName === "admin" && loginDetail.password === "admin") {
            return Observable.of({ success: true, user: { firstName: "admin" } } as LoginResult);
        }
        else {
            return Observable.of({ success: false, message: "Invalid username or password" });
        }
    }
}