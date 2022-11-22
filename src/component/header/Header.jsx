import React from 'react'
import {AppBar, Toolbar,styled, Typography} from '@mui/material'
import { Box } from '@mui/system'
import Search from './Search'
import CustomButton from '../CustomButton'
// https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png
const StyledHeder = styled(AppBar)`
background: #2874f0;
height:    55px;
`
 const LogoBox = styled(Box)`
 margin-left: 22%;
 line-height: 0;
 `

 const SubHeading= styled(Typography)`
 font-size:12px;
 font-style: italic;
 `
 const PlusImg= styled('img')({
    width:13,
    height:13,
    marginLeft:4,

 })

 const CustomBtnBox = styled(Box)`
    margin-left:5%
 `
const Header = () => {

    const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const subUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";


  return (
    <>
    <div>
      <StyledHeder>
           <Toolbar>
              <LogoBox>
                <img src={logoUrl} style={{width: 90}} alt="logo"/>
            <Box style={{display:"flex"}}>
                <SubHeading>Explore&nbsp; 
                   <Box component="span" style={{color:"yellow"}}>Plus</Box> 
                    </SubHeading>
                    <PlusImg src= {subUrl} alt="subLogo"/>
            </Box>
              </LogoBox>
              <Search/>
              <CustomBtnBox>
                      <CustomButton/>
              </CustomBtnBox>
              
           </Toolbar>
         </StyledHeder>
      
    </div>
    </>
  )
}

export default Header