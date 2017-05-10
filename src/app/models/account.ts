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





