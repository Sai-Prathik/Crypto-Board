import './Styles/App.css';
import Content from "./Components/Content"
import Header from './Components/Header';
import "./Assets/man.png" ;
import './Styles/CoinCard.css';
import './Styles/Carousel.css';
import './Styles/CoinPage.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() { 
  return (<>
  <Header/>
  <Content/>
  </>);
}

export default App;
