import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100'>
      <Box>
        <Typography className='fw-bold' variant='h4'>Sign in to E-Store</Typography>
        <Typography variant='h6'>Welcome to FreshCart! Enter your email to get started.</Typography>
        <Box>
        <TextField fullWidth size='small' placeholder='Email' />
        </Box>
       <Box className="my-3">
       {/* <TextField fullWidth size='small' placeholder='Password'  /> */}
       <TextField placeholder='Password' size='small' type={ShowPassword? 'text' : 'Password'} slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start" onClick={()=>setShowPassword(!ShowPassword)} >
               {ShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon /> }
              </InputAdornment>
            ),
          },
        }} fullWidth />
       </Box>
       <Button fullWidth variant="contained">Sign In</Button>
       <Typography className=' mt-3' variant='h6'>Don’t have an account? <Link className='text-decoration-none' to="/sign-up">Sign Up</Link></Typography>
      </Box>
    </div>
    </>
  )
}

export default SignIn;
