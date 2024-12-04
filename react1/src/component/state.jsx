import { useState,useEffect } from "react";

function State(){

    const [Total,setTotal]=useState(0)
    const [Double,setDouble]=useState(0)
    useEffect(()=>{
        setDouble(Total*2);
     },[Total])
    
return <>
<button  onClick={()=>setTotal(Total+1)}>Ted</button>
<button  onClick={()=>setTotal(Total-1)}>Barney</button>
<h1>{Total}</h1>
<h1>{Double}</h1>
</>
}

export default State;