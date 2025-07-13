 import React, { useState } from 'react'
import Header from '../components/Header'
import { Box,Typography,Button } from '@mui/material'
import Addinvoice from '../components/Addinvoice'
 
 const Home = () => {

const [addinvoice, setAddInvoice] = useState(false);

const toggleInvoice = () => {
  setAddInvoice(true);

}



   return (
    <>
    <Header/>
    <Box fontStyle={{margin : 20}}>
        <Typography variant='h4'>
            Pending Invoice
        </Typography>

       { !addinvoice && <Button 
        variant='contained'
         style={{marginTop : 15}}
         onClick={() => toggleInvoice() }
         >
          Add Invoice</Button>
          }
       { addinvoice && <Addinvoice/>}
    </Box>
    </>
   )
 }
 
 export default Home