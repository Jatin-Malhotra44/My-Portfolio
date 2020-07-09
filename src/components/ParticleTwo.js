import React from 'react';  
import Particles from 'react-particles-js'; 
   
function ParticleTwo() { 
  return ( 
    <div className="App"> 
      By Ankit Bansal 
      <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 100, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      /> 
   
    </div> 
  ); 
} 
   
export default ParticleTwo; 