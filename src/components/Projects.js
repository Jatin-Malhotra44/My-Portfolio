/* eslint-disable react/jsx-no-target-blank */
import React,{useEffect} from 'react'
import { Box,Typography,Card,CardActionArea,CardActions,CardContent,CardMedia,Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import Project1 from '../Assets/Simple-portfolio.png';
import Project2 from '../Assets/Insta-Clone.png';
import Project3 from '../Assets/Blog.png';
import Project4 from '../Assets/Portfolio.png';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 150,
        background:'rgb(224, 81, 20)',
        margin:'0 10px'
    },
    boxcontainer:{
        margin:'10px auto',
    },
    demo:{
        "&:hover":{
            color:'tomato',
            fontSize:'23px'
        }
    }
  });
const Projects = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

    const classes=useStyles();
    return (
        <div id='projects' style={{width:'80%',margin:'10px auto'}} >
            <Box className={classes.boxcontainer}>
                <div data-aos='zoom-in' style={{width:'100%',margin:'50px auto 20px'}}>
                    <Typography variant='h4' className='separator'>Projects</Typography >
                </div>
                <p data-aos='fade-left' >By Using My Development Skills and Web Designing Skills, 
                    I Have Worked On Various Projects based on Web Development , 
                    Both Backend and FrontEnd. I Have worked on Different Platforms , 
                    Python Based Django and JavaScript Based NodeJs for Backend and React
                    React for Front End.</p>
            
                <Box>
                    <div style={{display:'flex',justifyContent:'space-around',margin:'30px 0'}}>
                        {/* Project 1 */}
                        <Card data-aos='zoom-in' className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={Project1}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="h5">
                                    ProjectName
                                </Typography>
                                <Typography style={{color:'tan'}} variant="body2" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                
                                <Button size="small" color="primary">
                                <a href='https://site-port-a46e48.netlify.app' 
                                    target='_blank'
                                    style={{textDecoration:'none',color:'black',fontSize:'20px'}} >
                                    Live Demo</a>
                                </Button>

                            </CardActions>
                        </Card>
                        {/* Project2 */}
                        <Card data-aos='zoom-in' className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={Project2}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="h5">
                                    ProjectName
                                </Typography>
                                <Typography style={{color:'tan'}} variant="body2" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="primary">
                                <a href='https://insta-clone4444.herokuapp.com' 
                                    target='_blank'
                                    style={{textDecoration:'none',color:'black',fontSize:'20px'}} >
                                    Live Demo</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-around',margin:'20px 0'}}>
                        {/* Project 3 */}
                        <Card data-aos='zoom-in' className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={Project3}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="h5">
                                    ProjectName
                                </Typography>
                                <Typography style={{color:'tan'}} variant="body2" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="primary">
                                <a href='https://site-port-a46e48.netlify.app' 
                                    target='_blank'
                                    style={{textDecoration:'none',color:'black',fontSize:'20px'}} >
                                    Live Demo</a>
                                </Button>
                            </CardActions>
                        </Card>
                        <Card data-aos='zoom-in' className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={Project4}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="h5">
                                    ProjectName
                                </Typography>
                                <Typography style={{color:'tan'}} variant="body2" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="primary">
                                <a href='https://site-port-a46e48.netlify.app' 
                                    target='_blank'
                                    style={{textDecoration:'none',color:'black',fontSize:'20px'}} >
                                    Live Demo</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    
                </Box>
            </Box>
        </div>
    )
}

export default Projects
