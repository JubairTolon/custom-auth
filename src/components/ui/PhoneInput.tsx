/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

type TextPropsType = {
    errors: any;
    label: string;
    name: string;
    rules: any;
    formatPhoneNumber: (event: any) => any;
    control: any;
}


export default function PhoneInput({ errors, name, label, rules, formatPhoneNumber, control }: TextPropsType) {
    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => {
                            const formattedValue = formatPhoneNumber(e.target.value);
                            field.onChange(formattedValue);
                        }}
                        placeholder='(e.g., 123-456-7890)'
                        label={label}
                        variant="outlined"
                        fullWidth
                        error={!!errors}
                        helperText={errors ? errors.message : ''}
                        sx={{
                            '& .MuiFormLabel-root': {
                                fontWeight: 500,
                            },
                            '& label.Mui-focused': {
                                color: '#3d30a2',
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
        </>
    )
}