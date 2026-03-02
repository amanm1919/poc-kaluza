export interface AccountData {
    balance: number;
    accountNumber: string;
    planName: string;
}

export interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: number;
}