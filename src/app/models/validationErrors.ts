export interface ValidationErrors {
    errors: any;
    formattedErrors: FormattedError[];
    isValid: boolean;
    key?: string;
}

export interface FormattedError {
    key: string;
    errors: string[];
}