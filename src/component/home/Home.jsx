import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import{Box,styled} from "@mui/material"

const Container = styled(Box)`
padding:10px 15px;
background:#f2f2f2;

`

const Home = () => {
  return (
    <>
    <Navbar/>
    <Container>
         <Banner/>
    </Container>
    
    </>
  )
}

export default Home