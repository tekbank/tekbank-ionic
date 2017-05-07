import { AccountsSummary } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

    intialAccounts() {
        return [
            {
                accountNumber: '1234 4567 0980 2342', accountName: 'Basic Account',
                creditAmount: 4500, debitAmount: 1000,
                balanceAmount: 3500, availableAmount: 3100
            },
            {
                accountNumber: '2345 4567 0980 2342', accountName: 'Super Saver',
                creditAmount: 22500, debitAmount: 1000,
                balanceAmount: 21500, availableAmount: 21500
            },
            {
                accountNumber: '3456 4567 0980 2342', accountName: 'MasterCard Master',
                creditAmount: 1000, debitAmount: 5000,
                balanceAmount: 5000, availableAmount: 1500
            }
        ]
    }

    retrieveAccountsSummary(): Observable<AccountsSummary> {

        return Observable.of(
            {
                accounts: this.intialAccounts(),
                totalCredits: 0,
                totalDebits: 0,
                netPosition: 0,
            } as AccountsSummary
        );

    };

}
