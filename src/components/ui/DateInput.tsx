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
    name: string;
    control: any;
    type: string;
    rules: any;
    formData: any;
}
export default function DateInput({ errors, control, label, name, rules, formData }: DatePropsType) {

    return (
        <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field }) => (
                        <DatePicker
                            {...field}
                            onChange={(value) => {
                                field.onChange(value),
                                    formData.dateofBirth = value
                            }}
                            label={label}
                            format="dd/MM/yyyy"
                            slotProps={{ textField: { variant: 'outlined', error: Boolean(errors), helperText: `${errors?.message || ''}` } }}
                            sx={{
                                '& .MuiFormLabel-root': {
                                    fontWeight: 500,
                                },
                                '& label.Mui-focused': {
                                    color: '#3d30a2',
                                    // fontSize: size === 'small' ? 16 : 18
                                },
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#f8f8f8',
                                    '& fieldset': {
                                        transition: '.3s',
                                        borderWidth: "2px",
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'gray',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#3D30A2',
                                        borderWidth: '2px'
                                    },
                                },
                            }}
                        />
                    )}
                />
            </LocalizationProvider>
        </Box>
    )
}
