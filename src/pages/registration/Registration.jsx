import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from '../../componenets/Navbar/Navbar';

const Registration = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
            <Navbar></Navbar>
        </Container>
      </React.Fragment>
    </div>
  )
}

export default Registration