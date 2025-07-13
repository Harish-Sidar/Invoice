import { Box, Button, TextField, Typography,styled } from '@mui/material'
import React, { useState } from 'react'
import { saveInvoice } from '../Services/api'

const Component = styled(Box)({
    marginTop: 20,
    "& > p": {
        fontSize: 26,
        marginBottom: 10,
    },
    "& > div >div" : {
        marginRight: 20,
        minWidth: 200,
    },
    
}) 

const defaultObj = {
    vendor: '',
    product: '',
    amount: '0',
    date: '',
    action: 'pending'

}
  

function Addinvoice() {

const [invoive, setInvoive] = useState(defaultObj)

const onValueChange = (e) => {
    setInvoive({ ...invoive,[e.target.name]: e.target.value})

}

const addNewInvoice = async () => {

  await  saveInvoice({ ...invoive,amount:Number(invoive[`amount`]) });

}

  return (
    <>
<Component>
    <Typography>
        Add Invoice 
    </Typography>
    <Box style = {{marginTop : 15}} >
        <TextField     InputProps={{ style: { color: 'white' }}}
             variant='standard' 
             placeholder='Enter Vendor Name' 
             onChange={(e) => onValueChange(e)}
             name='vendor'
             autoComplete='off'
             />

                <TextField     InputProps={{ style: { color: 'white' }}}
             variant='standard' 
             placeholder='Enter Product Name'
             onChange={(e) => onValueChange(e)}
               name='product'
              autoComplete='off'

             />

                <TextField     InputProps={{ style: { color: 'white' }}}
             variant='standard' 
             placeholder='Enter Amount '
             type='number'
             onChange={(e) => onValueChange(e)}
               name='amount'
             autoComplete='off' 
            />

                <TextField     InputProps={{ style: { color: 'white' }}}
             variant='standard' 
             placeholder='Enter Date'
             type='date'
             onChange={(e) => onValueChange(e)}
               name='date'
                autoComplete='off'

             />

             <Button 
               variant='contained'
               onClick={()=>addNewInvoice()}
               > Add Invoice</Button>

             

                

               
    </Box>
    </Component>      
    </>
  )
}

export default Addinvoice
