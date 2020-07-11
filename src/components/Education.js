import React, { useEffect } from 'react'
import { Box,Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const useStyles=makeStyles(theme=>({
    boxcontainer:{
        margin:'10px auto',
    }
}))

const Education = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

    const classes=useStyles();
    return (
        <div id='education' style={{width:'80%',margin:'10px auto'}}>
           <Box className={classes.boxcontainer}>
                <div data-aos='fade-left'>
                    <Typography variant='h3' style={{textAlign:'center',color:'white',fontFamily:'Anton'}}>
                        My Education
                    </Typography>
                </div>
                <Box>
                    <div data-aos='fade-left' style={{marginTop:'20px',display:'flex',marginRight:'20px'}}>
                        <div className="outer">
                            <div className="inner"></div>
                        </div>
                        <div style={{margin:' 0 30px'}}>
                            <Typography variant='h4' style={{margin:'10px 0',color:'#C72C41',fontFamily:'Anton'}}>
                                BACHELOR OF TECHNOLOGY, B.TECH    
                            </Typography>
                            <div style={{margin:'10px 0',fontSize:'20px',background:'grey',width:'23%',padding:'5px'}}>
                                2019-2023
                            </div>
                            <div style={{margin:'10px 0',fontSize:'20px',fontStyle:'italic',color:'grey'}}>
                                B.M. Institute Of Engineering and Technology
                            </div>
                            <div style={{margin:'10px 0',fontSize:'20px',fontStyle:'italic',color:'grey'}}>
                                <ul>
                                    <li>Computer Science Engineering</li>
                                    <li>CGPA: 8.0</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Box>
                
                <Box>
                    <div data-aos='fade-left' style={{marginTop:'20px',display:'flex',marginRight:'20px'}}>
                        <div className="outer">
                            <div className="inner"></div>
                        </div>
                        <div style={{margin:' 0 35px'}}>
                            <Typography variant='h4' style={{margin:'15px 0',color:'#C72C41',fontFamily:'Anton'}}>
                                SENIOR SECONDARY EDUCATION- CBSE    
                            </Typography>
                            <div style={{margin:'15px 0',fontSize:'20px',background:'grey',width:'23%',padding:'5px'}}>
                                2017-2019
                            </div>
                            <div style={{margin:'15px 0',fontSize:'20px',fontStyle:'italic',color:'grey'}}>
                                D.L.D.A.V MODEL SCHOOL
                            </div>
                            <div style={{margin:'15px 0',fontSize:'20px',fontStyle:'italic',color:'grey'}}>
                                <ul>
                                    <li>CGPA(12): 9.3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box>
                    <div data-aos='fade-left' style={{marginTop:'20px',display:'flex',marginRight:'20px'}}>
                        <div className="outer">
                            <div className="inner"></div>
                        </div>
                        <div style={{margin:' 0 35px'}}>
                            <Typography variant='h4' style={{margin:'15px 0',color:'#C72C41',fontFamily:'Anton'}}>
                                SECONDARY EDUCATION-CBSE    
                            </Typography>
                            <div style={{margin:'15px 0',fontSize:'20px',background:'grey',width:'26%',padding:'5px'}}>
                                2010-2017
                            </div>
                            <div style={{margin:'15px 0',fontSize:'20px',fontStyle:'italic',color:'grey'}}>
                                D.L.D.A.V MODEL SCHOOL
                            </div>
                            <div style={{margin:'15px 0',fontSize:'20px',fontStyle:'italic',color:'grey'}}>
                                <ul>
                                    <li>CGPA(10): 9.4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default Education
