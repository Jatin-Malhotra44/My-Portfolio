import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import Typed from 'react-typed';

const useStyles=makeStyles(theme=>({
typedContainer:{
    position:'absolute',
    top:'40%',
    left:'50%',
    // textAlign:'center',
    transform:'translate(-50%,-50%)',
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
}))
const Header = () => {
    const classes=useStyles();
    return (
        <div>
            {/* <Box className={classes.typedContainer}> */}
            {/* <Box style={{margin:'170px 350px'}}> */}
            <Box id='home' style={{textAlign:'center',margin:'250px auto 0'}}>
                <Typography className={classes.subtitle} variant='h4'>
                    Hey! This Is
                </Typography>
                <Typography className={classes.name} variant='h2'>
                    Jatin Malhotra
                </Typography>
                <Typography variant='h4'>
                   <span style={{fontFamily:'Anton'}}>I am</span>  <Typed style={{borderBottom: '2px solid '}} className={classes.subtitle} 
                    strings={['a Web Developer','a Web Designer']} 
                    typeSpeed={100}
                    backSpeed={60}
                    loop
                    />
                </Typography>
            </Box>
        </div>
    )
}

export default Header
