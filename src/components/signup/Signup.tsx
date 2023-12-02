/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Step, StepLabel, Stepper, Typography, Card, CardContent } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUpInputTypes } from '../../models';
import NativeTextInput from '../ui/NativeTextInput'; import OrderSummary from '../OrderSummary';
import DateInput from '../ui/DateInput';
import SSNInput from '../ui/SSNInput';
import AddressAutocomplete from '../ui/AddressAutocomplete';


const steps = ['Identity', 'Personal Info', 'Billing'];

export default function SignUp() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formPage, setFormPage] = useState<string>('identity');
    const [sendSMS, setSendSMS] = useState<boolean>(false);
    const [currAddress, setCurrAddress] = useState<boolean>(false);
    const [termsAndCon, setTermsAndCon] = useState<boolean>(false);
    const [passShow, setPassShow] = useState<boolean>(false);
    const [formData, setFormData] = useState({})

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpInputTypes>({
        defaultValues: {
            SSN: '',
            dateofBirth: '',
            sendSMS: false,
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            termscurrAddress: false,
            prevAddress: '',
            prevCity: '',
            prevState: '',
            prevZip: '',
            termsAndConditions: false,
        }
    });

    const onSubmit: SubmitHandler<SignUpInputTypes> = (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        if (activeStep === 0) {
            setFormPage('identity')
        }
        else if (activeStep === 1) {
            setFormPage('personalInfo')
        }
        else {
            setFormPage('billing')
        }
    }, [activeStep])

    const handleNext = (data: any) => {
        setFormData({
            SSN: data.SSN,
            dateofBirth: data.dateofBirth,
            sendSMS: data.sendSMS,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            termscurrAddress: data.termsForcurAddress,
            prevAddress: data.prevAddress,
            prevCity: data.prevCity,
            prevState: data.prevState,
            prevZip: data.prevZip,
            termsAndConditions: data.myCheckbox,
        })
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(data)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Box component={'div'}
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                px: { xs: 2, sm: 2, md: 4, lg: 10 },
                py: { xs: 0, md: 2 },
                gap: { xs: 2, lg: 5 }
            }}>
            <Card
                sx={{
                    width: { xs: '100%', md: '70%' },
                    borderRadius: 2
                }}>
                <CardContent>
                    <Stepper
                        sx={{
                            width: { xs: '100%', md: '90%' },
                            mx: 'auto',
                            '& .MuiStepConnector-root span': {
                                borderColor: '#00052D',
                            },
                            '& .MuiStepIcon-root': {
                                fontSize: { xs: 14, sm: 20, md: 18, lg: 24 },
                            },
                            my: 5
                        }}
                        activeStep={activeStep}>
                        {steps.map((label) => {
                            const stepProps: { completed?: boolean } = {};
                            const labelProps: {
                                optional?: React.ReactNode;
                            } = {};
                            return (
                                <Step
                                    sx={{
                                        '& .MuiStepLabel-root .Mui-active': {
                                            color: '#00052D', // circle color (ACTIVE)
                                        },
                                        '& .MuiStepLabel-iconContainer .Mui-completed': {
                                            color: '#00052D', // circle color (ACTIVE)
                                        },

                                    }}
                                    key={label} {...stepProps}>
                                    <StepLabel
                                        sx={{
                                            '& .MuiStepLabel-labelContainer span': {
                                                color: '#00052D',
                                                fontSize: { xs: 10, sm: 14, md: 16, lg: 16, xl: 16 }
                                            },
                                            '& .MuiStepLabel-labelContainer .Mui-active': {
                                                color: '#00052D',
                                            },
                                        }}
                                        {...labelProps}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <Box component={'form'}
                        sx={{
                            width: { xs: '100%', md: '90%' },
                            mx: 'auto'
                        }}
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}>
                        {formPage === 'identity' &&
                            <>
                                <Typography variant='h5' sx={{ fontSize: 16, textTransform: 'capitalize', mt: { xs: 4, md: 10 }, mb: 1, fontWeight: 600, textAlign: 'left' }}>Identity</Typography>
                                <Typography variant='body2' sx={{ fontSize: { xs: 12, md: 14 }, textTransform: 'capitalize', mb: { xs: 0, md: 2 }, textAlign: 'left' }}>Your social security number and DOB are used to confirm your identity. This info will be securely transmitted to the credit reporting agencies.</Typography>
                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        gap: { xs: 2, md: 5 },
                                        mt: { xs: 2, md: 5 },
                                        mb: 2,
                                    }}>

                                    <SSNInput
                                        setPassShow={setPassShow}
                                        passShow={passShow}
                                        control={control}
                                        name='SSN'
                                        label='SSN code'
                                        rules={{ required: 'This field is required', minLength: { value: 9, message: 'Minimum length is 9 characters' }, }}
                                        errors={errors.SSN}
                                    />
                                    <DateInput
                                        control={control}
                                        name='dateofBirth'
                                        label='Date of Birth'
                                        rules={{ required: 'This field is required' }}
                                        errors={errors.dateofBirth}
                                        type={''} />
                                </Box>
                                <FormControlLabel
                                    sx={{ width: '100%', display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' } }}
                                    control={<Checkbox
                                        checked={sendSMS}
                                        {...register('sendSMS')}
                                        onChange={(e) => setSendSMS(e.target.checked)}
                                        sx={{
                                            color: 'gray',
                                            '&.Mui-checked': {
                                                color: '#3D30A2',
                                            },
                                        }} />}

                                    label={<Typography sx={{ fontSize: { xs: 12, md: 14 }, textAlign: 'start' }}>Send me identity and credit monitoring alerts via SMS, if available.</Typography>}
                                />
                            </>
                        }
                        {formPage === 'personalInfo' &&
                            <Box component={'div'}>
                                <Typography variant='h5' sx={{ color: '##27282A', fontSize: 16, fontWeight: 600, textTransform: 'capitalize', mt: 5, mb: 2, textAlign: 'left' }}>Account Information:</Typography>
                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        gap: { xs: 2, md: 5 },
                                        mt: 2,
                                        mb: 4,
                                    }}>
                                    <NativeTextInput
                                        control={control}
                                        name='lastName'
                                        label='Last Name'
                                        type='text'
                                        rules={{ required: 'This field is required', }}
                                        errors={errors.lastName}
                                    />
                                    <NativeTextInput
                                        control={control}
                                        name='firstName'
                                        label='First Name'
                                        type='text'
                                        rules={{ required: 'This field is required', }}
                                        errors={errors.firstName}
                                    />
                                </Box>
                                <Typography variant='h5' sx={{ color: '#27282A', fontSize: 16, fontWeight: 600, textTransform: 'capitalize', mt: 2, mb: 2, textAlign: 'left' }}>Address:</Typography>
                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        gap: { xs: 2, md: 5 },
                                        mt: 2,
                                        mb: 2,
                                    }}>
                                    <AddressAutocomplete
                                        formData={formData}
                                        control={control}
                                        name='address'
                                        label='Address'
                                        rules={{ required: 'This field is required', }}
                                        errors={errors.address}
                                    />
                                    <AddressAutocomplete
                                        formData={formData}
                                        control={control}
                                        name='city'
                                        label='City'
                                        rules={{ required: 'This field is required', }}
                                        errors={errors.city}
                                    />
                                </Box>
                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        gap: { xs: 2, md: 5 },
                                        mt: { xs: 2, md: 5 },
                                        mb: 2,
                                    }}>
                                    <AddressAutocomplete
                                        formData={formData}
                                        control={control}
                                        name='state'
                                        label='State/region'
                                        rules={{ required: 'This field is required', }}
                                        errors={errors.state}
                                    />
                                    <NativeTextInput
                                        control={control}
                                        name='zip'
                                        label='Zip Code'
                                        type='text'
                                        rules={{ required: 'This field is required', pattern: { value: /^-?[0-9]*$/, message: 'Characters must be number 0-9' } }}
                                        errors={errors.zip}
                                    />
                                </Box>
                                <FormControlLabel
                                    sx={{ width: '100%', mt: 4 }}
                                    control={
                                        <Checkbox
                                            checked={currAddress}
                                            {...register('termscurrAddress')}
                                            onChange={(e) => setCurrAddress(e.target.checked)}
                                            sx={{
                                                color: 'gray',
                                                '&.Mui-checked': {
                                                    color: '#3D30A2',
                                                },
                                            }}
                                        />}
                                    label={<Typography sx={{ fontSize: { xs: 12, md: 14, textAlign: 'start' } }}>I have been at my current address for six months or more.</Typography>}
                                />

                                {!currAddress &&
                                    <>
                                        <Typography variant='h5' sx={{ color: '#27282A', fontSize: 16, fontWeight: 600, textTransform: 'capitalize', mt: 4, mb: 2, textAlign: 'left' }}>Previous Address:</Typography><Box component={'div'}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: { xs: 'column', md: 'row' },
                                                gap: { xs: 2, md: 5 },
                                                mt: 2,
                                                mb: 2,
                                            }}>
                                            <AddressAutocomplete
                                                formData={formData}
                                                control={control}
                                                name='prevAddress'
                                                label='Address'
                                                rules={{ required: 'This field is required', }}
                                                errors={errors.address}
                                            />
                                            <AddressAutocomplete
                                                formData={formData}
                                                control={control}
                                                name='prevCity'
                                                label='City'
                                                rules={{ required: 'This field is required', }}
                                                errors={errors.address}
                                            />
                                        </Box>
                                        <Box component={'div'}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: { xs: 'column', md: 'row' },
                                                gap: { xs: 2, md: 5 },
                                                mt: { xs: 2, md: 5 },
                                                mb: 2,
                                            }}>
                                            <AddressAutocomplete
                                                formData={formData}
                                                control={control}
                                                name='prevState'
                                                label='State/region'
                                                rules={{ required: 'This field is required', }}
                                                errors={errors.address}
                                            />
                                            <NativeTextInput
                                                control={control}
                                                name='prevZip'
                                                label='Zip Code'
                                                type='text'
                                                rules={{ required: 'This field is required', pattern: { value: /^-?[0-9]*$/, message: 'Characters must be number 0-9' } }}
                                                errors={errors.prevZip} />
                                        </Box>
                                    </>}

                                <FormControlLabel
                                    sx={{ width: '100%', my: 4, display: 'flex', alignItems: 'center', textAlign: 'justify' }}
                                    control={
                                        <Checkbox
                                            checked={termsAndCon}
                                            {...register('termsAndConditions')}
                                            onChange={(e) => setTermsAndCon(e.target.checked)}
                                            sx={{
                                                color: 'gray',
                                                '&.Mui-checked': {
                                                    color: '#3D30A2',
                                                },
                                            }}
                                        />}
                                    label={<Typography sx={{ fontSize: { xs: 12, md: 14, textAlign: 'start' } }}>By checking this accept the terms and conditions.</Typography>}
                                />

                                {errors.termsAndConditions && (
                                    <Typography sx={{ color: 'red', fontSize: 12 }}>{errors.termsAndConditions.message}</Typography>
                                )}

                            </Box>}
                        {formPage === 'billing' &&
                            <Box component={'div'}
                                sx={{
                                    height: '35vh',
                                    width: '100%',
                                    backgroundColor: '#3D30A2',
                                    borderRadius: 2
                                }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: 'none', borderRadius: '6px' }}
                                    src="https://www.google.com/" title="Google"></iframe>
                            </Box>
                        }
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '80%', md: '80%', lg: '80%', xl: '100%' }, display: 'flex', flexDirection: 'row', mx: 'auto', mt: 4
                            }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant='contained'
                                sx={{
                                    bgcolor: `${activeStep > 0 ? '#1c2437' : 'gray'}`,
                                    color: 'whiteSmoke',
                                    whiteSpace: 'nowrap',
                                    textTransform: 'capitalize',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        bgcolor: '#1c2437',
                                        boxShadow: 'none',
                                    }
                                }}>
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {activeStep < 2 && <Button
                                onClick={handleSubmit(handleNext)}
                                variant='contained'
                                sx={{
                                    bgcolor: '#1c2437',
                                    color: 'whiteSmoke',
                                    whiteSpace: 'nowrap',
                                    textTransform: 'capitalize',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        bgcolor: '#1c2437',
                                        boxShadow: 'none',
                                    }
                                }}>
                                Next
                            </Button>}
                            {activeStep === 2 &&
                                <Button
                                    type='submit'
                                    sx={{
                                        bgcolor: '#3D30A2',
                                        color: 'whiteSmoke',
                                        whiteSpace: 'nowrap',
                                        textTransform: 'capitalize',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            bgcolor: '#3D30A2',
                                            boxShadow: 'none',
                                        }
                                    }}>
                                    Sign up
                                </Button>
                            }
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <OrderSummary activeState={formPage} />
        </Box>
    )
}