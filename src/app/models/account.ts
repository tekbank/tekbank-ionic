import { Amount } from './types';
/// A summary of multiple acounts
export interface AccountsSummary {
    accounts: Account[];
    totalCredits: number;
    totalDebits: number;
    netPosition: number;
}


export interface Account {
    accountId: string;
    accountNumber: string;
    accountName: string;
    creditAmount: number;
    debitAmount: number;
    balanceAmount: number;
    availableAmount: number;
}


export interface Transaction{
    transactionId: string;
    accountId: string;
    userId: string;
    transactionDateTime: string;
    reference: string;
    description: string;
    debitAmount: Amount;
    creditAmount: Amount;
    status: TransactionStatus;
}

enum TransactionStatus {
    Processed,
    Pending,
}
export interface TransactionFilter{
    startDate:Date;
    endDate:Date;
}





