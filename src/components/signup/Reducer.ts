/* eslint-disable @typescript-eslint/no-explicit-any */
export const initValue = {
    SSN: '',
    dateofBirth: '',
    sendSMS: false,
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    termscurrAddress: false,
    prevAddress: '',
    prevCity: '',
    prevState: '',
    prevZip: '',
    termsAndConditions: false,
}

export const reducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SSN':
            return {
                ...state, SSN: action.payload
            };
        case 'dateofBirth':
            return {
                ...state, dateofBirth: action.payload
            };
        case 'sendSMS':
            return {
                ...state, sendSMS: action.payload
            };
        case 'firstName':
            return {
                ...state, firstName: action.payload
            };
        case 'lastName':
            return {
                ...state, lastName: action.payload
            };
        case 'address':
            return {
                ...state, address: action.payload
            };
        case 'city':
            return {
                ...state, city: action.payload
            };
        case 'state':
            return {
                ...state, state: action.payload
            };
        case 'zip':
            return {
                ...state, zip: action.payload
            };
        case 'termscurrAddress':
            return {
                ...state, termscurrAddress: action.payload
            };
        case 'prevAddress':
            return {
                ...state, prevAddress: action.payload
            };
        case 'prevCity':
            return {
                ...state, prevCity: action.payload
            };
        case 'prevState':
            return {
                ...state, prevState: action.payload
            };
        case 'prevZip':
            return {
                ...state, prevZip: action.payload
            };
        case 'termsAndConditions':
            return {
                ...state, termsAndConditions: action.payload
            };

        default:
            break;
    }
}