/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import { Box,Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="h6" color="white">{`${Math.round(
            props.value,
          )}`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    
    value: PropTypes.number.isRequired,
  };
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    boxcontainer:{
        margin:'10px auto',
    }
  });
  

const Skills = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

    const classes=useStyles();
    const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

    return (
        <div id='skills' style={{width:'80%',margin:'10px auto'}} >
            <Box className={classes.boxcontainer}>
                <div data-aos='zoom-in' style={{width:'100%',margin:'50px auto'}}>
                    <Typography variant='h4' className='separator'>Skills</Typography >
                </div>
                {/* JavaScript/Jquery */}
                <Box data-aos='flip-left' style={{margin:'30px'}}>
                    <Typography variant='h5' style={{margin:'5px',textAlign:'center'}}>Javascript/Jquery</Typography>
                    <div style={{display:'flex'}}>
                      <div className={classes.root}>
                          <LinearProgressWithLabel value={80} style={{padding:'10px',height:'5px',borderRadius:'45px/15px',color:'white'}}/>
                      </div>
                    </div>
                </Box>
                {/* ReactJs */}
                <Box data-aos='flip-right' style={{margin:'30px'}}>
                    <Typography variant='h5' style={{margin:'5px',textAlign:'center'}}>ReactJs</Typography>
                    <div style={{display:'flex'}}>
                      <div className={classes.root}>
                          <LinearProgressWithLabel value={70} style={{padding:'10px',height:'5px',borderRadius:'45px/15px'}}/>
                      </div>
                    </div>
                </Box>
                {/* NodeJs */}
                <Box data-aos='flip-left' style={{margin:'30px'}}>
                    <Typography variant='h5' style={{margin:'5px',textAlign:'center'}}>NodeJs</Typography>
                    <div style={{display:'flex'}}>
                      <div className={classes.root}>
                          <LinearProgressWithLabel value={70} style={{padding:'10px',height:'5px',borderRadius:'45px/15px'}}/>
                      </div>
                    </div>
                </Box>
                {/* MongoDb/Firebase */}
                <Box data-aos='flip-left' style={{margin:'30px'}}>
                    <Typography variant='h5' style={{margin:'5px',textAlign:'center'}}>MongoDb/Firebase</Typography>
                    <div style={{display:'flex'}}>
                      <div className={classes.root}>
                          <LinearProgressWithLabel value={80} style={{padding:'10px',height:'5px',borderRadius:'45px/15px'}}/>
                      </div>
                    </div>
                </Box>
                {/* Python */}
                <Box data-aos='flip-right' style={{margin:'30px'}}>
                    <Typography variant='h5' style={{margin:'5px',textAlign:'center'}}>Python</Typography>
                    <div style={{display:'flex'}}>
                      <div className={classes.root}>
                          <LinearProgressWithLabel value={90} style={{padding:'10px',height:'5px',borderRadius:'45px/15px'}}/>
                      </div>
                    </div>
                </Box>
                {/* Django */}
                <Box data-aos='flip-left' style={{margin:'30px'}}>
                    <Typography variant='h5' style={{margin:'5px',textAlign:'center'}}>Django</Typography>
                    <div style={{display:'flex'}}>
                      <div className={classes.root}>
                          <LinearProgressWithLabel value={60} style={{padding:'10px',height:'5px',borderRadius:'45px/15px'}}/>
                      </div>
                    </div>
                </Box>
                {/* R Language */}
                <Box data-aos='flip-right' style={{margin:'30px'}}>
                    <Typography variant='h5' style={{margin:'5px',textAlign:'center'}}>R Language</Typography>
                    <div style={{display:'flex'}}>
                      <div className={classes.root}>
                          <LinearProgressWithLabel value={70} style={{padding:'10px',height:'5px',borderRadius:'45px/15px'}}/>
                      </div>
                    </div>
                </Box>
                
            </Box>
        </div>
    )
}

export default Skills
