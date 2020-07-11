/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import avatar from '../Assets/avatar.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import './about.css';
const useStyles=makeStyles(theme=>({
    boxcontainer:{
        margin:'10px auto',
        textAlign:'center'
    }
}))

const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

    const classes=useStyles();
    return (
        <div id='about' style={{display:'flex',justifyContent:'space-between',width:'80%',margin:'10px auto'}}>
           <Box className={classes.boxcontainer}>
                <div data-aos='zoom-in' style={{width:'100%',margin:'50px auto'}}>
                    <Typography variant='h4' className='separator'>About</Typography >
                </div>

                <div data-aos='fade-down'>
                  <img src={avatar} alt='img' style={{height:'250px',width:'250px'}}/>  
                </div>
                <div data-aos='fade-right'>
                    <Typography variant='h3' style={{color:'#C72C41',fontFamily:'Anton'}}>
                        My Profile
                    </Typography>
                </div>
                <div data-aos='fade-left'>
                    <Typography variant='h5' style={{color:'white',textAlign:'justify',textJustify:'inter-world'}}>
                        <p>Hey There .. ! I Am Jatin Malhotra , Second Year CSE UnderGrad Student In BM Institute Engg & Tech Affiliated to GGSIPU</p>
                        <p>I am a Web Developer and Web Designer, who loves to work on projects belonging to Web Development Domain</p>
                        <p>I am Specialise in These Skills</p>
                        <ul>
                            <li>Web Designing with ReactJS Components</li>
                            <li>Web Development with NodeJS</li>
                            <li>Web Development Using Django</li>
                            <li>Javascript/Jquery</li>
                        </ul>
                    </Typography>
                    <Button variant="contained" color="primary">
                        <a href='https://drive.google.com/file/d/1-sB1JgOQkYqS-wBFHlEZUhbl-5gBtRQr/view?usp=sharing' target="_blank" style={{textDecoration:'none'}}>
                            <Typography variant='h6' style={{float:'left',fontFamily:'Anton',color:'black'}}>Download Resume</Typography> 
                        </a>
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default About
