import { AccountsSummary } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

    intialAccounts() {
        return [
            {
                accountId: '1111-1111-1111-1111',
                accountNumber: '1234 4567 0980 2342', accountName: 'Basic Account',
                creditAmount: 4500, debitAmount: 1000,
                balanceAmount: 3500, availableAmount: 3100
            },
            {
                accountId: '2222-2222-2222-2222',
                accountNumber: '2345 4567 0980 2342', accountName: 'Super Saver',
                creditAmount: 22500, debitAmount: 1000,
                balanceAmount: 21500, availableAmount: 21500
            },
            {
                accountId: '3333-3333-3333-3333',
                accountNumber: '3456 4567 0980 2342', accountName: 'MasterCard Master',
                creditAmount: 1000, debitAmount: 5000,
                balanceAmount: 5000, availableAmount: 1500
            },
        ]
    }

    retrieveAccountsSummary(): Observable<AccountsSummary> {
        console.log('retrieve accounts');
        return Observable.of(
            {
                accounts: this.intialAccounts(),
                totalCredits: 28000,
                totalDebits: 7000,
                netPosition: 21000,
            } as AccountsSummary
        );

    };
    retrieveAccount(accountID: string): Observable<Account> {
        console.log('retrieve accounts');
        return Observable.of(
            {
                accountId: '1234-1234-1234-1234',
                accountNumber: '2345 4567 0980 2342', accountName: 'Super Saver',
                creditAmount: 22500, debitAmount: 1000,
                balanceAmount: 21500, availableAmount: 21500
            } as Account
        );

    };

}
