/// A summary of multiple acounts
export interface AccountsSummary {
    userId: string;
    accounts: AccountDetails[];
    totalCredits: number;
    totalDebits: number;
    netPosition: number;
}

/// A summary of a single account
export interface AccountSummary {
    userId: string;
    account: AccountDetails;
    transactions: TransactionDetails[];
}

export interface AccountDetails {
    accountId: string;
    userId: string;
    accountNumber: string;
    accountName: string;
    creditAmount: number;
    debitAmount: number;
    balanceAmount: number;
    availableAmount: number;
}

export interface TransactionDetails{
    accountId: string;
    userId: string;
    transactionId: string;
    transactionDateTime: string;
    description: string;
    debitAmount: number;
    creditAmount: number;
    status: number;
}

export interface TransactionFilter{
    startDate:Date;
    endDate:Date;
}


// export interface AccountsSummary {
//     accounts: Account[];
//     totalCredits: number;
//     totalDebits: number;
//     netPosition: number;
// }

// export interface Account {
//     accountId: string;
//     userId: string;
//     accountNumber: string;
//     accountName: string;
//     creditAmount: number;
//     debitAmount: number;
//     balanceAmount: number;
//     availableAmount: number;
//    transactions?: Transaction[]
// }

// export interface Transaction{
//     accountId: string;
//     userId: string;
//     transactionId: string;
//     transactionDateTime: string;
//     description: string;
//     debitAmount: number;
//     creditAmount: number;
//     status: number;
// }

// export interface TransactionFilter{
//     startDate:Date;
//     endDate:Date;
// }