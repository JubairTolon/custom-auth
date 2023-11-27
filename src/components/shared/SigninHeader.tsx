import * as React from 'react';
import { Box } from "@mui/material"
import { Typography, Chip } from '@mui/material';
import { GiFireZone } from "react-icons/gi";
import { MdFaceUnlock } from "react-icons/md";


export default function SigninHeader() {
    const [deleteChip, setDeleteChip] = React.useState<boolean>(false);

    function handleDelete() {
        setDeleteChip(true)
    }
    return (
        <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, textAlign: 'center' }}>
                <Box component={'span'} sx={{ color: '#3D30A2', fontSize: { xs: 40, md: 60 }, }}><GiFireZone /></Box>
                <Box component={'span'} sx={{ color: '#3D30A2', fontSize: { xs: 20, md: 30 }, fontWeight: 600, textTransform: 'uppercase' }}>Custom</Box>
                <Box component={'span'} sx={{ color: 'gray', fontSize: { xs: 20, md: 30 }, fontWeight: 600, textTransform: 'uppercase' }}>Name</Box>
            </Typography>
            {!deleteChip &&
                <Chip
                    sx={{
                        borderRadius: 1, backgroundColor: '#3D30A2', color: 'white', height: 60, px: { xs: .5, sm: 6 }, fontSize: { xs: 10, sm: 16 }, mb: { xs: 2, sm: 4 }, width: { xs: '90%', sm: 'fit-content' },
                        '& .MuiChip-deleteIcon': {
                            color: 'white',
                            '&:hover': {
                                color: 'lightgray'
                            }
                        },
                    }} onDelete={handleDelete} icon={<MdFaceUnlock color='white' size={20} />} label={`Referred for rental or employment verification? Click Here.`} />}
        </Box>
    )
}
