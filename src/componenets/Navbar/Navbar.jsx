import React from 'react'
import { Grid } from '@mui/material'
import './Navbar.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Backdrop from '@mui/material/Backdrop';
import { TextField, FormControl, InputLabel, InputAdornment, IconButton, Input } from '@mui/material'
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FiLogIn } from 'react-icons/fi';


// this part used for Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 500,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Navbar = () => {

    // this part used for password
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };





    return (
        <div className='navBar'>


        {/* Navbar Start */}
            <Grid container spacing={8}>

                    <Grid item xs={2} className="logo">
                        <a href="">
                            <img className='image' src="./assets/images/diu-logo.png" alt="" />
                        </a>
                    </Grid>
                    <Grid item xs={4} className="logo">

                    </Grid>
                    <Grid item xs={6}>
                        <div className="navItem">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Home</a></li>
                                <li><a href="">Home</a></li>
                                <li><a href="">Home</a></li>
                                <li><span onClick={handleOpen}>Login</span></li>
                            </ul>
                        </div>
                    </Grid>

            </Grid>
            {/* Navbar ENd */}



{/* Login Part Strat */}
            <div className="Modal-part">
                <React.Fragment>
                    {/* <Button onClick={handleOpen}>Login</Button> */}
                    <Modal
                        hideBackdrop
                        
                        closeAfterTransition
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 4000,
                        }}
                    >
                        <Box sx={{ ...style }} className="Box-Body">
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <div className="Modal-logo">
                                    <img className='image' src="./assets/images/diu-logo.png" alt="" />
                                </div>
                                <TabContext value={value} >
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                            <Tab label="SignIn" value="1" />
                                            <Tab label="SignUp" value="2" />
                                        </TabList>
                                    </Box>

                                    {/* This part for SignIn */}
                                    <TabPanel value="1">
                                        <div className="login-part" >
                                            <TextField style={{ width: "100%" }} id="standard-basic" label="Teachers ID / Admin" variant="standard" /> <br></br>
                                            <FormControl sx={{ mt: 2, width: '25ch', width: '100%' }} variant="standard">
                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                <Input
                                                    id="standard-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Button style={{ width: "100%", marginTop: "3rem" }} variant="contained" color="success" startIcon={<FiLogIn />}>
                                                Login
                                            </Button>

                                            <Button onClick={handleClose} style={{marginTop:"20px"}} variant="contained" size="small">
                                                Close
                                            </Button>
                                        </div>
                                    </TabPanel>

                                    {/* this part for SignUp */}
                                    <TabPanel value="2">Item Two</TabPanel>

                                </TabContext>
                            </Box>
                           
                            {/* <Button onClick={handleClose}>Close</Button> */}
                        </Box>
                    </Modal>
                </React.Fragment>

            </div>






        </div>
    )
}

export default Navbar