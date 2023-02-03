import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from '../../componenets/Navbar/Navbar';
import './Registration.css'

const Registration = () => {
  return (
    <div className='reg-part'>

      <div className="Nav">
        <React.Fragment>
          <CssBaseline>
            <Container maxWidth="xl">
               <div className="logo">
                 <a href=''><img className='image' src="./assets/images/diu-logo.png" alt="" /></a>
               </div>
            </Container>
          </CssBaseline>
        </React.Fragment>
        
      </div>


      <Navbar></Navbar>


      <footer className=''>
        <div className="wave"></div>
        <div className="wave"></div>
        {/* <div className="login-16">
          <div className="login-16-inner">
              <div className="ocean">
                  <div className="wave"></div>
                  <div className="wave"></div>
              </div>
          </div>
        </div> */}
      </footer>
    </div>
  )
}

export default Registration