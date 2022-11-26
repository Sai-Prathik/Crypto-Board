import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { klines } from './Config/API';
import axios from 'axios';
import { SingleCoin } from './Config/API';



function CoinPage() {
  let {id} = useParams()
  const [coin_details,set_coin_details] = useState({}) 

  useEffect(()=>{
    get_coin() 
  },[])

  const get_coin= async()=>{
    const {data} = await axios.get(SingleCoin(id));
    set_coin_details(data);
    console.log(data)
 };



  return (
    <div className='coinpage-wrap' > 
      <div className='coin-description' style={{backgroundImage : `url(${coin_details.image})`}}> 
      <div className= 'c-item1'>
        <div>
          test
        </div>
        </div> 
        </div>
      <div className='coin-charts'>Charts</div>
    </div>
  )
}

export default CoinPage;
export var coinId;
