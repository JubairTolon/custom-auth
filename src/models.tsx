export type CountryType = {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}

export type SignUpInputTypes = {
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    phone: string;
    password: string;
    address: string;
    apartment: string;
    city: string;
    country: string;
    checkTerm: string;
}