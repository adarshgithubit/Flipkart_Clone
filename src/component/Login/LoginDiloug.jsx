import { Dialog ,TextField,Box, Typography,Button,styled} from '@mui/material'
import React from 'react'

const Component = styled(Box)`
height:90vh;
width:100vh;
`

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 75% no-repeat;

height:100%;
width:35%;

padding:40px 35px;

& > p, & > h5{
  color:#fff;
  font-weight:600;
}
`

const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;

&>div, &>button, &>p{
  margin-top:20px;
}
`
const LogBtn= styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
border-radius:3px;
height:45px
`

const OtpBt= styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
border-radius:3px;
height:45px
`

const CreatAcn = styled(Typography)`
text-transform:none;
font-weight:600;
font-size:14px;
color:#2874f0;
cursor:pointer;
`



const LoginDiloug = ({open,setOpen}) => {
   
  const handleClose = ()=>{
        setOpen(false)
    }
  return (
    <>
    <Dialog open={open}  onClose={handleClose}>
      <Component>
        <Box style={{display:"flex", height:"100%"}}>
          <Image>
          <Typography variant="h5">Login</Typography>
          <Typography style={{marginTop:"15px"}}>Get access to your Orders, Wishlist and Recommendations</Typography>

          </Image>
      <Wrapper>
          <TextField label="Enter E-mail/Mobile Number" variant="standard" />
          <TextField  label="Enter Password" variant="standard" />
          <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
          <LogBtn>Login</LogBtn>
          <Typography style={{textAlign:"center"}}>OR</Typography>
          <OtpBt>Request OTP</OtpBt>
          <CreatAcn>New to Flipkart? Create an account</CreatAcn>
       </Wrapper>
       </Box>
       </Component>
    </Dialog>
    </>
  )
}

export default LoginDiloug