/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, Box } from '@mui/material';

type TextPropsType = {
    type: string;
    register: any
    errors: any;
    label: string;
    fieldID: string;
    placeholder: string;
    size: string;
}

export default function SSNInput({ type, errors, register, label, fieldID, placeholder, size }: TextPropsType) {
    return (
        <Box component={"div"} sx={{ width: '100%' }}>
            <TextField
                required
                variant='outlined'
                fullWidth
                autoComplete="off"
                size={size}
                type={type}
                label={label}
                id={fieldID}
                placeholder={placeholder}
                {...register(fieldID,
                    {
                        required: {
                            value: true,
                            message: `${label} number is required`,
                        },
                        minLength: {
                            value: 9,
                            message: `${label} must be 9 character`,
                        },
                        maxLength: {
                            value: 20,
                            message: `${label} must be under 20 character`,
                        },
                    })}
                sx={{
                    '& .MuiFormLabel-root': {
                        fontWeight: 500,
                    },
                    '& label.Mui-focused': {
                        color: '#1c2437',
                        fontSize: size === 'small' ? 16 : 18
                    },
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: '#ebebeb',
                        '&.Mui-focused fieldset': {
                            borderColor: '#2a3064',
                            borderWidth: '2px'
                        },
                    },
                }} />
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
                {errors[fieldID]?.type === 'minLength' && <Box component={'span'}>{errors[fieldID].message}</Box>}
                {errors[fieldID]?.type === 'maxLength' && <Box component={'span'}>{errors[fieldID].message}</Box>}
                {/* {console.log(errors)} */}
            </Box>
        </Box>
    )
}
