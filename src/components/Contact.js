import React,{useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { Box,Typography } from '@material-ui/core'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import RoomIcon from '@material-ui/icons/Room';
import ShareIcon from '@material-ui/icons/Share';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Typed from 'react-typed';

const useStyles = makeStyles({
    boxcontainer:{
        margin:'10px auto',
    },
    contact:{
        background:'rgba(255, 255, 255, 0.2)',
        padding:'10px',
        borderRadius:'30px',
        margin:'20px auto',
        width:'80%',
        "&:hover":{
            cursor:'pointer',
            background:'rgba(255, 255, 255, 0.4)',    
        }
    },
    subtitle:{
        color:'#C72C41',
        margin:'20px 0',
        fontFamily:'Anton',
        letterSpacing:'2px'   
    },
    name:{
        margin:'20px 0',
        letterSpacing:'2px',
        fontStyle:'bolder'
    }
  });

const Contact = () => {
    
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);
    const classes=useStyles();
    
    return (
        <div id='contact' style={{width:'80%',margin:'10px auto'}} >
            <Box className={classes.boxcontainer}>
                <div data-aos='zoom-in' style={{width:'100%',margin:'50px auto 20px'}}>
                    <Typography variant='h4' className='separator'>Contact</Typography >
                </div>
            </Box>
            <div style={{margin:'0 auto',textAlign:'center'}}>
                {/* Address */}
                <Box data-aos='flip-left' className={classes.contact}>
                    <Box style={{display:'flex'}}>
                        <RoomIcon style={{fontSize:'40px',color:'#C72C41',margin:'0 10px'}} />                        
                        <Typography variant='h4'>
                            Address
                        </Typography>
                    </Box>
                    <Typography variant='h6' style={{margin:'0 20px'}}>
                        Lu-67,Pitampura,Delhi
                    </Typography>
                </Box>
                {/* Social */}
                <Box data-aos='flip-right' className={classes.contact}>
                    <Box style={{display:'flex'}}>
                        <ShareIcon style={{fontSize:'40px',color:'#C72C41',margin:'0 10px'}} />                        
                        <Typography variant='h4'>
                            Social Profiles
                        </Typography>
                    </Box>
                    <div style={{display:'flex',justifyContent:'space-around',margin:'5px 0'}}>
                        <GitHubIcon style={{fontSize:'30px'}}/>
                        <LinkedInIcon style={{fontSize:'30px'}}/>
                        <FacebookIcon style={{fontSize:'30px'}}/>
                        <InstagramIcon style={{fontSize:'30px'}}/>
                    </div>
                </Box>
                {/* Email */}
                <Box data-aos='flip-left' className={classes.contact}>
                    <Box style={{display:'flex'}}>
                        <EmailRoundedIcon style={{fontSize:'40px',color:'#C72C41',margin:'0 10px'}} />                        
                        <Typography variant='h4'>
                            Email
                        </Typography>
                    </Box>
                    <Typography variant='h8' style={{margin:'0 10px'}}>
                        malhotra.jatin21@gmail.com
                    </Typography>
                </Box>
                {/* Contact No. */}
                <Box data-aos='flip-right' className={classes.contact}>
                    <Box style={{display:'flex'}}>
                        <PhoneRoundedIcon style={{fontSize:'40px',color:'#C72C41',margin:'0 10px'}} />                        
                        <Typography variant='h4'>
                            Call
                        </Typography>
                    </Box>
                    <Typography variant='h8'>
                            (+91)9315845907
                    </Typography>
                </Box>
            </div>

            <Box className={classes.contact} style={{margin:'100px auto',padding:'40px',textAlign:'center'}}>
                {/* <Typography className={classes.name} variant='h2'>
                    This Website Was
                </Typography> */}
                <Typography variant='h4'>
                   <span style={{fontFamily:'Anton'}}>This Website Was</span>  <Typed style={{borderBottom: '2px solid '}} className={classes.subtitle} 
                    strings={['Coded By Me','Coded For You','Created With HardWork','Created With Inspiration']} 
                    typeSpeed={100}
                    backSpeed={60}
                    loop
                    />
                </Typography>
            </Box>
        </div>
    )
}

export default Contact
