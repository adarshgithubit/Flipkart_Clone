import React from 'react'
import {InputBase, Box, styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const InputBox =styled(Box)`
background:white;
width:35%;
border-radius:2px;
margin-left: 5px;
display:flex;
`
const InputSearchBase = styled(InputBase)`
padding-left: 20px;
width:100%;
`
const BoxSearch = styled(Box)`
padding: 5px
` 


const Search = () => {
  return (
    <>
    
    <InputBox>
       <InputSearchBase 
       placeholder='search for products & more products '/>
       <BoxSearch>
       <SearchIcon style={{color:"blue"}}/>
       </BoxSearch>
       
    </InputBox>
    
    </>
  )
}

export default Search