import { Box } from "@mui/material"
import { Routes, Route } from 'react-router-dom'
import AuthMain from "./components/AuthMain"
import SigninFooter from "./components/shared/SigninFooter"
import SignUp from "./components/signup/Signup"
import SigninHeader from "./components/shared/SigninHeader"



function App() {

  return (
    <Box component={'div'} sx={{ textAlign: 'center' }}>
      <SigninHeader />
      <Routes>
        <Route path='/' element={<AuthMain />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <SigninFooter />
    </Box>
  )
}

export default App
