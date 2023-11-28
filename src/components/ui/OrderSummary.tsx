import { Box, Divider, Chip, Typography, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { GiFireZone } from "react-icons/gi";



export default function OrderSummary() {
    return (
        <>
            <Card
                sx={{
                    width: '30%',
                    borderRadius: 2
                }}>
                <CardContent>
                    <Typography variant='h1' sx={{ fontSize: 24, fontWeight: 600, color: '#272829', textAlign: 'start' }}>Order Summary</Typography>
                    <Box component={'div'}
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mt: 2,
                            mb: 4,
                            gap: 4
                        }}>
                        <Box component={'div'}
                            sx={{
                                width: '60%',
                                textAlign: 'start',
                            }}>
                            <Typography variant='h5' sx={{ display: 'flex', fontSize: 16, fontWeight: 500, color: '#3D30A2', textAlign: 'start', alignItems: 'center', gap: 1, mb: 4 }}>Credit Essentials
                                <Chip size='small' sx={{ borderRadius: 1, backgroundColor: '#C7C3E3', color: '#272829', fontSize: 12 }} label="trial" variant="filled" />
                            </Typography>
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
                    <Divider />
                    <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 4 }}>
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
