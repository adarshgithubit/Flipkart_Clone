import { Box} from '@mui/system'
import { Button, Typography, styled} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';
import React from 'react'

const Wrapper = styled(Box)`
display: flex;
margin: 0 3% 0 auto;
& > button, & > p, & > div{
    margin-right:30px;
    font-size: 16px;
    align-item: centre;
}
`
const CartBox= styled(Box)`
display: flex;
`

const LoginButton = styled(Button)`
color: blue;
background-color: white;
border-radius: 2px;
height:32px;
box-shadow: none;


`

const CustomButton = () => {
  return (
    <>
    <Wrapper> 
        <LoginButton variant="contained">Login</LoginButton>
        <Typography style={{width:"130px",marginTop:"4px"}}>Become Seller</Typography>
        <Typography style={{marginTop:"4px"}}>More</Typography>
        <CartBox>
            <ShoppingCart/>
            <Typography>Cart</Typography> 
        </CartBox>
    </Wrapper>
    </>
  )
}

export default CustomButton