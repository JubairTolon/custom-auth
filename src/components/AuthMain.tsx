import { Box } from "@mui/material"
import SignIn from "./signin/Signin";



const AuthMain = () => {

    return (
        <Box component={'div'} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
            <SignIn />
        </Box>
    );
};

export default AuthMain;