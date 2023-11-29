/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GiFireZone } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import PhoneInput from '../ui/PhoneInput';


type SignInInputTypes = {
    phoneNumber: string;
}
export default function SignIn() {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInInputTypes>();

    //for only number input
    const formatPhoneNumber = (value: string) => {
        // Remove non-digit characters from the input value
        const cleanedValue = value.replace(/\D/g, '');
        // Format the phone number with dashes
        const formattedValue = cleanedValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        return formattedValue;
    };

    //for handle submit signin data
    const onSubmit: SubmitHandler<SignInInputTypes> = (data) => {
        console.log(data);
        if (data.phoneNumber) {
            navigate('/signup')
        }
    };

    return (
        <Box component={'div'} sx={{ width: { xs: '90%', sm: '60%', md: '30%' } }}>
            <Card sx={{ width: '100%', py: 2, borderRadius: 2 }}>
                <CardContent>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 5,
                            px: { xs: 0, md: 5 },
                            textAlign: 'center'
                        }}>
                        <Typography variant='h1' sx={{ fontSize: 60, color: '#3D30A2' }}>
                            <GiFireZone />
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: 28, color: '#3D30A2', fontWeight: 600, mb: 1 }}>
                            Let’s begin byfinding your info.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: 16, color: '#666666', fontWeight: 500 }}>
                            We can pre-fill some of your info and speed up the enrollment process.
                        </Typography>
                    </Box>
                    <Box component={'form'}
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            alignItems: 'center'
                        }}>
                        <Box component={'div'} sx={{ width: '100%' }}>
                            <PhoneInput
                                control={control}
                                name='phoneNumber'
                                label='Phone Number'
                                type='text'
                                rules={{ required: 'This field is required', minLength: { value: 10, message: 'Minimum length is 10 characters' }, }}
                                errors={errors.phoneNumber}
                                formatPhoneNumber={formatPhoneNumber}
                            />
                        </Box>
                        <Button
                            variant='contained'
                            type='submit'
                            size='large'
                            sx={{
                                bgcolor: '#3D30A2',
                                width: '35%',
                                boxShadow: 'none',
                                '&:hover': {
                                    bgcolor: '#5044AB',
                                    boxShadow: 'none'
                                }
                            }}>
                            Submuit
                        </Button>
                    </Box>
                    <Typography
                        onClick={() => navigate('/')}
                        variant='body2'
                        sx={{
                            color: '#3D30A2', textDecoration: 'underline', fontSize: 16, cursor: 'pointer', transition: '.3s', my: 3, '&:hover': {
                                textDecoration: 'none'
                            }
                        }}>I don't have a mobile phone</Typography>

                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            justifyContent: 'center'
                        }}>
                        <Typography
                            onClick={() => navigate('/')}
                            variant='body2'
                            sx={{
                                color: '#3D30A2', textDecoration: 'underline', fontSize: 12, cursor: 'pointer', transition: '.3s',
                                '&:hover': {
                                    textDecoration: 'none'
                                }
                            }}>Terns and conditions</Typography>
                        <Box component={'div'} sx={{ borderRight: '1px solid gray', height: 20 }}></Box>
                        <Typography
                            onClick={() => navigate('/')}
                            variant='body2'
                            sx={{
                                color: '#3D30A2', textDecoration: 'underline', fontSize: 12, cursor: 'pointer', transition: '.3s', '&:hover': {
                                    textDecoration: 'none'
                                }
                            }}>Privacy Policy</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}