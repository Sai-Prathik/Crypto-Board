import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';





function CoinCard(props) { 

  function get_status(){
    let change=props.obj.price_change_percentage_24h;
    if(change>0){
      return {color:"green",fontSize:"larger",fontWeight:"bold"};
    }
    else if(change==0){
      return {color:"gray",fontSize:"larger",fontWeight:"bold"};
    }
    else{
      return {color:"red",fontSize:"larger",fontWeight:"bold"};
    }
  }
   
   
  //price_change_percentage_24h
   
  return (
    <Link to={`/coin/${props.obj.name.toLowerCase()}`}>
  <div className='cc' ref={props.itemRef}> 

  <div className='Logo'>
  <img src={props.obj.image} className="coinLogo"/>
  </div>

  <div id="CoinTitle" className='title'>{props.obj.name}</div> 
 <div  className="flex-display "> 
   <div className='perchng' style={get_status()}>{props.obj.price_change_percentage_24h.toFixed(3)}%</div>
   </div>
  </div> 
  </Link>
  ) 
}

export default CoinCard
