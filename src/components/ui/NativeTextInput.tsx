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
export default function NativeTextInput({ type, errors, register, label, fieldID, placeholder, size }: TextPropsType) {
    return (
        <>
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
                                message: `${label} is required`,
                            }
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
                        fontWeight: 600,
                    }}>
                    {errors[fieldID]?.type === 'required' && <Box component={'span'}>{errors[fieldID].message}</Box>}
                </Box>
            </Box>
        </>
    )
}