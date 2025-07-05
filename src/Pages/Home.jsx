 import React from 'react'
import Header from '../components/Header'
import { Box,Typography,Button } from '@mui/material'
import Addinvoice from '../components/Addinvoice'
 
 const Home = () => {
   return (
    <>
    <Header/>
    <Box fontStyle={{margin : 20}}>
        <Typography variant='h4'>
            Pending Invoice
        </Typography>
        <Button variant='contained' style={{marginTop : 15}}>Add Invoice</Button>
        <Addinvoice/>
    </Box>
    </>
   )
 }
 
 export default Home