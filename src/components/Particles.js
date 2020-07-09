import React from 'react'; 
import ParticleBackground from 'react-particle-backgrounds'
   
const Particle=()=>{ 
    const settings = {
        canvas: {
          position: 'absolute',
          canvasFillSpace: true,
          width: 200,
          height: 1200,
          useBouncyWalls: true
        },
        particle: {
          particleCount: 150,
          color: 'white',
          minSize: 4,
          maxSize: 5
        },
        velocity: {
          directionAngle: 0,
          directionAngleVariance: 360,
          minSpeed: 1,
          maxSpeed: 3
        },
        opacity: {
          minOpacity: 0,
          maxOpacity: 0.5,
          opacityTransitionTime: 3000
        }
      }
    
    return ( 
        <div>
            <ParticleBackground settings={settings}/>
        </div>
        
         
  ); 
} 
   
export default Particle; 