import { AccountsSummary, TransactionStatus, TransactionFilter, Transaction } from './../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

    initialTransactions(): Transaction[] {
        return [
            {
                userId: '', transactionId: 't1234',
                accountId: '1111-1111-1111-1111',
                transactionDate: new Date('2017-01-04'), transactionDateTime:new Date('2017-01-04'),
                reference: 'tref1', description: 'QANTAS Airways Mascot',
                debitAmount: { amount: 1200, currency: 'AUD' },
                creditAmount: null,
                status: TransactionStatus.Processed
            },
            {
                userId: '', transactionId: 't1234',
                accountId: '1111-1111-1111-1111',
                transactionDate: new Date('2017-01-05'), transactionDateTime:new Date('2017-01-05'),
                reference: 'tref2', description: 'Telstra Direct Debit',
                debitAmount: { amount: 145.55, currency: 'AUD' },
                creditAmount: null,
                status: TransactionStatus.Processed
            },
            {
                userId: '', transactionId: 't1234',
                accountId: '1111-1111-1111-1111',
                transactionDate: new Date('2017-01-06'), transactionDateTime:new Date('2017-01-06'),
                reference: 'tref3', description: 'Sofitel Gold Coast',
                debitAmount: { amount: 329, currency: 'AUD' },
                creditAmount: null,
                status: TransactionStatus.Processed
            },
            {
                userId: '', transactionId: 't1234',
                accountId: '1111-1111-1111-1111',
                transactionDate: new Date('2017-01-07'), transactionDateTime:new Date('2017-01-07'),
                reference: 'tref4', description: 'Foxtel Broadband',
                debitAmount: { amount: 85, currency: 'AUD' },
                creditAmount: null,
                status: TransactionStatus.Pending
            },
        ]
    }

    intialAccounts() {
        return [
            {
                accountId: '1111-1111-1111-1111',
                accountNumber: '1234 4567 0980 2342', accountName: 'Basic Account',
                creditAmount: { amount: 4500, currency: 'AUD' },
                debitAmount: { amount: 1000, currency: 'AUD' },
                balanceAmount: { amount: 3500, currency: 'AUD' },
                availableAmount: { amount: 3100, currency: 'AUD' }
            },
            {
                accountId: '2222-2222-2222-2222',
                accountNumber: '2345 4567 0980 2342', accountName: 'Super Saver (GBP)',
                creditAmount: { amount: 22500, currency: 'GBP' },
                debitAmount: { amount: 1000, currency: 'GBP' },
                balanceAmount: { amount: 21500, currency: 'GBP' },
                availableAmount: { amount: 21500, currency: 'GBP' }
            },
            {
                accountId: '3333-3333-3333-3333',
                accountNumber: '3456 4567 0980 2342', accountName: 'MasterCard Master',
                creditAmount: { amount: 1000, currency: 'AUD' },
                debitAmount: { amount: 5000, currency: 'AUD' },
                balanceAmount: { amount: 5000, currency: 'AUD' },
                availableAmount: { amount: 1500, currency: 'AUD' }
            },
        ]
    }

    retrieveAccountsSummary(): Observable<AccountsSummary> {
        console.log('retrieve accounts');
        return Observable.of(
            {
                accounts: this.intialAccounts(),
                totalCredits: { amount: 28000, currency: 'AUD' },
                totalDebits: { amount: 7000, currency: 'AUD' },
                netPosition: { amount: 21000, currency: 'AUD' },
            } as AccountsSummary
        );
    };

    retrieveAccount(accountID: string): Observable<Account> {
        console.log('retrieve accounts');
        return Observable.of(
            {
                accountId: '1234-1234-1234-1234',
                accountNumber: '2345 4567 0980 2342', accountName: 'Super Saver',
                creditAmount: { amount: 4500, currency: 'AUD' },
                debitAmount: { amount: 1000, currency: 'AUD' },
                balanceAmount: { amount: 3500, currency: 'AUD' },
                availableAmount: { amount: 3100, currency: 'AUD' }
            } as Account
        );
    };
    retrieveTransactions(filter: TransactionFilter): Observable<Transaction[]> {
        console.log('retrieve transactions');
        return Observable.of(
            this.initialTransactions()
        );
    };

}
