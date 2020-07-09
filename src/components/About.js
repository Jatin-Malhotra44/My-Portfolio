import React, { useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import avatar from '../Assets/Profile.png';
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Typography>
                </div>
            </Box>
        </div>
    )
}

export default About
