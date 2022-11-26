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
  const [pos,set_pos] = useState(100);
  const slide = useRef();
  const carousel = useRef();
  const left = useRef();
  const right = useRef();
  
  const get_trending_coins= async()=>{
     const {data} = await axios.get(TrendingCoins("USD"));
     setTrendingCoins(data);
  };
 
   
      
useEffect(()=>{  

    get_trending_coins(); 
    console.log(slide.current.clientWidth);  
    setCarWidth(carousel.current.clientWidth);  
    setPosDiff(slide.current.clientWidth*0.3); 
  autoscroll()

  },[])

  function scrollCarousel(direction){ 
     switch(direction){
       case "left":{
        console.log("left:"+pos)
        set_pos(pos-100)
        if(pos<0){
          set_pos(100)
        }
        else{
          carousel.current.scroll(pos,0); 
        }
        
        break;
      }
          

       case "right":{  
        set_pos(pos+100) 
        if(pos>1400){
          scrollCarousel("reset")
        }
        else{
          carousel.current.scroll(pos,0);
        }
         break;
       }

       case "reset":{
        console.log('reset')
        set_pos(100)
        carousel.current.scroll(0,0)
        break;
       }
     }
     

  }

  function autoscroll(){
     setInterval(function handler(){
      right.current.click()
      console.log(pos)
     },3000)
  }
   
 

  return (  
    <> 
    <div className='car-div'> 
    <div className='car-wrap' ref={slide} >
     <button type='button' className="dir-btn"  ref={left} onClick={()=>{scrollCarousel("left")}}  >Left</button>
    <div className='slide' ref={carousel} >
    
 
        {
          coins.map(function(object,i){
            return <CoinCard obj={object}  key={object.id} />
          })
        }
       
    </div>
     <button type='button' className="dir-btn" ref={right} onClick={()=>{scrollCarousel("right")}}  >Right</button> 
    </div>
    </div>
    </>
  )
}



export default Carousel
