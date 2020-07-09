import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class Background extends Component {
  render () {
    return (
      <div>
      <ParticlesBg type="circle" bg={true} />
      </div>
    )
  }
}
export default Background