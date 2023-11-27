import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GiFireZone } from "react-icons/gi";
import NativeTextInput from '../ui/NativeTextInput';
import { useNavigate } from "react-router-dom";




type SignInInputTypes = {
    phone: string;
}
export default function SignIn() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInInputTypes>();

    const onSubmit: SubmitHandler<SignInInputTypes> = (data) => {
        console.log(data);
        if (data.phone) {
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
                            <NativeTextInput
                                type={'text'}
                                register={register}
                                errors={errors}
                                label={'Phone Number'}
                                fieldID={'phone'}
                                placeholder={'your phone'}
                                size='large'
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
                        <Typography
                            onClick={() => navigate('/')}
                            variant='body2'
                            sx={{
                                color: '#3D30A2', textDecoration: 'underline', fontSize: 16, cursor: 'pointer', transition: '.3s', mb: 2, '&:hover': {
                                    textDecoration: 'none'
                                }
                            }}>I don't have a mobile phone</Typography>

                        <Box component={'div'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
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
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}