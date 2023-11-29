export type CountryType = {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}

export type SignUpInputTypes = {
    SSN: string;
    dateofBirth: string;
    sendSMS: boolean;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    termsForcurAddress: boolean;
    prevAddress: string;
    prevCity: string;
    prevState: string;
    prevZip: string;
    termsAndConditions: boolean;

    // email: string;
    // confirmEmail: string;
    // phone: string;
    // password: string;
    // address: string;
    // apartment: string;
    // city: string;
    // country: string;
    // checkTerm: string;
}