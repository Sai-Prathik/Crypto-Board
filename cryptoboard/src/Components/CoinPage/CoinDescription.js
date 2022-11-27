import React from 'react'

function CoinDescription(props) {
    console.log(props.coin_details)
  return (
    <div className='coin-description'> 
    <div className="particle-network-animation">
        <div className='glow'></div>
        <div className='glow-1'></div>
        <div className='glow-2'></div>
        <div className='glow-3'></div>
    </div>
    <div className= 'c-item1'>
       <div className='column'>Left</div>
       <div className='column'>Right</div>
      </div> 
      
      </div>
  )
}

export default CoinDescription