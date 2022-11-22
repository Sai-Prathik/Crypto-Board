import React, { useEffect, useState } from 'react' 
function Test() {
    const [state,setState] = useState(0);

    const setData = async ()=>{
        setState(10);
    }

    useEffect(()=>{
        console.log(state);
    },[state])
    
    useEffect(()=>{
        setData();
    },[])


  return (
    <div>
      <div>{state}</div>
    </div>
  )
}

export default Test
