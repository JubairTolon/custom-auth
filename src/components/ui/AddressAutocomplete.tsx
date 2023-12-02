/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Box, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

type AddressPropsType = {
    name: string;
    label: string;
    rules: any;
    errors: any;
    formData: any;
    control: any;
}

export default function AddressAutocomplete({ name, label, rules, errors, formData, control }: AddressPropsType) {
    const [suggestions, setSuggestions] = useState([]);


    const handleInputChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        {
            value.length > 2 &&
                fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&format=json&apiKey=${import.meta.env.VITE_GEOAPIFY_TOKEN}`)
                    .then(response => response.json())
                    .then(result => {
                        const newSuggestions = result?.results.map((suggestion: { formatted: any; }) => suggestion.formatted);
                        setSuggestions(newSuggestions);
                    })
                    .catch(error => console.log('error', error));
        }
    };

    return (
        <Box component={'div'} sx={{ width: '100%', position: 'relative' }}>
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                render={({ field }) => (
                    <Autocomplete
                        disablePortal
                        options={suggestions}
                        value={field.value || ''}
                        onChange={(_, value) => field.onChange(value)}
                        renderInput={(params) => (
                            <TextField
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
                                {...params}
                                {...field}
                                value={formData?.[name] || ''}
                                onChange={handleInputChange}
                                label={label}
                                variant="outlined"
                                fullWidth
                                error={!!errors}
                                helperText={errors ? errors.message : ''}
                            />
                        )}
                    />
                )}
            />
        </Box>
    )
}
