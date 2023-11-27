/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, Box } from '@mui/material'
import React, { Dispatch } from 'react'
import { BiHide, BiShowAlt } from 'react-icons/bi'

type PasswordProps = {
    register: any;
    setPassShow: Dispatch<React.SetStateAction<boolean>>;
    passShow: boolean;
    errors: any;

}

export default function PasswordInput({ passShow, setPassShow, register, errors }: PasswordProps) {
    return (
        <>
            <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%' }}>
                <TextField
                    required
                    fullWidth
                    autoComplete="off"
                    label="Password"
                    size='small'
                    id='password'
                    type={!passShow ? 'password' : 'text'}
                    placeholder='your password'
                    sx={{
                        '& .MuiFormLabel-root': {
                            // fontSize: { xs: '.7rem', md: '.8rem' },
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
                    {...register("password",
                        {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, message: 'Pattern follow "Abcd123@"'
                            }
                        })}
                />
                <Box component={'span'}
                    sx={{ position: 'absolute', right: 0, bottom: 5, mr: 1 }}
                    onClick={() => setPassShow(!passShow)}>
                    {passShow ? <BiShowAlt size={16} /> : <BiHide size={16} />}
                </Box>
            </Box>
            <Box component={'label'} htmlFor="password">
                {errors.password?.type === 'required' && <Box component={'span'}>{errors.password.message}</Box>}
                {errors.password?.type === 'pattern' && <Box component={'span'}>{errors.password.message}</Box>}
            </Box>
        </>
    )
}