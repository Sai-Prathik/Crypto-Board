import React from 'react';
import logo from './Assets/CBLogo.png';
import {AppBar,Container, ListItem, MenuItem, Select, Toolbar,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core'; 
import SearchBar from './SearchBar';
import man from "./Assets/man.png";
import { Link } from 'react-router-dom';

const Header = () => {
    
    const useStyles = makeStyles(()=>({
        App:{
            backgroundColor:"#071836" 
        },
        Title:{
            color:"#FFDF00",
            fontWeight: "bold",
            fontFamily: "Segoe UI",
            fontSize: "x-large" 
        },

         Logo:{
             width:"3.5%",
             marginLeft:"auto"
            
         },

           
    }));

    const classes=useStyles()


  return (
    <>
    <AppBar position='sticky' className={classes.App}>
    <Container> 
        
        <Toolbar className={classes.Nav}>
            
           <Typography className={classes.Title} >CryptoBoard</Typography> 
             
            <img src={man} className={classes.Logo}/>

        </Toolbar>
    </Container>
    
    </AppBar>
    </>
  )
}

export default Header
