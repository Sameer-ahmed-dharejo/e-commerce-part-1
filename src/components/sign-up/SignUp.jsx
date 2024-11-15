import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SignUp = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  return (
    
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <Box>
      <Typography className='fw-bold' variant='h4'>Get Start Shopping</Typography>
      <Typography variant='h6'>Welcome to FreshCart! Enter your email to get started.</Typography>
    <Box>
   <TextField placeholder='First Name' size='small' fullWidth />
    </Box>
    <Box className="my-3">
    <TextField placeholder='Second Name' size='small' fullWidth />
    </Box>
    <Box>
    <TextField placeholder='Email' size='small' fullWidth />
    </Box>
    <Box className="my-3">
    <TextField placeholder='****' size='small' type={ShowPassword? 'text' : 'Password'} slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start" onClick={()=>setShowPassword(!ShowPassword)} >
                <VisibilityIcon />
              </InputAdornment>
            ),
          },
        }} fullWidth />
    </Box>
    <Button fullWidth variant='contained' >Sign Up</Button>
    </Box>
  </div>
  )
}

export default SignUp;
