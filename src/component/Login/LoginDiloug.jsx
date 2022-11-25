import { Dialog ,TextField,Box, Typography,Button,styled} from '@mui/material'
import {useState} from "react";
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

const AccountInitialValue={
   login: {
    view:"login",
    heading:"Login",
    subHeading:"Get access to your Orders, Wishlist and Recommendations"
   },
   signUp: {
    view: "signUp",
    heading:"Looks Like You Are New Here!",
    subHeading:"Sign up with your mobile number to get started"
   }
}

const SignUpInitialValue = {
      fName:"",
      email:"",
      mobNo:"",
      userName:"",
      password:"",
}

const LoginDiloug = ({open,setOpen}) => {
   
  const handleClose = ()=>{
        setOpen(false);
        toggleAccount(AccountInitialValue.login);
    }
  const [account, toggleAccount]=useState(AccountInitialValue.login);

  const toggleSignUp=()=>{
    toggleAccount(AccountInitialValue.signUp)
  }
   
  const [signUp, setSignUp]=useState(SignUpInitialValue)
  const onInputChange =(e)=>{
    setSignUp({...signUp, [e.target.name]: e.target.value})
    console.log(signUp);
  }


  return (
    <>
    <Dialog open={open}  onClose={handleClose}>
      <Component>
        <Box style={{display:"flex", height:"100%"}}>
          <Image>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{marginTop:"15px"}}>{account.subHeading}</Typography>

          </Image>
    {    account.view === "login" ?
        <Wrapper>
        <TextField label="Enter E-mail/Mobile Number" variant="standard" />
          <TextField  label="Enter Password" variant="standard" />
          <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
          <LogBtn>Login</LogBtn>
          <Typography style={{textAlign:"center"}}>OR</Typography>
          <OtpBt>Request OTP</OtpBt>
          <CreatAcn onClick={()=>toggleSignUp()}>New to Flipkart? Create an account</CreatAcn>
        </Wrapper>
        :
        <Wrapper>
          <TextField label="Enter Your Name" name='fName' onChange={(e)=> onInputChange(e)} variant="standard" />
          <TextField  label="Enter your E-Mail" name='email' onChange={(e)=> onInputChange(e) }variant="standard" />
          <TextField label="Enter Mobile Number" name='mobNo' onChange={(e)=> onInputChange(e)}  variant="standard" />
          <TextField label="Creat UserName " name='userName' onChange={(e)=> onInputChange(e)}  variant="standard" />
          <TextField label="Enter Password" name='password'  onChange={(e)=> onInputChange(e)} variant="standard" />
          <OtpBt>Continue</OtpBt>
         
        </Wrapper>
    }
       </Box>
       </Component>
    </Dialog>
    </>
  )
}

export default LoginDiloug