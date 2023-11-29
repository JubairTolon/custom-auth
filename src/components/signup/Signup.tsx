/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Step, StepLabel, Stepper, Typography, Card, CardContent } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { SignUpInputTypes } from '../../models';
import NativeTextInput from '../ui/NativeTextInput'; import OrderSummary from '../ui/OrderSummary';
import DateInput from '../ui/DateInput';


const steps = ['Identity', 'Personal Info', 'Billing'];

export default function SignUp() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formPage, setFormPage] = useState<string>('identity');
    const [currAddress, setCurrAddress] = useState<boolean>(false);


    const {
        control,
        register,
        handleSubmit,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { errors },
    } = useForm<SignUpInputTypes>();

    const onSubmit: SubmitHandler<SignUpInputTypes> = (data: any) => console.log(data);

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
        console.log(data)
        // if (data.email !== data.confirmEmail) {
        //     return setEmailError("Email didn't match")
        // }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box component={'div'}
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                px: 10,
                py: 2,
                gap: 5
            }}>
            <Card
                sx={{
                    width: '70%',
                    borderRadius: 2
                }}>
                <CardContent>
                    <Stepper
                        sx={{
                            width: '90%',
                            mx: 'auto',
                            '& .MuiStepConnector-root span': {
                                borderColor: '#00052D',
                            },
                            '& .MuiStepIcon-root': {
                                fontSize: { xs: 14, sm: 14, md: 18, lg: 24 },
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
                                                fontSize: { xs: '10px', sm: '12px', md: '16px', lg: '16px', xl: '16px' }
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
                            width: '90%',
                            mx: 'auto'
                        }}
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}>
                        {formPage === 'identity' &&
                            <>
                                <Typography variant='h5' sx={{ fontSize: 16, textTransform: 'capitalize', mt: 10, mb: 1, fontWeight: 600, textAlign: 'left' }}>Identity</Typography>
                                <Typography variant='body2' sx={{ fontSize: 14, textTransform: 'capitalize', mb: 2, textAlign: 'left' }}>Your social security number and DOB are used to confirm your identity. This info will be securely transmitted to the credit reporting agencies.</Typography>
                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        gap: 5,
                                        mt: 5,
                                        mb: 2,
                                    }}>
                                    <NativeTextInput
                                        control={control}
                                        name='SSN'
                                        label='SSN Number'
                                        type='text'
                                        rules={{ required: 'This field is required', pattern: { value: /^-?[0-9]*$/, message: 'Characters must be number 0-9' } }}
                                        errors={errors.SSN} />
                                    <DateInput
                                        control={control}
                                        name='dateofBirth'
                                        label='Date of Birth'
                                        rules={{ required: 'This field is required' }}
                                        errors={errors.dateofBirth}
                                        type={''} />
                                </Box>
                                <FormControlLabel
                                    sx={{ width: '100%' }}
                                    control={<Checkbox
                                        {...register('sendSMS')}
                                        sx={{
                                            color: 'gray',
                                            '&.Mui-checked': {
                                                color: '#3D30A2',
                                            },
                                        }} />}
                                    label="Send me identity and credit monitoring alerts via SMS, if available."
                                />
                            </>
                        }
                        {formPage === 'personalInfo' &&
                            <Box component={'div'}>
                                <Typography variant='h5' sx={{ color: '##27282A', fontSize: 16, fontWeight: 600, textTransform: 'capitalize', mt: 5, mb: 2, textAlign: 'left' }}>Account Information:</Typography>
                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        gap: 5,
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
                                <Typography variant='h5' sx={{ color: '##27282A', fontSize: 16, fontWeight: 600, textTransform: 'capitalize', mt: 2, mb: 2, textAlign: 'left' }}>Address:</Typography>
                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        gap: 5,
                                    }}>
                                    <NativeTextInput
                                        control={control}
                                        name='address'
                                        label='Address'
                                        type='text'
                                        rules={{ required: 'This field is required', }}
                                        errors={errors.address}
                                    />
                                    <NativeTextInput
                                        control={control}
                                        name='city'
                                        label='City'
                                        type='text'
                                        rules={{ required: 'This field is required', }}
                                        errors={errors.city}
                                    />
                                </Box>
                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        gap: 5,
                                        mt: 2
                                    }}>
                                    <NativeTextInput
                                        control={control}
                                        name='state'
                                        label='State'
                                        type='text'
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
                                            {...register('termsForcurAddress')}
                                            // value={checkValue}
                                            onChange={(e) => setCurrAddress(e.target.checked)}
                                            sx={{
                                                color: 'gray',
                                                '&.Mui-checked': {
                                                    color: '#3D30A2',
                                                },
                                            }}
                                        />}
                                    label="I have been at my current address for six months or more."
                                />

                                {!currAddress &&
                                    <>
                                        <Typography variant='h5' sx={{ color: '##27282A', fontSize: 16, fontWeight: 600, textTransform: 'capitalize', mt: 4, mb: 2, textAlign: 'left' }}>Previous Address:</Typography><Box component={'div'}
                                            sx={{
                                                display: 'flex',
                                                gap: 5,
                                            }}>
                                            <NativeTextInput
                                                control={control}
                                                name='prevAddress'
                                                label='Address'
                                                type='text'
                                                rules={{ required: 'This field is required', }}
                                                errors={errors.prevAddress} />
                                            <NativeTextInput
                                                control={control}
                                                name='prevCity'
                                                label='City'
                                                type='text'
                                                rules={{ required: 'This field is required', }}
                                                errors={errors.prevCity} />
                                        </Box><Box component={'div'}
                                            sx={{
                                                display: 'flex',
                                                gap: 5,
                                                mt: 2
                                            }}>
                                            <NativeTextInput
                                                control={control}
                                                name='prevState'
                                                label='State'
                                                type='text'
                                                rules={{ required: 'This field is required', }}
                                                errors={errors.prevState} />
                                            <NativeTextInput
                                                control={control}
                                                name='prevZip'
                                                label='Zip Code'
                                                type='text'
                                                rules={{ required: 'This field is required', pattern: { value: /^-?[0-9]*$/, message: 'Characters must be number 0-9' } }}
                                                errors={errors.prevZip} />
                                        </Box>
                                    </>}
                                <Controller
                                    name="termsAndConditions"
                                    control={control}
                                    rules={{ required: 'Please accept the terms and conditions.' }}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            sx={{ width: '100%', my: 4, display: 'flex', alignItems: 'center', textAlign: 'justify' }}
                                            control={<Checkbox
                                                {...field}
                                                sx={{
                                                    color: 'gray',
                                                    '&.Mui-checked': {
                                                        color: '#3D30A2',
                                                    },
                                                }}
                                            />}
                                            label="By checking this accept the terms and conditions."
                                        />
                                    )}
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
                                    frame-Border="0"
                                    allowFullScreen
                                    src="www.google.com" title="W3Schools Free Online Web Tutorials"></iframe>
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