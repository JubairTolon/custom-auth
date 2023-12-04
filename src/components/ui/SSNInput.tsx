/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, IconButton, TextField } from '@mui/material'
import React, { Dispatch } from 'react'
import { BiHide, BiShowAlt } from 'react-icons/bi'
import { Controller } from 'react-hook-form'

type SSNrops = {
    setPassShow: Dispatch<React.SetStateAction<boolean>>;
    passShow: boolean;
    errors: any;
    label: string;
    name: string;
    control: any;
    rules: any;
    formData: any;
}

export default function SSNInput({ passShow, setPassShow, errors, control, name, label, rules, formData }: SSNrops) {
    return (
        <Box component={'div'} sx={{ width: '100%', position: 'relative' }}>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <TextField
                        {...field}
                        onChange={(e) => {
                            // Allow only numeric characters
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            field.onChange(e);
                            formData.SSN = e.target.value;
                        }}
                        placeholder='Enter your 9 degit SSN number'
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
                        label={label}
                        type={!passShow ? 'password' : 'text'}
                        variant="outlined"
                        fullWidth
                        error={!!errors}
                        helperText={errors ? errors.message : ''}
                    />
                )}
            />
            <IconButton
                onClick={() => setPassShow(!passShow)}
                aria-label="delete"
                sx={{
                    position: 'absolute',
                    right: 3,
                    top: 10
                }}>
                {passShow ? <BiShowAlt size={20} /> : <BiHide size={20} />}
            </IconButton>
        </Box>
    )
}