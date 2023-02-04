import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import './Navbar.css'
import {Box,Alert} from '@mui/material';
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
import { motion } from "framer-motion";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

import { getAuth ,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS




// this part used for Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '70%',
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

    const auth = getAuth();
    // Google Authentication
    let sweetAlertEMail = ()=>{
        Swal.fire({
            title: 'Sorry!',
            text: 'please must be use university email!--try it',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    let handleGoogle = () => {
        console.log("joba")
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                if(user.email.includes("@diu.edu.bd")){
                    sweetAlertNotice()
                }else{
                    sweetAlertEMail()
                }
                console.log(user)
                // navigate('/home')
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;

                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email)
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential)
                // ...
            });

    }

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
    const [error , setError] = useState("")
    const [errorPassword , setErrorPassword] = useState("")

    let sweetAlertNotice = ()=>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signin successfully'
          })
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(!id){
            console.log("khai")
            // sweetAlertNotice()
            setError("please enter your ID")
        }
       else if(!password){
        setError("")
        setErrorPassword("please enter your password")
       }
       else{
        setErrorPassword("")
       }
    }


    return (
        <div className='navBar'>

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <div className="Modal-part">

                        <Grid container spacing={2} style={{ marginTop: "1rem" }} className>
                            <Grid item xs={6} >
                                <div className="header-title">
                                    <div className="i-name">
                                        <span>Students Registration</span>
                                        <span>Daffodil International University</span>
                                        <span>
                                            Frontend Developer with high level of experience in web designing
                                            and development, producting the Quality work
                                        </span>
                                    </div>
                                    <button className='button i-button'>Hire me</button>
                                </div>
                            </Grid>
                           
                            {/* <Grid item xs={3} >
                                <div className="left-part">
                                    <div
                                        className="blur"
                                        style={{
                                            background: "red",
                                            top: "20%",
                                            width: "19rem",
                                            height: "11rem",
                                            left: "50%",

                                        }}
                                    ></div>
                                    <div className="left-img">
                                        <img src="./assets/images/left-bg.png" alt="" />
                                    </div>
                                </div>
                            </Grid> */}
                            <Grid item xs={4} >

                                <div
                                    className="blur"
                                    style={{
                                        background: "#2AD4BC",
                                        top: "9rem",
                                        width: "19rem",
                                        height: "11rem",
                                        right: "-7rem",
                                    }}
                                ></div>

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
                                                    <div className="errorNotice">
                                                        {error ?
                                                            <Alert variant="filled" severity="error">
                                                                {error}
                                                            </Alert>
                                                            : errorPassword ?
                                                            <Alert variant="filled" severity="error">
                                                                {errorPassword}
                                                            </Alert>
                                                            : ""
                                                        }
                                                    </div>
                                                    <TextField onChange={(e) => setID(e.target.value)} style={{ width: "100%" }} id="standard-basic" label="Teachers ID / Admin" variant="standard" /> <br></br>
                                                    <FormControl sx={{ mt: 2, width: '25ch', width: '100%' }} variant="standard">
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
                                                        Login
                                                    </Button>
                                                    <div className="underLine" style={{ marginTop: "2rem" }}>
                                                        <div className="underLine1">
                                                            <hr style={{ marginTop: "1rem", marginBottom: "1rem" }}></hr>
                                                        </div>
                                                        <div className="">
                                                            <small >Or Continues With </small>
                                                        </div>
                                                        <div className="underLine2">
                                                            <hr style={{ marginTop: "1rem", marginBottom: "1rem" }}></hr>
                                                        </div>

                                                    </div>

                                                    <div className="social-media">
                                                        <div className="google" onClick={handleGoogle} >

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
                                                <TextField  style={{ width: "100%" }} id="standard-basic" label="Teachers ID / Admin" variant="standard" /> <br></br>
                                                <TextField  style={{ width: "100%", marginTop: "0.7rem" }} id="standard-basic" label="Email" variant="standard" /> <br></br>
                                                <FormControl sx={{ mt: 2, width: '100%' }} variant="standard">
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

                                                <Button  style={{ width: "100%", marginTop: "3rem", background: "#2AD4BC" }} variant="contained" startIcon={<FiLogIn />}>
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