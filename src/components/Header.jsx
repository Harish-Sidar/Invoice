import React from 'react'
import { AppBar, Toolbar } from '@mui/material'

const Header = () => {

    const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png";

  return (
    <>
        <AppBar position='static'>
            <Toolbar>
                <img src={logo} alt="Logo" style={{ width: 120 }} />
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header
