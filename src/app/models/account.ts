import { Amount } from './types';
/// A summary of multiple acounts
export interface AccountsSummary {
    accounts: Account[];
    totalCredits: Amount;
    totalDebits: Amount;
    netPosition: Amount;
}


export interface Account {
    accountId: string;
    accountNumber: string;
    accountName: string;
    creditAmount: Amount;
    debitAmount: Amount;
    balanceAmount: Amount;
    availableAmount: Amount;
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





