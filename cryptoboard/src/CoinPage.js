import React from 'react';
import { useParams } from 'react-router-dom';
import { klines } from './Config/API';
import axios from 'axios';


var coinId = "Bticoin";

function CoinPage() {
  let {id} = useParams()
  return (
    <div className='coinpage-wrap'> 
      <div className='coin-description'>Description</div>
      <div className='coin-charts'>Charts</div>
    </div>
  )
}

export default CoinPage;
export var coinId;
