/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';


type TextPropsType = {
    errors: any;
    label: string;
    name: string;
    control: any;
    type: string;
    rules: any;
    place: string;
    setPlace: React.Dispatch<React.SetStateAction<string>>
    formData: any;
    register: any;
}


export default function PlaceInput({ errors, control, name, label, type, rules, place, setPlace, formData, register }: TextPropsType) {

    return (
        <>
            {/* <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => ( */}
            <TextField
                {...register(name, { ...rules })}
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
                value={place}
                label={label}
                type={type}
                variant="outlined"
                fullWidth
                error={!!errors}
                helperText={errors ? errors.message : ''}
                onChange={(event) => {
                    const value = event.target.value;
                    setPlace(value);
                    formData.name = value;
                }}
            />
            {/* )}
            /> */}
        </>
    )
}