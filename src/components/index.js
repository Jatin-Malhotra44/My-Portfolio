import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import {makeStyles} from '@material-ui/core/styles';
//import Particle from './Particles';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Box} from '@material-ui/core';
import './style.css';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import ParticlesBg from 'particles-bg';
//import Particles from 'react-particles-js';

const useStyles=makeStyles(theme=>({
    BoxContainer:{
        position:'absolute',
         top:'60%',
         left:'50%',
         transform:'translate(-50%,-50%)'
    },
    icon:{
        margin:'50px 30px',
        textAlign:'center',
        color:'white',
        fontSize:'50px',
        cursor:'pointer',
        "&:hover":{
            fill:'tomato',
            fontSize:'55px'
        }
    }
    
}))
const Home = () => {
    const classes=useStyles();
    return (
        <>  
            <Navbar/>
            <ParticlesBg type="lines" bg={true} />
            <Header/>         
            <Box style={{textAlign:'center'}}>
                <LinkedInIcon className={classes.icon} style={{color:'white'}}/>
                <FacebookIcon className={classes.icon}/>
                <GitHubIcon className={classes.icon}/>
            </Box>
            <About/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Home
