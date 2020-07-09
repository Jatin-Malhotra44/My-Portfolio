import React,{useEffect} from 'react'
import { Box,Typography,Card,CardActionArea,CardActions,CardContent,CardMedia,Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import avatar from '../Assets/coffee-apple.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 150,
        background:'rgb(224, 81, 20)',
        margin:'0 10px'
    },
    boxcontainer:{
        margin:'10px auto',
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
                <p>By Using My Development Skills and Web Designing Skills, 
                    I Have Worked On Various Projects based on Web Development , 
                    Both Backend and FrontEnd. I Have worked on Different Platforms , 
                    Python Based Django and JavaScript Based NodeJs for Backend and React
                    React for Front End.</p>
            
                <Box>
                    <div style={{display:'flex',justifyContent:'space-around',margin:'30px 0'}}>
                        <Card data-aos='zoom-in' className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={avatar}
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
                                <Button style={{textDecorations:'none',color:'black'}} size="small" color="primary">
                                Share
                                </Button>
                                <Button style={{textDecorations:'none',color:'black'}} size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        <Card data-aos='zoom-in' className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={avatar}
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
                                <Button style={{textDecorations:'none',color:'black'}} size="small" color="primary">
                                Share
                                </Button>
                                <Button style={{textDecorations:'none',color:'black'}} size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-around',margin:'20px 0'}}>
                        <Card data-aos='zoom-in' className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={avatar}
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
                                <Button style={{textDecorations:'none',color:'black'}} size="small" color="primary">
                                Share
                                </Button>
                                <Button style={{textDecorations:'none',color:'black'}} size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        <Card data-aos='zoom-in' className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={avatar}
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
                                <Button style={{textDecorations:'none',color:'black'}} size="small" color="primary">
                                Share
                                </Button>
                                <Button style={{textDecorations:'none',color:'black'}} size="small" color="primary">
                                Learn More
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
