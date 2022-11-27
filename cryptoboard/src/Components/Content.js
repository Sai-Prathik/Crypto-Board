import React from 'react'
import Carousel from './HomePage/Carousel'; 
import CoinsTable from './HomePage/CoinsTable';
import "./../Styles/Content.css";
import Test from "./Test";
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link,
  useParams
} from "react-router-dom";
import coinId from "./CoinPage/CoinPage"; 
import CoinPage from "./CoinPage/CoinPage";



const  Content = () => { 



  return ( 
    <section id="cnt" className='content'>
      <Router>
        <Routes>

    <Route path='/Crypto-Board' element={
      <>
      <Carousel/>
      <CoinsTable/>
     </> 
    
    }/>   

    <Route path="/coin/:id"  element={<CoinPage/>}/> 
  </Routes>
     </Router>
    </section> 
  )
}

export default Content
