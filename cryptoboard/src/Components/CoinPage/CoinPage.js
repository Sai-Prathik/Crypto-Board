import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { klines } from '../../Config/API';
import axios from 'axios';
import { SingleCoin } from '../../Config/API';
import CoinDescription from './CoinDescription';
import CoinCharts from './CoinCharts';


function CoinPage() {
  let {id} = useParams()
  const [coin_details,set_coin_details] = useState({}) 
  const [innerLayout,setInnerLayout] = useState(<></>)

  useEffect(()=>{
    get_coin()  
  },[])
 

  const get_coin= async ()=>{ 
    const {data} =  await axios.get(SingleCoin(id)); 
    set_coin_details(data);  
 };
 


  return (
    <div className='coinpage-wrap' >  
    {  Object.keys(coin_details).length==0?<></>:<CoinDescription coin_details={coin_details} />} 
   {0==0?<></>:<CoinCharts/>}
      
    </div>
  )
}

export default CoinPage;
export var coinId;
