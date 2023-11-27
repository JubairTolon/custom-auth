/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, Box } from '@mui/material';

type EmailPropsType = {
    register: any;
    errors: any;
    label: string;
    fieldID: string;
}

export default function EmailInput({ register, errors, label, fieldID }: EmailPropsType) {
    return (
        <>
            <Box component={"div"} sx={{ width: '100%' }}>
                <TextField
                    fullWidth
                    autoComplete="off"
                    size='small'
                    type='email'
                    label={label}
                    id={fieldID}
                    placeholder='your email'
                    {...register('email',
                        {
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Invalid email input'
                            }
                        })}
                    sx={{
                        '& .MuiFormLabel-root': {
                            // fontSize: { xs: '1rem', md: '1rem' },
                            fontWeight: 500,
                        },
                        '& label.Mui-focused': {
                            color: '#1c2437',
                        },
                        '& .MuiOutlinedInput-root': {
                            // fontSize: { xs: 12, md: 14 },
                            backgroundColor: '#ebebeb',
                            // height: { xs: 35, md: 40 },
                            '&.Mui-focused fieldset': {
                                borderColor: '#2a3064',
                                borderWidth: '2px'
                            },
                            '& fieldset span': {
                                paddingRight: '6px',
                            },
                            '&.Mui-focused fieldset span': {
                                paddingRight: '6px',
                            },
                        },
                    }}
                // onChange={e => console.log(e.target.value)}
                />

                <Box
                    component={'label'}
                    htmlFor="email"
                    sx={{
                        color: 'indianred',
                        paddingLeft: '14px',
                        marginTop: '2px',
                        fontSize: '12px',
                        fontWeight: 600,
                    }}>
                    <Box component={'span'}>{errors.email?.message}</Box>
                    {/* {errors[fieldID]?.type === 'required' && <span>{errors[fieldID].message}</span>}
                    {errors[fieldID]?.type === 'pattern' && <span>{errors[fieldID].message}</span>}
                    {emailError && fieldID === 'confirmEmail' && <span>{emailError}</span>} */}
                </Box>
            </Box>
        </>
    )
}