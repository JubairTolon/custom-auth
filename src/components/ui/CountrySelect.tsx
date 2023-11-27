/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, TextField, Box } from '@mui/material'
import { CountryType } from '../../models';


type CountrySelectProps = {
    register: any;
    countries: CountryType[];
    errors: any;
}

export default function CountrySelect({ register, countries, errors }: CountrySelectProps) {
    return (
        <>
            <Autocomplete
                size='small'
                id="countrySelect"
                sx={{

                    '& .MuiFormLabel-root': {
                        // fontSize: '.8rem',
                        fontWeight: 500
                    },
                    '& label.Mui-focused': {
                        color: '#1c2437',
                    },
                    '& .MuiOutlinedInput-root': {
                        // fontSize: { xs: 12, md: 14 },
                        // height: { xs: 35, md: 40 },
                        backgroundColor: '#ebebeb',
                        '&.Mui-focused fieldset': {
                            borderColor: '#1c2437',
                            borderWidth: '1px'
                        },
                        '& fieldset span': {
                            paddingRight: '6px',
                        },
                        '&.Mui-focused fieldset span': {
                            paddingRight: '6px',
                        },
                    },
                }}
                options={countries}
                getOptionLabel={(option: any) => option.label}
                renderOption={(props, option) => (
                    <Box
                        component="li"
                        sx={{
                            '& > img': { mr: 2, flexShrink: 0 },
                        }} {...props}>
                        <img
                            // style={{ width: '15px', height: '15px' }}
                            height={15}
                            width={15}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label} ({option.code})
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a country"
                        inputProps={{
                            ...params.inputProps
                        }}
                        {...register('country',
                            {
                                required: {
                                    value: true,
                                    message: 'Country is required',
                                },
                            })}
                    />
                )}
            />
            <Box component={'label'}
                sx={{
                    color: 'indianred',
                    paddingLeft: '14px',
                    marginTop: '2px',
                    fontSize: '12px',
                    fontWeight: 600,
                }}
                htmlFor="countrySelect">
                <Box component={'span'}>{errors.country?.message}</Box>
            </Box>
        </>
    )
}