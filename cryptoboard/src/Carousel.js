import React, { useRef } from 'react';
import CoinCard from "./CoinCard"; 
import axios from "axios";
import { TrendingCoins } from './Config/API';
import { useState,useEffect } from 'react';
import left_arrow from './Assets/left_arrow.svg';
import "./Styles/Content.css";  

const Carousel=()=> {
  const [coins,setTrendingCoins] = useState([]);
  const [carWidth,setCarWidth] = useState(0); 
  const [pos_diff,setPosDiff] = useState(0);
  const slide = useRef();
  const carousel = useRef();
  var pos = 0;

  const get_trending_coins= async()=>{
     const {data} = await axios.get(TrendingCoins("USD"));
     setTrendingCoins(data);
  };
 
   
      
useEffect(()=>{  

    get_trending_coins(); 
    console.log(slide.current.clientWidth);  
    setCarWidth(carousel.current.clientWidth);  
    setPosDiff(slide.current.clientWidth*0.3);



  },[])

  function scrollCarousel(direction){ 
     switch(direction){
       case "left":{
         console.log("left");
          
          break;
       }

       case "right":{
         console.log("right"); 
         break;
       }
     }
     

  }

   
 

  return (  
    <> 
    <div className='car-div'> 
    <div className='car-wrap' ref={slide} >
     <button type='button' className="dir-btn" onClick={()=>{scrollCarousel("left")}}  >Left</button>
    <div className='slide' ref={carousel} >
    
 
        {
          coins.map(function(object,i){
            return <CoinCard obj={object} key={object.id} />
          })
        }
       
    </div>
     <button type='button' className="dir-btn" onClick={()=>{scrollCarousel("right")}}  >Right</button> 
    </div>
    </div>
    </>
  )
}



export default Carousel
