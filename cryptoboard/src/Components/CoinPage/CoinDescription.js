import React from 'react'
import Particles from "react-tsparticles"
import particlesConfig from '../../Styles/Particles/particles_config'
import Particlesbg from '../../Styles/Particles/Particlesbg'

function CoinDescription(props) {
    console.log(props.coin_details)
    
  return ( 
    <div className='coin-description'>
      <Particlesbg/>
    </div>
   
       
  )
}

export default CoinDescription