import { Box, Button, TextField, Typography,styled } from '@mui/material'
import React from 'react'

const Component = styled(Box)({
    marginTop: 20,
    "& > p": {
        fontSize: 26,
        marginBottom: 10,
    }

})
  

function Addinvoice() {
  return (
    <>
<Component>
    <Typography>
        Add Invoice 
    </Typography>
    <Box style = {{marginTop : 15}} >
        <TextField     InputProps={{ style: { color: 'white' }}}
             variant='standard' 
             placeholder='Enter Vendor Name' />

                <TextField     InputProps={{ style: { color: 'white' }}}
             variant='standard' 
             placeholder='Enter Product Name' />

                <TextField     InputProps={{ style: { color: 'white' }}}
             variant='standard' 
             placeholder='Enter Amount '
             type='number' />

                <TextField     InputProps={{ style: { color: 'white' }}}
             variant='standard' 
             placeholder='Enter Date'
             type='date' />

             <Button   variant='contained'> Add Invoice</Button>

             

                

               
    </Box>
    </Component>      
    </>
  )
}

export default Addinvoice
