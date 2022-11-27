import React, { useEffect, useState } from 'react';
import "../../Styles/CoinsTable.css";
import {Line} from "react-chartjs-2";
import SearchBar from '../HomePage/SearchBar';
import { CoinList, get_price, HistoricalWeekChart, SingleCoin } from '../../Config/API';
import axios from 'axios'; 
import CoinRow from './CoinRow';
import { searchCoins } from '../../Config/API';

 

function CoinsTable() {

const [coinsData,setCoinsList]=useState([]);
const [index,setIndex] = useState(25); 
const [query,getQuery] = useState(""); 

const get_coins= async()=>{  
    const allCoins = await axios.get(CoinList("USD")); 
    setCoinsList(allCoins.data);
}

async function  getCoinsData(ids){   
  const coins=  await axios.get(get_price(ids,"usd"));    
  setCoinsList(coins.data);
}



const SearchCoins=async()=>{
  const result = await axios.get(searchCoins(query)); 
  let searchedCoins=result.data.coins; 
  let ids="";
  searchedCoins.forEach(element => {
    ids+=element.id+",";
    
  });    
  getCoinsData(ids.slice(0,-1)); 
}

const getSearchQuery=function(key){
  getQuery(key);
}

 
useEffect(()=>{
  if(query.length>0){   
    SearchCoins(); 
  }
  else{  
  }
},[query])

useEffect(()=>{ 
  get_coins();
},[])


  return (
    <>
    <div className='coins-lst-wrap'>
      <SearchBar onTextChange={getSearchQuery} />
      <div className='coins-lst'> 
      <div className='Table-Header'> 
        <div className='Heading'>Coin</div> 
        <div className='details'>
          <div>Price</div>
          <div>24h Change</div>
          <div>Market Cap</div> 
        </div>
      </div>   
      </div>
      <div className='coins-wrp' onScroll={event=>{console.log(event.target.clientWidth)}}> 
      {coinsData.map(function(object,index){ 
         return(<CoinRow data={object} key ={index}/>)
      })

      }
      </div>
    </div>
    </>
  )
}

export default CoinsTable
