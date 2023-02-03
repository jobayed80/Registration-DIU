import React, { useEffect, useState } from 'react'
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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField, FormControl, InputLabel, InputAdornment, IconButton, Input } from '@mui/material'
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FiLogIn } from 'react-icons/fi';
import { BsGoogle } from 'react-icons/bs';
import { FcPhone } from 'react-icons/fc';



// this part used for Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 600,
    // bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 1,
    pt: 1,
    px: 4,
    pb: 6,
};

const Navbar = () => {

    // this part used for password
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const [value, setValue] = React.useState('0');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    useEffect(() => {
        // handleOpen()
    }, [])


    const [id, setID] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = () => {

    }


    return (
        <div className='navBar'>

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <div className="Modal-part">

                        <Grid container spacing={2} style={{ marginTop: "1rem" }} className>
                            <Grid item xs={4} >
                                <div className="header-title">
                                    <div className="i-name">
                                        <span>Hi! I Am</span>
                                        <span>Jobayed Hossain Rabbi</span>
                                        <span>
                                            Frontend Developer with high level of experience in web designing
                                            and development, producting the Quality work
                                        </span>
                                    </div>
                                    <button className='button i-button'>Hire me</button>
                                </div>
                            </Grid>
                            <Grid item xs={3} >
                                <div className="left-part">
                                    <div className="left-img">
                                        <img src="./assets/images/left-bg.png" alt="" />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4} >


                                <Box sx={{ ...style }} className="Box-Body">
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <div className="Modal-logo">
                                            <img className='image' src="./assets/images/diu-logo.png" alt="" />
                                        </div>
                                        <TabContext value={value} >
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                                    <Tab label="SignIn" value="0" />
                                                    <Tab label="SignUp" value="1" />
                                                </TabList>
                                            </Box>

                                            {/* This part for SignIn Start */}
                                            <TabPanel value="0">
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
                                                    <Button style={{ width: "100%", marginTop: "3rem", background: "#2AD4BC" }} variant="contained" startIcon={<FiLogIn />}>
                                                        Login
                                                    </Button>
                                                    <div className="underLine" style={{ marginTop: "2rem" }}>
                                                        <div className="underLine1">
                                                            <hr style={{ marginTop: "1rem", marginBottom: "1rem" }}></hr>
                                                        </div>
                                                        <div className="">
                                                            <small>Or Continues With</small>
                                                        </div>
                                                        <div className="underLine2">
                                                            <hr style={{ marginTop: "1rem", marginBottom: "1rem" }}></hr>
                                                        </div>

                                                    </div>

                                                    <div className="social-media">
                                                        <div className="google">

                                                            <small><BsGoogle></BsGoogle></small>
                                                        </div>
                                                        <div className="phone">
                                                            <small><FcPhone className='phone-icon'></FcPhone></small>
                                                        </div>
                                                    </div>


                                                    <div className="Goto-register-btn">
                                                        <span>Don't have an account? </span>
                                                        <span><Tab className='register-here' onChange={handleChange} label="Register here" value="1" /></span>
                                                    </div>



                                                    {/* <Button onClick={handleClose} style={{ marginTop: "0.5rem", float: "right" }} variant="contained" size="small">
                                Close
                            </Button> */}
                                                </div>
                                            </TabPanel>
                                            {/* This part for SignIn End */}


                                            {/* this part for SignUp Start */}
                                            <TabPanel value="1">
                                                <TextField onChange={(e) => setID(e.target.value)} style={{ width: "100%" }} id="standard-basic" label="Teachers ID / Admin" variant="standard" /> <br></br>
                                                <TextField onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", marginTop: "0.7rem" }} id="standard-basic" label="Email" variant="standard" /> <br></br>
                                                <FormControl sx={{ mt: 2, width: '100%' }} variant="standard">
                                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                    <Input
                                                        onChange={(e) => setPassword(e.target.value)}
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

                                                <Button onClick={handleSubmit} style={{ width: "100%", marginTop: "3rem", background: "#2AD4BC" }} variant="contained" startIcon={<FiLogIn />}>
                                                    Signup
                                                </Button>

                                                <div className="underLine" style={{ marginTop: "2rem" }}>
                                                    <div className="underLine1">
                                                        <hr style={{ marginTop: "1rem", marginBottom: "1rem" }}></hr>
                                                    </div>
                                                    <div className="">
                                                        <small>Or Continues With</small>
                                                    </div>
                                                    <div className="underLine2">
                                                        <hr style={{ marginTop: "1rem", marginBottom: "1rem" }}></hr>
                                                    </div>

                                                </div>

                                                <div className="social-media" style={{ paddingBottom: "4rem" }}>
                                                    <div className="google">
                                                        <small><BsGoogle></BsGoogle></small>
                                                    </div>
                                                    <div className="phone">
                                                        <small><FcPhone className='phone-icon'></FcPhone></small>
                                                    </div>
                                                </div>



                                            </TabPanel>
                                            {/* this part for SignUp End */}

                                        </TabContext>
                                    </Box>

                                    {/* <Button onClick={handleClose}>Close</Button> */}
                                </Box>
                            </Grid>

                        </Grid>





                    </div>
                </Container>
            </React.Fragment>

        </div>
    )
}

export default Navbar