/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
import { Controller } from 'react-hook-form';



type DatePropsType = {
    errors: any;
    label: string;
    fieldID: string;
    control: any;
}
export default function DateInput({ errors, fieldID, control, label }: DatePropsType) {

    return (
        <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                    name="dateOfBirth"
                    control={control}
                    rules={{ required: 'Date of Birth is required' }}
                    defaultValue={null}
                    render={({ field }) => (
                        <DatePicker
                            {...field}
                            label={label}
                            // inputFormat="MM/dd/yyyy"
                            slotProps={{ textField: { variant: 'outlined' } }}
                            sx={{
                                '& .MuiFormLabel-root': {
                                    fontWeight: 500,
                                },
                                '& label.Mui-focused': {
                                    color: '#1c2437',
                                    // fontSize: size === 'small' ? 16 : 18
                                },
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ebebeb',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#2a3064',
                                        borderWidth: '2px'
                                    },
                                },
                            }} />
                    )}
                />
                <Box component={'label'}
                    sx={{
                        color: 'indianred',
                        paddingLeft: '14px',
                        marginTop: '2px',
                        fontSize: '12px',
                        fontWeight: 500,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                    {errors[fieldID]?.type === 'required' && <Box component={'span'}>{errors[fieldID].message}</Box>}
                </Box>
            </LocalizationProvider>
        </Box>
    )
}
