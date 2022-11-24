import React from 'react'
import {Box,styled, Typography} from '@mui/material'
import { navData } from '../../ConstantData/Data'

const NavBox = styled(Box)`
 display:flex;
 margin:20px 22px 0px 22px;
 justify-content:space-evenly;
`
const ContainerData = styled(Box)`
   padding:12px 8px;
   text-align:center;
`

const Navbar = () => {
  return (
    <>
    <NavBox>
     {
        navData.map(data =>(
            <ContainerData>
                <img src={data.url} style={{width:"40px"}} alt=""product/>
                <Typography>{data.text}</Typography>
            </ContainerData>
        ))
     }

    </NavBox>
    </>
  )
}

export default Navbar