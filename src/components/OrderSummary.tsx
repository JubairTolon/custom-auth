import { Box, Divider, Chip, Typography, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { GiFireZone } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";

type OrderSummaryProps = {
    activeState: string;
}


export default function OrderSummary({ activeState }: OrderSummaryProps) {

    return (
        <>
            <Card
                sx={{
                    width: { xs: '100%', md: '30%' },
                    borderRadius: 2
                }}>
                <CardContent>
                    <Typography variant='h1' sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: 600, color: '#272829', textAlign: 'start' }}>Order Summary</Typography>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mt: 2,
                            mb: { xs: 2, md: 4 },
                            gap: { xs: 2, md: 4 }
                        }}>

                        <Box component={'div'}
                            sx={{
                                width: '60%',
                                textAlign: 'start',
                            }}>
                            <Typography variant='h5' sx={{ display: 'flex', fontSize: { xs: 14, md: 16 }, fontWeight: 500, color: '#3D30A2', textAlign: 'start', alignItems: 'center', gap: 1, mb: { xs: 1, md: 4 } }}>Credit Essentials
                                <Chip size='small' sx={{ borderRadius: 1, backgroundColor: '#C7C3E3', color: '#272829', fontSize: 12 }} label="trial" variant="filled" />
                            </Typography>
                            {(activeState === 'identity' || activeState === 'personalInfo') &&
                                <>
                                    <Box component={'span'} sx={{ color: '#3D30A2', fontSize: { xs: 40, md: 60 }, }}><GiFireZone /></Box>
                                    <Typography
                                        variant='h5'
                                        sx={{ fontSize: 16, fontWeight: 600, color: '#272829', }}>
                                        Features
                                    </Typography>
                                    <Typography
                                        variant='h5'
                                        sx={{ display: 'flex', fontSize: 14, fontWeight: 400, color: 'gray', textAlign: 'start', alignItems: 'center', gap: 1, mt: 1, mb: 2 }}>
                                        3 Bureau Credit Report & Scores ScoreCasterIQ Enhanced Credit Monitoring
                                    </Typography>
                                    <Link to='/' style={{ textDecoration: 'underline', color: '#3D30A2', fontSize: 14, fontWeight: 600 }}>More</Link>
                                </>}
                        </Box>
                        <Box component={'div'}
                            sx={{
                                width: '40%',
                                textAlign: 'start'
                            }}>
                            <Typography
                                variant='h5'
                                sx={{ fontSize: 18, fontWeight: 600, color: '#272829', }}>
                                7 Days for $1
                            </Typography>
                            <Typography
                                variant='h5'
                                sx={{ fontSize: 12, fontWeight: 500, color: '#272829', }}>
                                Then $34.99 /mo
                            </Typography>
                        </Box>
                    </Box>
                    {activeState === 'billing' &&
                        <>
                            <Box component={"div"}
                                sx={{
                                    borderRadius: 4,
                                    backgroundColor: '#3D30A2',
                                    display: 'flex',
                                    color: 'white',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    p: 4,
                                    mb: 4,
                                    gap: 1
                                }}>
                                <Box component={'span'} sx={{ color: 'white', fontSize: 45, }}><GiFireZone /></Box>
                                <Typography
                                    variant='h5'
                                    sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}>
                                    Automatic Renewal:
                                </Typography>
                                <Box component={'span'} sx={{ textAlign: 'start', mb: 1, display: 'flex', alignItems: 'start', gap: .5, pl: 1 }}>
                                    <GiCheckMark size={16} /><Typography sx={{ fontSize: 12, fontWeight: 400, }}>Automatically renews at $34.99/ month on December 5, 2023.
                                    </Typography>
                                </Box>
                                <Box component={'span'} sx={{ textAlign: 'start', mb: 1, display: 'flex', alignItems: 'start', gap: .5, pl: 1 }}>
                                    <GiCheckMark size={20} /><Typography sx={{ fontSize: 12, fontWeight: 400, }}>You will be charged this amount every month until you cancel your membership.
                                    </Typography>
                                </Box>
                                <Box component={'span'} sx={{ textAlign: 'start', mb: 1, display: 'flex', alignItems: 'start', gap: .5, pl: 1 }}>
                                    <GiCheckMark size={30} /><Typography sx={{ fontSize: 12, fontWeight: 400, }}>You can cancel at any time before December 5, 2023, in accordance with the <Link style={{ color: 'white', fontSize: 12 }} to={'#'}>Cancellation policy</Link>, to avoid being charged.
                                    </Typography>
                                </Box>
                                <Box component={'span'} sx={{ textAlign: 'start', mb: 1, display: 'flex', alignItems: 'start', gap: .5, pl: 1 }}>
                                    <GiCheckMark size={16} /><Typography sx={{ fontSize: 12, fontWeight: 400, }}>Automatically renews at $34.99/ month on December 5, 2023.
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography
                                variant='h5'
                                sx={{ fontSize: 14, fontWeight: 600, mb: 4, color: '#444444' }}>
                                By clicking “SUBMIT”, I agree to the above terms of the 7-day trial and auto-renewing membership.
                            </Typography>
                        </>
                    }
                    <Divider />
                    <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: { xs: 2, md: 4 } }}>
                        <Typography variant='h5' sx={{ fontSize: 18, fontWeight: 600, }}>
                            Total
                        </Typography>
                        <Typography variant='h5' sx={{ fontSize: 18, fontWeight: 600, }}>
                            $ 0.00
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}
