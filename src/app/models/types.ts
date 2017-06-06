
export interface Amount {
    amount: number;
    currency: string;
}
export interface PhoneNumber {
    countryCode: string;
    number: string;
}
export interface Address {
    line1: string;
    line2:string;
    city:string;
    state: string;
    postalCode:string;
    countryCode: string;
}
export interface Currency {
    code: string;
    name: string;
}