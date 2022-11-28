import React from 'react'
import Particles from "react-tsparticles"
import particlesConfig from './particles_config'

function Particlesbg(props) {
  const styles = {
    root: {
        fontFamily: "sans-serif",
        textAlign: "center",
        height: "100%",
        background: "white",
        color:"black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};
  return (
    <Particles params={particlesConfig} style={styles.root}> 
    </Particles>
  )
}

export default Particlesbg