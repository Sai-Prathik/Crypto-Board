import React, { useState } from 'react' ; 
function SearchBar(props) {
 

  function getInput(e){ 
    props.onTextChange(e);
  }



  return (
    <>
      <input className='search-bar' onKeyUp={e=>getInput(e.target.value)} placeholder='Search for a Coin....'  />
    </>
  )
}

export default SearchBar;
