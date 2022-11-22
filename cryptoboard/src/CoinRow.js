import React, { useEffect, useState } from 'react'; 
import "./Styles/CoinsTable.css";
import {Line} from "react-chartjs-2";
import { HistoricalWeekChart } from './Config/API';
import axios from 'axios';

function CoinRow(props) {
    var coinData = props.data; 

    const [weekHistory,setWeekData] = useState({});
    const [data,setData] = useState({});

    function customizeData(data){
        let prices = [];
        let ind = [];
        let i=0;
        data.forEach(element => {
            i++;
            ind.push(i);
            prices.push(element[0]);
        });
        return {
            labels:ind,
            datasets:[{data:prices}]
        };
    }

     

  return ( 
    <div className='coin-item-wrp' key={coinData.index}>
    <div className='flex'>

    <img src={coinData.image} className="img-logo"/> 
    <div className='coinName'>
     {coinData.symbol.toUpperCase()}<br/>
     {coinData.name}
     </div>  
     
    <div className='details'>
      <div>{coinData.current_price}</div>
      <div>{coinData.price_change_percentage_24h}%</div>
      <div>{coinData.market_cap}</div>
    </div>
    
    </div>
  </div>
  )
}

export default CoinRow
