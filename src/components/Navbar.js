import React from 'react'
import { Link } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';
import{AppBar,Toolbar,Typography,Box} from '@material-ui/core';

const useStyles= makeStyles(theme=>({
    navlinks:{
        color:'tan',
        cursor:'pointer',
        fontSize:'20px',
        "&:hover":{
            color:'tomato',
        }
    },
    nav:{
        color:'tan',
        cursor:'pointer',
        "&:hover":{
            color:'tomato',
            fontSize:'23px',
            borderBottom:'3px solid',
            borderRadius:'10px'
        }
    }
}))

const Navbar = () => {
    const classes=useStyles();
    return (
        <div>
            <Box component='nav' >
            <AppBar postion='static' style={{background:'#222'}}>
                <Toolbar style={{display:'flex',justifyContent:'space-around'}}>
                    <Typography className={classes.nav}  >
                    <Link style={{margin:'0 3px'}}
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>Home
                    </Link> 
                    </Typography>
                    <Typography className={classes.nav}  >
                    <Link style={{margin:'0 3px'}}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>About
                    </Link> 
                    </Typography>
                    <Typography className={classes.nav}  >
                    <Link style={{margin:'0 3px'}}
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>Education
                    </Link> 
                    </Typography>
                    <Typography className={classes.nav}  >
                    <Link style={{margin:'0 3px'}}
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>Skills
                    </Link> 
                    </Typography>
                    <Typography className={classes.nav}  >
                    <Link style={{margin:'0 3px'}}
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>Projects
                    </Link> 
                    </Typography>
                    <Typography className={classes.nav}  >
                    <Link style={{margin:'0 3px'}}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>Contact
                    </Link> 
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    )
}
/* */
export default Navbar
