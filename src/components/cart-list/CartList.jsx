import { Box, Drawer, Typography } from '@mui/material';
import React from 'react'

const CartList = (props) => {
  const {openCartList, toggleCartLiist} = props;
  return (
    <>
        <Drawer open={openCartList} onClose={toggleCartLiist(false)}>
       <Box sx={{width:'340px'}}>
       <Typography>Cart List</Typography>
       </Box>
      </Drawer>
    </>
  )
}

export default CartList;
