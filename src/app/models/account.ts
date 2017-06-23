import { Amount } from './types';
/// A summary of multiple acounts
export interface AccountsSummary {
    accounts: Account[];
    currencyCode: string;
    totalCredits: number;
    totalDebits: number;
    netPosition: number;
}


export interface Account {
    accountId: string;
    accountNumber: string;
    accountName: string;
    currencyCode: string;

    creditAmount: number;
    debitAmount: number;
    balanceAmount: number;
    availableAmount: number;
}


export interface Transaction{
    transactionId: string;
    accountId: string;
    userId: string;
    transactionDate: Date;
    transactionDateTime: Date;
    reference: string;
    description: string;
    debitAmount: Amount;
    creditAmount: Amount;
    status: TransactionStatus;
}

export enum TransactionStatus {
    Processed,
    Pending,
}
export interface TransactionFilter{
    accountId: string;
    startDate:Date;
    endDate:Date;
}





