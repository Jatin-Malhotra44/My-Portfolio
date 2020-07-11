import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import {makeStyles} from '@material-ui/core/styles';
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
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles=makeStyles(theme=>({
    BoxContainer:{
        position:'absolute',
         top:'60%',
         left:'50%',
         transform:'translate(-50%,-50%)'
    },
    icon:{
        margin:'50px 0px',
        color:'white',
        fontSize:'40px',
        cursor:'pointer',
        "&:hover":{
            fill:'tomato',
            fontSize:'45px'
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
            <Box style={{display:'flex',justifyContent:'space-around'}}>
                <a href='https://www.linkedin.com/in/jatin-malhotra-690292194/'>
                    <LinkedInIcon className={classes.icon} style={{color:'white'}}/>
                </a>
                <a href='https://www.facebook.com/jatin.malhotra.5473/'>
                    <FacebookIcon className={classes.icon}/>
                </a>
                <a href='https://github.com/Jatin-Malhotra44'>
                <GitHubIcon className={classes.icon}/>
                </a>
                <a href='https://www.instagram.com/jatin_malhotra19/'>
                <InstagramIcon className={classes.icon}/>
                </a>
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
